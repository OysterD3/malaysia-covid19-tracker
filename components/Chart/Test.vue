<template>
  <VChart style="height: 500px" :option="options" />
</template>

<script lang="ts">
import * as dayjs from "dayjs";
import type { EChartsOption } from "echarts";
import { BarChart, LineChart, LinesChart } from "echarts/charts";
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import Vue from "vue";
import { DataResponseType } from "../../api";

interface Data {
  options: EChartsOption;
}

use([
  CanvasRenderer,
  TitleComponent,
  LegendComponent,
  BarChart,
  LineChart,
  DataZoomComponent,
  TooltipComponent,
  GridComponent,
]);

export default Vue.extend({
  name: "ChartTest",
  data: (): Data => ({
    options: {
      title: {
        text: "Positive Rate",
      },
      legend: {
        data: ["Case", "Tested", "Positive Rate"],
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      xAxis: {
        data: [],
      },
      yAxis: [
        {
          type: "value",
          name: "Amount",
        },
        {
          type: "value",
          name: "Positive Rate",
          axisLabel: {
            formatter: "{value} %",
          },
        },
      ],
      series: [
        {
          name: "Case",
          type: "bar",
          data: [],
          emphasis: {
            focus: "series",
          },
          animationDelay(idx) {
            return idx * 2;
          },
        },
        {
          name: "Tested",
          type: "bar",
          data: [],
          emphasis: {
            focus: "series",
          },
          animationDelay(idx) {
            return idx * 2;
          },
        },
        {
          name: "Positive Rate",
          type: "line",
          data: [],
          yAxisIndex: 1,
          emphasis: {
            focus: "series",
          },
          animationDelay(idx) {
            return idx * 2;
          },
        },
      ],
      animationEasing: "elasticOut",
      animationDelayUpdate(idx) {
        return idx * 5;
      },
      dataZoom: [
        {
          show: true,
          start: 94,
          end: 100,
        },
        {
          type: "inside",
          start: 94,
          end: 100,
        },
      ],
    },
  }),
  beforeCreate() {
    Promise.all([
      this.$api.case.getMalaysia(),
      this.$api.test.getMalaysia(),
    ]).then(([caseMalaysia, testMalaysia]: DataResponseType[]) => {
      let startDate = dayjs(testMalaysia[0].date);
      const endDate = dayjs().subtract(1, "day");
      const startingIndex = dayjs(caseMalaysia[0].date).diff(startDate, "days");

      while (startDate.isBefore(endDate)) {
        this.options.xAxis.data.push(dayjs(startDate).format("YYYY-MM-DD"));
        startDate = startDate.add(1, "day");
      }
      this.options.xAxis.data.forEach((v, idx) => {
        const o = this.options.series;

        const data = caseMalaysia[idx - startingIndex];
        if (data) {
          o[0].data.push(data.cases_new);
        } else {
          o[0].data.push(0);
        }

        const n = testMalaysia[idx];
        if (n) {
          o[1].data.push(n["rtk-ag"] + n.pcr);
        }

        if (data && n) {
          o[2].data.push(
            Math.round((data.cases_new / (n["rtk-ag"] + n.pcr)) * 100 * 100) /
              100,
          );
        } else {
          o[2].data.push(0);
        }
      });
    });
  },
});
</script>
