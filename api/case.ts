import type { NuxtAxiosInstance } from "@nuxtjs/axios";
import type { DataResponseType } from "~/api/index";
import { DATA_BASE_URL } from "~/config";
import { toObject } from "~/utils";

export interface CaseAPI {
  getMalaysia(): Promise<DataResponseType>;
  getStates(): Promise<DataResponseType>;
  getClusters(): Promise<DataResponseType>;
}

export const createCaseAPI = (axios: NuxtAxiosInstance): CaseAPI => ({
  getMalaysia(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/epidemic/cases_malaysia.csv`)
      .then((v) => toObject(v));
  },
  getStates(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/epidemic/cases_state.csv`)
      .then((v) => toObject(v));
  },
  getClusters(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/epidemic/clusters.csv`)
      .then((v) => toObject(v));
  },
});
