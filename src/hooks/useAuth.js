import axios from "axios";
import queryString from "query-string";
import { useEffect, useState } from "react";
import { VITE_JIRA_CLIENT_ID, VITE_JIRA_CLIENT_SECRET, VITE_REDIRECT_URL } from "../config";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const accessTokenAtom = atomWithStorage("access_token", null);

const useAuth = () => {
  axios.defaults.withCredentials = true;
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);

  if (accessToken) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  }

  useEffect(() => {
    const parsed = queryString.parse(location.search);
    if (parsed?.code && !accessToken) {
      getToken(parsed.code);
    }
  }, []);

  const getToken = (code) => {
    axios
      .post("https://auth.atlassian.com/oauth/token", {
        grant_type: "authorization_code",
        client_id: VITE_JIRA_CLIENT_ID,
        client_secret: VITE_JIRA_CLIENT_SECRET,
        code: code,
        redirect_uri: VITE_REDIRECT_URL,
      })
      .then((data) => {
        const token = data?.data?.access_token;
        setAccessToken(token);
      });
  };

  const logout = () => {
    setAccessToken(null);
  };

  return {
    isConnected: accessToken,
    logout,
  };
};

export default useAuth;
