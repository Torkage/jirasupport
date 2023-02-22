import { Card } from "@mantine/core";
import { DateTime } from "luxon";
import { useCallback } from "react";
import Chart from "react-apexcharts";

function CustomChart({ data, name, series }) {
  const dataForChart = useCallback(() => {
    let chartState = {
      xAxisArray: [],
    };

    data.forEach((d) => {
      chartState.xAxisArray.unshift(DateTime.fromISO(d.month).setLocale("fr").toFormat("MM/yy"));
    });
    return chartState;
  }, [data]);

  const options = {
    chart: {
      id: "basic-bar",
    },
    title: { text: name },
    xaxis: {
      categories: dataForChart().xAxisArray,
    },
  };

  return (
    <Card shadow="xs">
      <Chart options={options} series={series} type="line" width="100%" />
    </Card>
  );
}

export default CustomChart;
