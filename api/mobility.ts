import type { NuxtAxiosInstance } from "@nuxtjs/axios";
import { DataResponseType } from "~/api/index";
import { DATA_BASE_URL } from "~/config";
import { toObject } from "~/utils";

export interface MobilityAPI {
  getMalaysiaCheckin(): Promise<DataResponseType>;
  getStatesCheckin(): Promise<DataResponseType>;
  getMalaysiaCheckinByTime(): Promise<DataResponseType>;
}

export const createMobilityAPI = (axios: NuxtAxiosInstance): MobilityAPI => ({
  getMalaysiaCheckin(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/mysejahtera/checkin_malaysia.csv`)
      .then((v) => toObject(v));
  },
  getStatesCheckin(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/mysejahtera/checkin_states.csv`)
      .then((v) => toObject(v));
  },
  getMalaysiaCheckinByTime(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/mysejahtera/checkin_malaysia_time.csv`)
      .then((v) => toObject(v));
  },
});
