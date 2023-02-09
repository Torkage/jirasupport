import { Group, Text } from "@mantine/core";
import useIssues from "../../../hooks/useIssues";

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
        {filteredIssues?.length} tickets // {stats.timespent.hours}h
        {/* (
        {stats.timespent.nbTicketsWithoutTimespent} tickets non comptabilisés) */}
      </Text>
    </Group>
  );
};

export default IssueStats;
