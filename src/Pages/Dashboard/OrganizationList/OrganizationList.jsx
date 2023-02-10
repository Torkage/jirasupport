import { NavLink } from "@mantine/core";
import useIssues from "../../../hooks/useIssues";

const OrganizationList = () => {
  const { organizations, issueFilters, actions } = useIssues();

  const areAllSelected = issueFilters.organizations.length == organizations.length;

  return (
    <>
      <NavLink
        onClick={() =>
          actions.onChangeFilters({
            target: {
              name: "organizations",
              value: areAllSelected ? [] : organizations,
            },
          })
        }
        label={areAllSelected ? "Aucun" : "Tous"}
      />
      {organizations?.map((orga) => (
        <NavLink
          key={`orga${orga}`}
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
      ))}
    </>
  );
};

export default OrganizationList;
