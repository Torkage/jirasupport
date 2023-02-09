import { ActionIcon, Badge, Box, Card, Container, Group, Stack, Text } from "@mantine/core";
import { useEffect } from "react";
import useIssues from "../../../hooks/useIssues";
import useProjects from "../../../hooks/useProjects";
import { tools } from "../../../utils/tools";
import IssueFilters from "./IssueFilters";
import IssueStats from "./IssueStats";
import { IconAdjustments, IconExternalLink } from "@tabler/icons";

const IssueList = () => {
  const { selectedProject } = useProjects();
  const { isLoading, filteredIssues, actions } = useIssues();
  useEffect(() => {
    actions.getIssues();
  }, [selectedProject?.id]);

  return isLoading ? (
    <div>Chargement des tickets...</div>
  ) : (
    <Container>
      <IssueFilters />

      <IssueStats />
      <Stack>
        {filteredIssues?.map((issue) => {
          return (
            <Card shadow="xs">
              <Group position="apart" style={{ maxWidth: "100%" }}>
                <Group spacing="xs">
                  <img
                    style={{ width: 20 }}
                    src={`/assets/${issue.fields.issuetype.avatarId}.png`}
                  />
                  <Badge color="blue">{issue.key}</Badge>
                  <ActionIcon
                    component="a"
                    href={issue.fields.customfield_10010?._links?.agent}
                    target="_blank"
                  >
                    <IconExternalLink size={18} />
                  </ActionIcon>
                </Group>
                <Group spacing="xs">
                  {issue.fields.assignee && (
                    <Badge color="gray">{issue.fields.assignee.displayName}</Badge>
                  )}
                  <Text>{tools.transformSecondsToHours(issue.fields.timespent)}h</Text>
                </Group>
              </Group>
              <Text fw="bold" py="md">
                {issue.fields.summary}
              </Text>
              <Group position="right">
                {issue.fields.customfield_10002?.length > 0 && (
                  <Text variant="light" color="gray" fz="sm">
                    {issue.fields.customfield_10002[0].name}
                  </Text>
                )}
                <Text variant="light" color="gray" fz="sm">
                  {issue.fields.creator.displayName}
                </Text>
                <Text variant="light" color="gray" fz="sm">
                  {tools.formatDate(issue.fields.created)}
                </Text>
              </Group>
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
};

export default IssueList;
