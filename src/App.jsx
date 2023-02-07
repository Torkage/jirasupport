import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await axios.get(`${import.meta.env.VITE_JIRA_URL}`, {
      headers: {
        "Content-Type": "application/json",
      },
      auth: {
        username: import.meta.env.VITE_JIRA_EMAIL,
        password: import.meta.env.VITE_JIRA_TOKEN,
      },
      withCredentials: true,
    });
  };

  return <div className="App">{import.meta.env.VITE_JIRA_URL}test</div>;
}

export default App;
