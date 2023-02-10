import { Badge, Group, Text } from "@mantine/core";
import { tools } from "../../../utils/tools";

const StatLine = ({ value, valueEvolution, label, inverted, neutral }) => {
  return (
    <Group position="apart" mt="xs" mb="xs">
      <Text fz="xs" color="dimmed">
        {value} {label}
      </Text>
      <Badge color={neutral ? "gray" : tools.colorBySign(valueEvolution, inverted)}>
        {neutral ? valueEvolution : tools.addSign(valueEvolution)}%
      </Badge>
    </Group>
  );
};

export default StatLine;
