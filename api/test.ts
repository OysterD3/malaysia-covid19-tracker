import type { NuxtAxiosInstance } from "@nuxtjs/axios";
import { DataResponseType } from "~/api/index";
import { DATA_BASE_URL } from "~/config";
import { toObject } from "~/utils";

export interface TestAPI {
  getMalaysia(): Promise<DataResponseType>;
}

export const createTestAPI = (axios: NuxtAxiosInstance): TestAPI => ({
  getMalaysia(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/epidemic/tests_malaysia.csv`)
      .then((v) => toObject(v));
  },
});
