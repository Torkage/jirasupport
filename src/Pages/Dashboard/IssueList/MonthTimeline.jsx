import { Button, Timeline } from "@mantine/core";
import { IconCalendarDue } from "@tabler/icons";
import { DateTime } from "luxon";
import useIssues from "../../../hooks/useIssues";
import { tools } from "../../../utils/tools";
import StatLine from "./StatLine";

const MonthTimeline = () => {
  const { months, issueFilters, actions } = useIssues();

  return (
    months?.length > 0 && (
      <Timeline active={months?.length - 1} bulletSize={24} lineWidth={2}>
        {months?.map((month) => {
          return (
            <Timeline.Item
              key={`month${month.month}`}
              bullet={<IconCalendarDue size={12} />}
              title={DateTime.fromISO(month.month).setLocale("fr").toFormat("LLLL yyyy")}
            >
              <StatLine
                label="tickets créés"
                value={month.nbIssues}
                valueEvolution={month.nbIssuesEvolution}
              />
              <StatLine
                label="tickets résolus"
                value={month.nbResolvedIssues}
                valueEvolution={month.nbResolvedIssuesEvolution}
                neutral
              />
              <StatLine
                label="dépensées"
                value={tools.convertSecondsToTime(month.timespent.seconds)}
                valueEvolution={month.timespentEvolution}
              />
              <StatLine
                label="dépensées/ticket"
                value={tools.convertSecondsToTime(month.timespentPerIssue.seconds)}
                valueEvolution={month.timespentPerIssueEvolution}
              />
              <StatLine
                label="durée vie moy."
                value={tools.convertSecondsToTime(month.timeToResolution.seconds)}
                valueEvolution={month.timeToResolutionEvolution}
              />
              <Button
                fullWidth
                color="blue"
                variant={issueFilters.months.includes(month.month) ? "filled" : "subtle"}
                onClick={() => actions.onClickMonth(month.month)}
              >
                Sélectionner ce segment
              </Button>
              {issueFilters.organizations.length == 1 && (
                <Button
                  fullWidth
                  color="gray"
                  variant="subtle"
                  onClick={() => actions.openReport(month.month)}
                >
                  Afficher le rapport
                </Button>
              )}
            </Timeline.Item>
          );
        })}
      </Timeline>
    )
  );
};

export default MonthTimeline;
