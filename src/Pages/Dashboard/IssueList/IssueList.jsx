import { Container, Group, ScrollArea } from "@mantine/core";
import { useEffect } from "react";
import useIssues from "../../../hooks/useIssues";
import useProjects from "../../../hooks/useProjects";
import IssueCharts from "./IssueCharts";
import IssueDetails from "./IssueDetails";
import MonthTimeline from "./MonthTimeline";
import IssueStats from "./IssueStats";

const IssueList = () => {
  const { selectedProject } = useProjects();
  const { isLoading, actions } = useIssues();
  useEffect(() => {
    actions.getIssues();
  }, [selectedProject?.id]);

  return isLoading ? (
    <div>Chargement des tickets...</div>
  ) : (
    <Container>
      <IssueStats />
      <IssueCharts />
      <Group position="apart">
        <ScrollArea style={{ maxWidth: 350, height: "90vh", paddingRight: 20 }}>
          <MonthTimeline />
        </ScrollArea>
        <ScrollArea style={{ maxWidth: 540, height: "90vh" }}>
          <IssueDetails />
        </ScrollArea>
      </Group>
    </Container>
  );
};

export default IssueList;
