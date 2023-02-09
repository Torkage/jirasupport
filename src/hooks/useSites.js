import axios from "axios";
import { atom, useAtom } from "jotai";

const sitesAtom = atom(null);
const selectedSiteAtom = atom({
  id: "6481660c-2610-4487-bb94-2ae962a24873",
  url: "https://10positif.atlassian.net",
  name: "10positif",
  scopes: ["read:jira-work"],
  avatarUrl: "https://site-admin-avatar-cdn.prod.public.atl-paas.net/avatars/240/rocket.png",
});

const useSites = () => {
  const [sites, setSites] = useAtom(sitesAtom);
  const [selectedSite, setSelectedSite] = useAtom(selectedSiteAtom);

  const getSites = () => {
    axios.get(`https://api.atlassian.com/oauth/token/accessible-resources`).then((data) => {
      console.log("sites", data?.data);
      setSites(data?.data);
    });
  };

  return {
    sites,
    selectedSite,
    setSelectedSite,
    getSites,
  };
};

export default useSites;
