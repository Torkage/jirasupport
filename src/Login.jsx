import { Anchor, Center, Container } from "@mantine/core";
import { VITE_JIRA_CLIENT_ID } from "./config";

const Login = () => {
  return (
    <Container>
      <Center style={{ height: "100vh" }}>
        <Anchor
          href={`https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=${VITE_JIRA_CLIENT_ID}&scope=read%3Ajira-work&redirect_uri=http%3A%2F%2F127.0.0.1:5173%2F&state=10positif&response_type=code&prompt=consent`}
        >
          Connexion à JIRA
        </Anchor>
      </Center>
    </Container>
  );
};

export default Login;
