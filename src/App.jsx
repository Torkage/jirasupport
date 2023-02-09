import "./App.css";
import Login from "./Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import useAuth from "./hooks/useAuth";
import axios from "axios";
import { Settings } from "luxon";
import { MantineProvider } from "@mantine/core";

Settings.defaultZoneName = "Indian/Reunion";

function App() {
  const { isConnected, logout } = useAuth();

  axios.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      if (error.response.status == 401) {
        console.log("UNAUTHORIZED - login out");
        logout();
      }
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {isConnected ? <Dashboard /> : <Login />}
    </MantineProvider>
  );
}

export default App;
