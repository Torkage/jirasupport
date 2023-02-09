import { NavLink } from "@mantine/core";
import useIssues from "../../../hooks/useIssues";

const OrganizationList = () => {
  const { organizations, issueFilters, actions } = useIssues();

  return organizations?.map((orga) => (
    <NavLink
      active={issueFilters.organizations.includes(orga)}
      onClick={() =>
        actions.onChangeFilters({
          target: {
            name: "organizations",
            value: issueFilters.organizations.includes(orga)
              ? issueFilters.organizations.filter((o) => o !== orga)
              : [...issueFilters.organizations, orga],
          },
        })
      }
      label={orga}
    />
  ));
};

export default OrganizationList;
