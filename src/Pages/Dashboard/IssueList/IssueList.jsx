import { Container, Group, ScrollArea } from "@mantine/core";
import { useEffect } from "react";
import useIssues from "../../../hooks/useIssues";
import useProjects from "../../../hooks/useProjects";
import useSites from "../../../hooks/useSites";
import { searchIssues } from "../../../services/issueService";
import IssueDetails from "./IssueDetails";
import IssueFilters from "./IssueFilters";
import IssueStats from "./IssueStats";

const IssueList = () => {
  const { selectedSite } = useSites();
  const { selectedProject } = useProjects();
  const { isLoading, filteredIssues, actions } = useIssues();
  useEffect(() => {
    actions.getIssues();
  }, [selectedProject?.id]);

  return isLoading ? (
    <div>Chargement des tickets...</div>
  ) : (
    <Container>
      <IssueStats />
      <Group position="apart">
        <ScrollArea style={{ maxWidth: 350, height: "90vh", paddingRight: 20 }}>
          <IssueFilters />
        </ScrollArea>
        <ScrollArea style={{ maxWidth: 540, height: "90vh" }}>
          <IssueDetails />
        </ScrollArea>
      </Group>
    </Container>
  );
};

export default IssueList;
