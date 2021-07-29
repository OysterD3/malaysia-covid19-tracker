<template>
  <VChart style="height: 500px" :option="options" />
</template>

<script lang="ts">
import type { EChartsOption } from "echarts";
import { LineChart } from "echarts/charts";
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

interface Data {
  options: EChartsOption;
}

use([
  CanvasRenderer,
  TitleComponent,
  LegendComponent,
  LineChart,
  DataZoomComponent,
  TooltipComponent,
  GridComponent,
]);

export default Vue.extend({
  name: "ChartCasesPerDay",
  data: (): Data => ({
    options: {
      title: {
        text: "Daily Cases (vs Cluster)",
      },
      legend: {
        data: [
          "Case",
          "Import",
          "Religious",
          "Community",
          "High Risk",
          "Education",
          "Detention Centre",
          "Workplace",
        ],
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
          name: "Case",
          type: "line",
          data: [],
          areaStyle: {},
          smooth: true,
          emphasis: {
            focus: "series",
          },
          animationDelay(idx) {
            return idx * 2;
          },
        },
        {
          name: "Import",
          type: "line",
          data: [],
          areaStyle: {},
          smooth: true,
          emphasis: {
            focus: "series",
          },
          animationDelay(idx) {
            return idx * 2;
          },
        },
        {
          name: "Religious",
          type: "line",
          data: [],
          areaStyle: {},
          smooth: true,
          emphasis: {
            focus: "series",
          },
          animationDelay(idx) {
            return idx * 2;
          },
        },
        {
          name: "Community",
          type: "line",
          data: [],
          areaStyle: {},
          smooth: true,
          emphasis: {
            focus: "series",
          },
          animationDelay(idx) {
            return idx * 2;
          },
        },
        {
          name: "High Risk",
          type: "line",
          data: [],
          areaStyle: {},
          smooth: true,
          emphasis: {
            focus: "series",
          },
          animationDelay(idx) {
            return idx * 2;
          },
        },
        {
          name: "Education",
          type: "line",
          data: [],
          areaStyle: {},
          smooth: true,
          emphasis: {
            focus: "series",
          },
          animationDelay(idx) {
            return idx * 2;
          },
        },
        {
          name: "Detention Centre",
          type: "line",
          data: [],
          areaStyle: {},
          smooth: true,
          emphasis: {
            focus: "series",
          },
          animationDelay(idx) {
            return idx * 2;
          },
        },
        {
          name: "Workplace",
          type: "line",
          data: [],
          areaStyle: {},
          smooth: true,
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
    this.$api.case.getMalaysia().then((data) => {
      this.options.xAxis.data = data.map((v) => v.date);
      data.forEach((v) => {
        const o = this.options.series;
        o[0].data.push(v.cases_new);
        o[1].data.push(v.cluster_import);
        o[2].data.push(v.cluster_religious);
        o[3].data.push(v.cluster_community);
        o[4].data.push(v.cluster_highRisk);
        o[5].data.push(v.cluster_education);
        o[6].data.push(v.cluster_detentionCentre);
        o[7].data.push(v.cluster_workplace);
      });
    });
  },
});
</script>
