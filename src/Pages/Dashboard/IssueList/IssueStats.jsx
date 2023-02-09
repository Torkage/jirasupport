import { Group, Text } from "@mantine/core";
import useIssues from "../../../hooks/useIssues";
import { tools } from "../../../utils/tools";

const IssueStats = () => {
  const { filteredIssues, stats } = useIssues();

  return (
    <Group
      sx={(theme) => ({
        padding: theme.spacing.md,
      })}
      position="right"
    >
      <Text>
        {filteredIssues?.length} tickets // {tools.convertSecondsToTime(stats.timespent.seconds)}
        {/* (
        {stats.timespent.nbTicketsWithoutTimespent} tickets non comptabilisés) */}
      </Text>
    </Group>
  );
};

export default IssueStats;
