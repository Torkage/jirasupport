import { Badge, Group, Text } from "@mantine/core";
import { tools } from "../../../utils/tools";

const StatLine = ({ value, valueEvolution, label }) => {
  return (
    <Group position="apart" mt="md" mb="xs">
      <Text>
        {value} {label}
      </Text>
      <Badge color={tools.colorBySign(valueEvolution)}>{tools.addSign(valueEvolution)}%</Badge>
    </Group>
  );
};

export default StatLine;
