import type { NuxtAxiosInstance } from "@nuxtjs/axios";
import { createCaseAPI } from "~/api/case";
import type { CaseAPI } from "~/api/case";
import { createDeathAPI } from "~/api/death";
import type { DeathAPI } from "~/api/death";
import { createExternalAPI } from "~/api/external";
import type { ExternalAPI } from "~/api/external";
import { createHealthcareAPI } from "~/api/healthcare";
import type { HealthcareAPI } from "~/api/healthcare";
import { createMobilityAPI } from "~/api/mobility";
import type { MobilityAPI } from "~/api/mobility";
import { createTestAPI } from "~/api/test";
import type { TestAPI } from "~/api/test";
import { createTraceAPI } from "~/api/trace";
import type { TraceAPI } from "~/api/trace";
import { createVaccineAPI } from "~/api/vaccine";
import type { VaccineAPI } from "~/api/vaccine";
import { DATA_BASE_URL } from "~/config";
import { toObject } from "~/utils";

export type DataResponseType = Record<string, number>[];

export interface Api {
  case: CaseAPI;
  death: DeathAPI;
  external: ExternalAPI;
  healthcare: HealthcareAPI;
  mobility: MobilityAPI;
  test: TestAPI;
  trace: TraceAPI;
  vaccine: VaccineAPI;
  getPopulation(): Promise<DataResponseType>;
}

const createApi = (axios: NuxtAxiosInstance): Api => ({
  case: createCaseAPI(axios),
  death: createDeathAPI(axios),
  external: createExternalAPI(axios),
  healthcare: createHealthcareAPI(axios),
  mobility: createMobilityAPI(axios),
  test: createTestAPI(axios),
  trace: createTraceAPI(axios),
  vaccine: createVaccineAPI(axios),

  getPopulation(): Promise<DataResponseType> {
    return axios
      .$get(`${DATA_BASE_URL}/static/population.csv`)
      .then((v) => toObject(v));
  },
});

export default createApi;
