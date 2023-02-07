const isDev = import.meta.env.VITE_MODE == "development";
export const VITE_JIRA_EMAIL = isDev
  ? import.meta.env.VITE_JIRA_EMAIL
  : process.env.VITE_JIRA_EMAIL;

export const VITE_JIRA_TOKEN = isDev
  ? import.meta.env.VITE_VITE_JIRA_TOKEN
  : process.env.VITE_JIRA_TOKEN;

export const VITE_JIRA_URL = isDev ? import.meta.env.VITE_JIRA_URL : process.env.VITE_JIRA_URL;
