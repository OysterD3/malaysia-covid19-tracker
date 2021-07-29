<template>
  <div>
    <h2 class="text-lg md:text-2xl font-bold">
      Vaccination and Registration to Date
    </h2>
    <VChart style="height: 500px" :option="options" />
  </div>
</template>

<script lang="ts">
import * as dayjs from "dayjs";
import type { EChartsOption } from "echarts";
import { BarChart, LineChart } from "echarts/charts";
import {
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import Vue from "vue";
import { DataResponseType } from "~/api";

interface Data {
  options: EChartsOption;
}

use([
  CanvasRenderer,
  LegendComponent,
  BarChart,
  LineChart,
  GridComponent,
  DataZoomComponent,
  TooltipComponent,
]);

export default Vue.extend({
  name: "ChartVaccination",
  data: (): Data => ({
    options: {
      legend: {
        data: ["Registered", "Dose 1", "Dose 2"],
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
      yAxis: {},
      series: [
        {
          name: "Registration",
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
          name: "Dose 1",
          type: "line",
          areaStyle: {},
          data: [],
          emphasis: {
            focus: "series",
          },
          animationDelay(idx) {
            return idx * 2;
          },
        },
        {
          name: "Dose 2",
          type: "line",
          areaStyle: {},
          data: [],
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
      this.$api.vaccine.getMalaysiaVaccination(),
      this.$api.vaccine.getMalaysiaRegistration(),
    ]).then(([vaccination, registration]: DataResponseType[]) => {
      let startDate = dayjs(vaccination[0].date);
      const endDate = dayjs().subtract(1, "day");
      const startingIndex = dayjs(registration[0].date).diff(startDate, "days");

      while (startDate.isBefore(endDate)) {
        this.options.xAxis.data.push(dayjs(startDate).format("YYYY-MM-DD"));
        startDate = startDate.add(1, "day");
      }
      this.options.xAxis.data.forEach((v, idx) => {
        const o = this.options.series;

        const data = registration[idx - startingIndex];
        if (data) {
          o[0].data.push(data.total);
        } else {
          o[0].data.push(0);
        }

        const n = vaccination[idx];
        if (n) {
          o[1].data.push(n.dose1_cumul);
          o[2].data.push(n.dose2_cumul);
        }
      });
    });
  },
});
</script>
