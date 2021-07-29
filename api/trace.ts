import type { NuxtAxiosInstance } from "@nuxtjs/axios";
import { DataResponseType } from "~/api/index";
import { DATA_BASE_URL } from "~/config";
import { toObject } from "~/utils";

export interface TraceAPI {
  getMalaysiaTrace(): Promise<DataResponseType>;
}

export const createTraceAPI = (axios: NuxtAxiosInstance): TraceAPI => ({
  getMalaysiaTrace(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/mysejahtera/trace_malaysia.csv`)
      .then((v) => toObject(v));
  },
});
