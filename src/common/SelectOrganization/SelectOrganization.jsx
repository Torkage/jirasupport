import { Button, Group } from "@mantine/core";

const SelectOrganization = ({ organizations, onSelectOrganization }) => {
  return (
    <Group>
      {organizations.map((organization) => (
        <Button onClick={() => onSelectOrganization(organization)}>{organization}</Button>
      ))}
    </Group>
  );
};

export default SelectOrganization;
