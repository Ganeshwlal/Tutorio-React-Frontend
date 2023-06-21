import { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
// import HighchartsExporting from 'highcharts/modules/exporting';

HighchartsMore(Highcharts);
// HighchartsExporting(Highcharts);


const SpiderWeb = () => {
    useEffect(() => {
      const chartOptions = {
        chart: {
          polar: true,
          type: 'line',
        },
        accessibility: {
          description:
            '',
        },
        title: {
          text: '',
          x: -80,
        },
        pane: {
          size: '80%',
        },
        xAxis: {
          categories: [
            'JavaScript',
            'HTML',
            'Flinto',
            'Vuejs',
            'Sketch',
            'Priciple',
            'CSS',
            "Angular"
          ],
          tickmarkPlacement: 'on',
          lineWidth: 0,
        },
        yAxis: {
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          min: 0,
        },
        tooltip: {
          shared: true,
          pointFormat:
            '<span style="color:{series.color}"> <b>{point.y:,.0f}</b><br/>',
        },
        legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical',
        },
        series: [
         
          {
            name: 'Score',
            data: [700, 900, 750, 690, 800, 600, 700, 840],
            pointPlacement: 'on',
          },
        ],
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal',
                },
                pane: {
                  size: '70%',
                },
              },
            },
          ],
        },
      };
  
      Highcharts.chart('container', chartOptions);
    }, []);
  
    return <div id="container" />;
  };
  
  export default SpiderWeb;





// import { useEffect } from "react";
// import Highcharts from "highcharts";
// import HighchartsMore from "highcharts/highcharts-more";

// HighchartsMore(Highcharts);

// const SpiderWeb = () => {
//   useEffect(() => {
//     const chartOptions = {
//       chart: {
//         polar: true,
//         type: "line",
//       },
//       title: {
//         text: "",
//         x: -80,
//       },
//       pane: {
//         size: "80%",
//       },
//       xAxis: {
//         categories: ["JavaScript", "HTML", "Flinto", "Vuejs", "Sketch", "Priciple", "CSS", "Angular"],
//         lineWidth: 0,
//       },
//       yAxis: {
//         gridLineInterpolation: "polygon",
//         lineWidth: 0,
//         min: 0,
//         labels: {
//           enabled: false,
//         },
//       },
//       series: [
//         {
//           name: "Popularity",
//           data: [110, 120, 125, 115, 120, 115, 118, 130],
//           pointPlacement: "on",
//           showInLegend: false,
//         },
//       ],
//     };

//     Highcharts.chart("container", chartOptions);
//   }, []);

//   return <div id="container" />;
// };

// export default SpiderWeb;



