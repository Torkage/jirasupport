import { Box, Grid, Group } from "@mantine/core";
import useIssues from "../../../hooks/useIssues";
import CustomChart from "../CustomChart/CustomChart";

const IssueCharts = () => {
  const { filteredMonths } = useIssues();

  return filteredMonths.length > 0 ? (
    <Grid
      sx={(theme) => ({
        marginBottom: theme.spacing.lg,
      })}
    >
      <Grid.Col span={6} grow>
        <CustomChart
          data={filteredMonths}
          name="Nombre de tickets"
          series={[
            {
              name: "Nb de tickets",
              data: filteredMonths.map((m) => m.nbIssues).reverse(),
              colors: "#9775FA",
            },
          ]}
        />
      </Grid.Col>
      <Grid.Col span={6} grow>
        <CustomChart
          data={filteredMonths}
          name="Durée de vie des tickets"
          series={[
            {
              name: "Durée de vie (H)",
              data: filteredMonths.map((m) => m.timeToResolution.hours).reverse(),
              colors: "#69DB7C",
            },
          ]}
        />
      </Grid.Col>
      <Grid.Col span={6} grow>
        <CustomChart
          data={filteredMonths}
          name="Temps dépensé total"
          series={[
            {
              name: "Temps dépensé (H)",
              data: filteredMonths.map((m) => m.timespent.hours).reverse(),
              colors: "#9775FA",
            },
          ]}
        />
      </Grid.Col>
      <Grid.Col span={6} grow>
        <CustomChart
          data={filteredMonths}
          name="Temps dépensé/ticket"
          series={[
            {
              name: "Temps dépensé/ticket (H)",
              data: filteredMonths.map((m) => m.timespentPerIssue.hours).reverse(),
              colors: "#4DABF7",
            },
          ]}
        />
      </Grid.Col>
    </Grid>
  ) : null;
};

export default IssueCharts;
