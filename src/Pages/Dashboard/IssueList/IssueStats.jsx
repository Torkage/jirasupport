import { Group, Badge } from "@mantine/core";
import useGlobalStats from "../../../hooks/useGlobalStats";
import useIssues from "../../../hooks/useIssues";
import { tools } from "../../../utils/tools";

const IssueStats = () => {
  const stats = useGlobalStats();

  return (
    <Group
      sx={(theme) => ({
        padding: theme.spacing.md,
        marginBottom: theme.spacing.md,
      })}
      position="left"
    >
      <Badge>Nombre moyen de tickets/mois : {stats.averageNbIssuesByMonth}</Badge>
      <Badge>Temps moyen dépensé/ticket : {stats.averageTimespentByIssue}</Badge>
      <Badge>Temps moyen durée de vie/ticket : {stats.averageTimeToResolution}</Badge>
    </Group>
  );
};

export default IssueStats;
