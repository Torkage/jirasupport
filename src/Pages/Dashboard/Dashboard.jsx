import { AppShell, Group, Header, Navbar, Text, Title } from "@mantine/core";
import useProjects from "../../hooks/useProjects";
import useSites from "../../hooks/useSites";
import IssueList from "./IssueList/IssueList";
import OrganizationList from "./OrganizationList/OrganizationList";
import ProjectList from "./ProjectList";
import SiteList from "./SiteList";

const Dashboard = () => {
  const { selectedSite } = useSites();
  const { selectedProject } = useProjects();

  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} p="xs">
          {selectedProject && <OrganizationList />}
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <Group align="center">
            <img src="/assets/10Positif.jpg" style={{ width: 30 }} />
            <Title order={3}>10positif-support</Title>
          </Group>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {selectedProject && <IssueList />}
    </AppShell>
  );
};

export default Dashboard;
