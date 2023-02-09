const isDev = import.meta.env.VITE_MODE == "development";
export const VITE_JIRA_EMAIL = isDev
  ? import.meta.env.VITE_JIRA_EMAIL
  : process.env.VITE_JIRA_EMAIL;

export const VITE_JIRA_TOKEN = isDev
  ? import.meta.env.VITE_VITE_JIRA_TOKEN
  : process.env.VITE_JIRA_TOKEN;

export const VITE_JIRA_URL = isDev ? import.meta.env.VITE_JIRA_URL : process.env.VITE_JIRA_URL;

export const VITE_JIRA_CLIENT_ID = isDev
  ? import.meta.env.VITE_JIRA_CLIENT_ID
  : process.env.VITE_JIRA_CLIENT_ID;

export const VITE_JIRA_CLIENT_SECRET = isDev
  ? import.meta.env.VITE_JIRA_CLIENT_SECRET
  : process.env.VITE_JIRA_CLIENT_SECRET;

export const VITE_REDIRECT_URL = isDev
  ? import.meta.env.VITE_REDIRECT_URL
  : process.env.VITE_REDIRECT_URL;
