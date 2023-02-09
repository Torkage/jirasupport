import {
  ActionIcon,
  Badge,
  Box,
  Card,
  Container,
  Group,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";
import { useEffect } from "react";
import useIssues from "../../../hooks/useIssues";
import useProjects from "../../../hooks/useProjects";
import IssueDetails from "./IssueDetails";
import IssueFilters from "./IssueFilters";
import IssueStats from "./IssueStats";

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
      <Group position="apart">
        <ScrollArea style={{ maxWidth: 350, height: "90vh", paddingRight: 20 }}>
          <IssueFilters />
        </ScrollArea>
        <ScrollArea style={{ maxWidth: 500, height: "90vh" }}>
          <IssueStats />
          <IssueDetails />
        </ScrollArea>
      </Group>
    </Container>
  );
};

export default IssueList;
