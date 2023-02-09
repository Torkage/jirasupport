import axios from "axios";
import { atom, useAtom } from "jotai";
import useSites from "./useSites";

const projectsAtom = atom(null);
const selectedProjectAtom = atom({
  expand: "description,lead,issueTypes,url,projectKeys,permissions,insight",
  self: "https://api.atlassian.com/ex/jira/6481660c-2610-4487-bb94-2ae962a24873/rest/api/2/project/10023",
  id: "10023",
  key: "ST1",
  name: "Support Technique 10POSITIF",
  avatarUrls: {
    "48x48":
      "https://api.atlassian.com/ex/jira/6481660c-2610-4487-bb94-2ae962a24873/rest/api/2/universal_avatar/view/type/project/avatar/10575",
    "24x24":
      "https://api.atlassian.com/ex/jira/6481660c-2610-4487-bb94-2ae962a24873/rest/api/2/universal_avatar/view/type/project/avatar/10575?size=small",
    "16x16":
      "https://api.atlassian.com/ex/jira/6481660c-2610-4487-bb94-2ae962a24873/rest/api/2/universal_avatar/view/type/project/avatar/10575?size=xsmall",
    "32x32":
      "https://api.atlassian.com/ex/jira/6481660c-2610-4487-bb94-2ae962a24873/rest/api/2/universal_avatar/view/type/project/avatar/10575?size=medium",
  },
  projectTypeKey: "service_desk",
  simplified: false,
  style: "classic",
  isPrivate: false,
  properties: {},
});

const useProjects = () => {
  const { selectedSite } = useSites();
  const [projects, setProjects] = useAtom(projectsAtom);
  const [selectedProject, setSelectedProject] = useAtom(selectedProjectAtom);

  const getProjects = () => {
    axios
      .get(`https://api.atlassian.com/ex/jira/${selectedSite.id}/rest/api/2/project`)
      .then((data) => {
        console.log("projects", data?.data);
        setProjects(data?.data);
      });
  };

  return {
    projects,
    selectedProject,
    setSelectedProject,
    getProjects,
  };
};

export default useProjects;
