import { ActionIcon, Badge, Card, Group, Stack, Text } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons";
import useIssues from "../../../hooks/useIssues";
import { tools } from "../../../utils/tools";

const IssueDetails = () => {
  const { filteredIssues } = useIssues();

  return (
    <Stack>
      {filteredIssues?.map((issue) => {
        return (
          <Card shadow="xs" key={`issue${issue.id}`}>
            <Group position="apart" style={{ maxWidth: "100%" }}>
              <Group spacing="xs">
                <img style={{ width: 20 }} src={`/assets/${issue.fields.issuetype.avatarId}.png`} />
                <Badge color="blue">{issue.key}</Badge>
                <ActionIcon
                  component="a"
                  href={issue.fields.customfield_10010?._links?.agent}
                  target="_blank"
                >
                  <IconExternalLink size={18} />
                </ActionIcon>
                <Group align="center" spacing="xs">
                  <img src={issue.fields.status.iconUrl} style={{ width: 15 }} />
                  <Text variant="light" color="gray" fz="sm" align="center">
                    {issue.fields.status.name}
                  </Text>
                </Group>
              </Group>
              <Group spacing="xs">
                {issue.fields.assignee && (
                  <Badge color="gray">{issue.fields.assignee.displayName}</Badge>
                )}
                <Text>{tools.convertSecondsToTime(issue.fields.timespent)}</Text>
              </Group>
            </Group>
            <Text fw="bold" py="md">
              {issue.fields.summary}
            </Text>
            <Group position="apart">
              <Group>
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
            </Group>
          </Card>
        );
      })}
    </Stack>
  );
};

export default IssueDetails;
