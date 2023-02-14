import { atom, useAtom } from "jotai";
import { tools } from "../utils/tools";
import { filteredIssuesAtom, monthsAtom } from "./useIssues";

const statsAtom = atom((get) => {
  const issues = get(filteredIssuesAtom);
  const months = get(monthsAtom);

  const averageTimeToResolution = tools.convertSecondsToTime(
    months.reduce((a, b) => {
      return a + b.timeToResolution.seconds;
    }, 0) / months.length
  );

  const totalIssues = issues.length;
  const timespent = tools.calculateTimespent(issues);
  const nbTicketsWithoutTimespent = timespent.nbTicketsWithoutTimespent;
  const totalTimespent = tools.convertSecondsToTime(timespent.seconds);
  const averageTimespentByIssue = tools.convertSecondsToTime(
    timespent.seconds / (totalIssues - nbTicketsWithoutTimespent)
  );

  const averageNbIssuesByMonth = Math.round(tools.round(totalIssues / months.length));

  return {
    totalIssues,
    averageNbIssuesByMonth,
    totalTimespent,
    averageTimespentByIssue,
    averageTimeToResolution,
  };
});

const useGlobalStats = () => {
  const [stats, setStats] = useAtom(statsAtom);

  return stats;
};

export default useGlobalStats;
