import { BarChart } from "echarts/charts";
import { LegendComponent, TitleComponent } from "echarts/components";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import Vue from "vue";
import VChart from "vue-echarts";

use([CanvasRenderer, TitleComponent, LegendComponent, BarChart]);

Vue.component("VChart", VChart);
