import { AppShell, Group, Header, Navbar, Text, Title } from "@mantine/core";
import useProjects from "../../hooks/useProjects";
import IssueList from "./IssueList/IssueList";
import OrganizationList from "./OrganizationList/OrganizationList";

const Dashboard = () => {
  const { selectedProject } = useProjects();

  return (
    <AppShell
      padding="xs"
      navbar={
        <Navbar width={{ base: 150 }} p="xs">
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
