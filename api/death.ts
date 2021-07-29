import type { NuxtAxiosInstance } from "@nuxtjs/axios";
import type { DataResponseType } from "~/api/index";
import { DATA_BASE_URL } from "~/config";
import { toObject } from "~/utils";

export interface DeathAPI {
  getMalaysia(): Promise<DataResponseType>;
  getStates(): Promise<DataResponseType>;
}

export const createDeathAPI = (axios: NuxtAxiosInstance): DeathAPI => ({
  getMalaysia(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/epidemic/death_malaysia.csv`)
      .then((v) => toObject(v));
  },
  getStates(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/epidemic/death_state.csv`)
      .then((v) => toObject(v));
  },
});
