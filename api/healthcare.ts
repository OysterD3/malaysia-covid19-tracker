import type { NuxtAxiosInstance } from "@nuxtjs/axios";
import type { DataResponseType } from "~/api/index";
import { DATA_BASE_URL } from "~/config";
import { toObject } from "~/utils";

export interface HealthcareAPI {
  getPKRCFlow(): Promise<DataResponseType>;
  getHospitalFlow(): Promise<DataResponseType>;
  getICUFlow(): Promise<DataResponseType>;
}

export const createHealthcareAPI = (
  axios: NuxtAxiosInstance,
): HealthcareAPI => ({
  getPKRCFlow(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/epidemic/pkrc.csv`)
      .then((v) => toObject(v));
  },
  getHospitalFlow(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/epidemic/hospital.csv`)
      .then((v) => toObject(v));
  },
  getICUFlow(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/epidemic/icu.csv`)
      .then((v) => toObject(v));
  },
});
