import { Badge, Box, Button, Card, Group, Paper, Stack, Text } from "@mantine/core";
import { DateTime } from "luxon";
import useIssues from "../../../hooks/useIssues";
import { tools } from "../../../utils/tools";
import StatLine from "./StatLine";

const IssueFilters = () => {
  const { organizations, months, issueFilters, actions } = useIssues();

  return (
    <Box>
      {months.length > 0 && (
        <Group mt="md">
          {months?.map((month) => {
            return (
              <Card shadow="sm" p="lg" radius="md" withBorder>
                <Box>
                  <Text weight={500} align="center" pt="2" transform="capitalize">
                    {" "}
                    {DateTime.fromISO(month.month).setLocale("fr").toFormat("LLLL yyyy")}
                  </Text>
                </Box>

                <Box
                  sx={(theme) => ({
                    padding: theme.spacing.md,
                  })}
                >
                  <StatLine
                    label="tickets"
                    value={month.nbIssues}
                    valueEvolution={month.nbIssuesEvolution}
                  />
                  <StatLine
                    label="H dépensées"
                    value={month.timespent.hours}
                    valueEvolution={month.timespentEvolution}
                  />
                  <StatLine
                    label="H dépensées/ticket"
                    value={month.timespentPerIssue}
                    valueEvolution={month.timespentPerIssueEvolution}
                  />
                  <StatLine
                    label="H durée vie moy."
                    value={month.timeToResolution}
                    valueEvolution={month.timeToResolutionEvolution}
                  />
                </Box>
                <Button
                  fullWidth
                  color="blue"
                  variant={issueFilters.months.includes(month.month) ? "filled" : "subtle"}
                  onClick={() =>
                    actions.onChangeFilters({
                      target: {
                        name: "months",
                        value: issueFilters.months.includes(month.month)
                          ? issueFilters.months.filter((o) => o !== month.month)
                          : [...issueFilters.months, month.month],
                      },
                    })
                  }
                >
                  Afficher les tickets
                </Button>
              </Card>
            );
          })}
        </Group>
      )}
    </Box>
  );
};

export default IssueFilters;
