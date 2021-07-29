import type { NuxtAxiosInstance } from "@nuxtjs/axios";
import { DataResponseType } from "~/api/index";
import { VACCINE_DATA_BASE_URL } from "~/config";
import { toObject } from "~/utils";

export interface VaccineAPI {
  getMalaysiaVaccination(): Promise<DataResponseType>;
  getStatesVaccination(): Promise<DataResponseType>;
  getMalaysiaRegistration(): Promise<DataResponseType>;
  getStatesRegistration(): Promise<DataResponseType>;
}

export const createVaccineAPI = (axios: NuxtAxiosInstance): VaccineAPI => ({
  getMalaysiaVaccination(): Promise<DataResponseType> {
    return axios
      .$get(`${VACCINE_DATA_BASE_URL}/vaccination/vax_malaysia.csv`)
      .then((v) => toObject(v));
  },
  getStatesVaccination(): Promise<DataResponseType> {
    return axios
      .$get(`${VACCINE_DATA_BASE_URL}/vaccination/vax_state.csv`)
      .then((v) => toObject(v));
  },
  getMalaysiaRegistration(): Promise<DataResponseType> {
    return axios
      .$get(`${VACCINE_DATA_BASE_URL}/registration/vaxreg_malaysia.csv`)
      .then((v) => toObject(v));
  },
  getStatesRegistration(): Promise<DataResponseType> {
    return axios
      .$get(`${VACCINE_DATA_BASE_URL}/registration/vaxreg_state.csv`)
      .then((v) => toObject(v));
  },
});
