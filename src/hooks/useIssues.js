import axios from "axios";
import { atom, useAtom } from "jotai";
import { DateTime } from "luxon";
import { VITE_MODE } from "../config";
import { tools } from "../utils/tools";
import useProjects from "./useProjects";
import useSites from "./useSites";

const issuesAtom = atom([]);
const selectedIssueAtom = atom(null);
const organizationsAtom = atom([]);
const isLoadingAtom = atom(false);

const issueFiltersAtom = atom({
  organizations: [],
  months: [],
});

const isInitAtom = atom(false);

const filteredIssuesAtom = atom((get) => {
  const issues = get(issuesAtom);
  const issueFilters = get(issueFiltersAtom);
  return issues.filter((i) => {
    let organizationOk = true;
    let monthOk = true;

    //filtre par organisation
    if (i.fields.customfield_10002?.length > 0) {
      organizationOk =
        i.fields.customfield_10002.length > 0
          ? issueFilters.organizations.includes(i.fields.customfield_10002[0].name)
          : false;
    }

    if (issueFilters.months.length > 0) {
      const sortedMonths = issueFilters.months.sort((a, b) => (a > b ? 1 : -1));
      monthOk = false;
      sortedMonths.forEach((month) => {
        if (
          DateTime.fromISO(i.fields.created).startOf("day") >=
            DateTime.fromISO(month).startOf("day") &&
          DateTime.fromISO(i.fields.created).startOf("day") <=
            DateTime.fromISO(month).endOf("month").startOf("day")
        ) {
          monthOk = true;
          return;
        }
      });
    }
    return organizationOk && monthOk;
  });
});

const monthsAtom = atom((get) => {
  const months = [];
  const issues = get(issuesAtom);
  const issueFilters = get(issueFiltersAtom);
  const filteredIssues = issues.filter((i) => {
    //filtre par organisation
    return i.fields.customfield_10002?.length > 0
      ? issueFilters.organizations.includes(i.fields.customfield_10002[0].name)
      : false;
  });
  if (filteredIssues.length > 0) {
    const sortedIssuesByDateAsc = filteredIssues.sort((a, b) => (a.created > b.created ? 1 : -1));

    const firstIssueDate = DateTime.fromISO(sortedIssuesByDateAsc[0].fields.created);
    const lastIssueDate = DateTime.fromISO(
      sortedIssuesByDateAsc[sortedIssuesByDateAsc.length - 1].fields.created
    );

    const diffMonths = Math.abs(firstIssueDate.diff(lastIssueDate, ["months"]).toObject().months);

    for (var i = 0; i <= diffMonths + 1; i++) {
      const month = firstIssueDate.plus({ months: i }).startOf("month").toISO();
      const issuesThisMonth = filteredIssues.filter(
        (i) =>
          DateTime.fromISO(i.fields.created).startOf("day") >=
            DateTime.fromISO(month).startOf("day") &&
          DateTime.fromISO(i.fields.created).startOf("day") <=
            DateTime.fromISO(month).endOf("month").startOf("day")
      );

      const timespentThisMonth = tools.calculateTimespent(issuesThisMonth);
      const timespentPerIssue = {
        hours: Math.round((timespentThisMonth.hours / issuesThisMonth.length) * 100) / 100,
        seconds: Math.round((timespentThisMonth.seconds / issuesThisMonth.length) * 100) / 100,
      };
      let timeToResolution = tools.calculateAverageTimeToResolution(issuesThisMonth);

      months.push({
        month,
        nbIssues: issuesThisMonth.length,
        timespent: timespentThisMonth,
        nbIssuesEvolution: months[months.length - 1]
          ? tools.calculateIncreasePct(months[months.length - 1].nbIssues, issuesThisMonth.length)
          : 0,
        timespentEvolution: months[months.length - 1]
          ? tools.calculateIncreasePct(
              months[months.length - 1].timespent.seconds,
              timespentThisMonth.seconds
            )
          : 0,
        timespentPerIssue,
        timespentPerIssueEvolution: months[months.length - 1]
          ? tools.calculateIncreasePct(
              months[months.length - 1].timespentPerIssue.seconds,
              timespentPerIssue.seconds
            )
          : 0,
        timeToResolution,
        timeToResolutionEvolution: months[months.length - 1]
          ? tools.calculateIncreasePct(
              months[months.length - 1].timeToResolution.seconds,
              timeToResolution.seconds
            )
          : 0,
      });
    }
  }

  return months.sort((a, b) => (a.month > b.month ? -1 : 1));
});

const statsAtom = atom((get) => {
  const issues = get(filteredIssuesAtom);
  return {
    timespent: tools.calculateTimespent(issues),
  };
});

const useIssues = () => {
  const { selectedSite } = useSites();
  const { selectedProject } = useProjects();
  const [issues, setIssues] = useAtom(issuesAtom);
  const [filteredIssues] = useAtom(filteredIssuesAtom);
  const [selectedIssue, setSelectedIssue] = useAtom(selectedIssueAtom);
  const [organizations, setOrganizations] = useAtom(organizationsAtom);
  const [issueFilters, setIssueFilters] = useAtom(issueFiltersAtom);
  const [months, setMonths] = useAtom(monthsAtom);
  const [isInit, setIsInit] = useAtom(isInitAtom);
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [stats, setStats] = useAtom(statsAtom);

  console.log("months", months);

  const actions = {
    getIssues: (filters = {}, previousResult = []) => {
      setIsLoading(true);
      const organizationsFilter =
        filters?.organizations?.length > 0
          ? `AND Organizations in (${filters.organizations.join(",")})`
          : "";
      axios
        .post(`https://api.atlassian.com/ex/jira/${selectedSite.id}/rest/api/2/search`, {
          jql: `project=${selectedProject.key} AND status in (Canceled, Closed, Done, Resolved, "WON'T DO", "WONT DO") AND resolution in (Done, "Won't Do", "Cannot Reproduce", Declined, "Known Error", "Hardware failure", "Software failure") ${organizationsFilter} ORDER BY created DESC, "Time to resolution" ASC`,
          maxResults: 100,
          startAt: filters?.startAt || 0,
        })
        .then((data) => {
          let result = [...previousResult, ...data?.data?.issues];

          if (
            data?.data?.total > data?.data?.startAt + data?.data?.maxResults &&
            VITE_MODE == "development"
          ) {
            actions.getIssues(
              {
                ...filters,
                startAt: data?.data?.startAt + data?.data?.maxResults,
                maxResults: 100,
              },
              result
            );
          } else {
            if (!isInit) {
              setIsInit(true);
              actions.initOrganizations(result);
            }
            setIssues(result);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setIsLoading(false);
        });
    },

    initOrganizations: (allIssues) => {
      const orgaz = [];
      allIssues?.forEach((issue) => {
        if (issue.fields.customfield_10002.length > 0) {
          const orga = issue.fields.customfield_10002[0].name;
          if (!orgaz.includes(orga)) {
            orgaz.push(orga);
          }
        }
      });
      setOrganizations(orgaz);
    },

    onChangeFilters: (e) => {
      const { name, value } = e.target;
      const additionalStateChange = {};
      if (name == "organizations") {
        additionalStateChange.months = [];
      }
      const newFilters = {
        ...issueFilters,
        [name]: value,
        ...additionalStateChange,
      };
      setIssueFilters(newFilters);
    },
  };

  console.log("issueFilters", issueFilters);

  return {
    issues,
    isLoading,
    selectedIssue,
    setSelectedIssue,
    actions,
    organizations,
    issueFilters,
    filteredIssues,
    months,
    stats,
  };
};

export default useIssues;
