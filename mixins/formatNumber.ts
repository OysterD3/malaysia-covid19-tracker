import { formatNumber } from "~/utils";

export const formatNumberMixin = {
  method: {
    formatNumber(v: number): string {
      return formatNumber(v);
    },
  },
};
