<template>
  <div>
    <h2 class="text-lg md:text-2xl font-bold">MySejahtera Checkins</h2>
    <VChart style="height: 500px" :option="options" />
  </div>
</template>

<script lang="ts">
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
  name: "ChartCheckin",
  data: (): Data => ({
    options: {
      legend: {
        data: ["Total", "Unique Individual", "Unique Location"],
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
          name: "Total",
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
          name: "Unique Individual",
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
          name: "Unique Location",
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
    this.$api.mobility.getMalaysiaCheckin().then((data) => {
      this.options.xAxis.data = data.map((v) => v.date);
      const o = this.options.series;
      data.forEach((v) => {
        o[0].data.push(v.checkins);
        o[1].data.push(v.unique_ind);
        o[2].data.push(v.unique_loc);
      });
    });
  },
});
</script>
