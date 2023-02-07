const isDev = import.meta.env.VITE_MODE == "development";
let JIRA_EMAIL = isDev ? import.meta.env.VITE_JIRA_EMAIL : process.env.VITE_JIRA_EMAIL;
let VITE_JIRA_TOKEN = isDev ? import.meta.env.VITE_VITE_JIRA_TOKEN : process.env.VITE_JIRA_TOKEN;
let VITE_JIRA_URL = isDev ? import.meta.env.VITE_VITE_JIRA_URL : process.env.VITE_JIRA_URL;
