import { useEffect } from "react";
import useSites from "../../hooks/useSites";

const SiteList = () => {
  const { sites, setSelectedSite, getSites } = useSites();

  useEffect(() => {
    getSites();
  }, []);

  return sites ? (
    <ul>
      {sites.map((site) => {
        return (
          <li>
            <button onClick={() => setSelectedSite(site)}>{site.name}</button>
          </li>
        );
      })}
    </ul>
  ) : null;
};

export default SiteList;
