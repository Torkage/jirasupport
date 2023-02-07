import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { VITE_JIRA_EMAIL, VITE_JIRA_TOKEN, VITE_JIRA_URL } from "./config";

function App() {
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await axios.get(`${VITE_JIRA_URL}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: VITE_JIRA_EMAIL,
        password: VITE_JIRA_TOKEN,
      },
      withCredentials: true,
    });
  };

  return <div className="App">{VITE_JIRA_URL}test</div>;
}

export default App;
