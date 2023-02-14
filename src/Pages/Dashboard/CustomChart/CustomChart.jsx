import { DateTime } from "luxon";
import { useCallback } from "react";
import Chart from "react-apexcharts";

function CustomChart({dataOrganisation}) {

    const dataForChart= {
        xAxisArray:[],
        timeSpent:[],
        timespentPerIssue:[],
        timeToResolution:[]
    };
    
    dataOrganisation.forEach(d => {
        dataForChart.xAxisArray.unshift(DateTime.fromISO(d.month,{locale:'fr'}).toLocaleString({month: 'long', year:'numeric' }));
        dataForChart.timeSpent.unshift(d.timespent.hours)
        dataForChart.timespentPerIssue.unshift(d.timespentPerIssue.hours)
        dataForChart.timeToResolution.unshift(d.timeToResolution.hours)
    });

    const options = {
        chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: dataForChart.xAxisArray
          }
    };
    const series= [
          {
            name: "Temps dépensé",
            data: dataForChart.timeSpent,
            colors:'#9775FA'
          },
          {
            name: "Temps dépensé par issue",
            data: dataForChart.timespentPerIssue,
            colors:'#4DABF7'
          },
          {
            name: "Temps pour résoudre",
            data: dataForChart.timeToResolution,
            colors:'#69DB7C'
          }
    ];

  return (
    <div>
        <Chart
              options={options}
              series={series}
              type="line"
              width="700"
            />
    </div>
  )
}

export default CustomChart