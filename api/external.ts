import type { NuxtAxiosInstance } from "@nuxtjs/axios";
import type {
  Continent,
  Country,
  SortVal,
  World,
  YesterdayVal,
} from "~/@types";
import { DISEASE_SH_API } from "~/config";

export interface ExternalAPI {
  getWorld(yesterday: YesterdayVal, twoDaysAgo: YesterdayVal): Promise<World[]>;
  getAllContinents(
    yesterday: YesterdayVal,
    twoDaysAgo: YesterdayVal,
    sort?: SortVal,
  ): Promise<Continent[]>;
  getSpecificContinents(
    continent: string,
    yesterday: YesterdayVal,
    twoDaysAgo: YesterdayVal,
    sort?: SortVal,
  ): Promise<Continent>;
  getCountry(
    country: string,
    yesterday: YesterdayVal,
    twoDaysAgo: YesterdayVal,
    sort?: SortVal,
  ): Promise<Country>;
  getCountries(
    countries: string[],
    yesterday: YesterdayVal,
    twoDaysAgo: YesterdayVal,
    sort?: SortVal,
  ): Promise<Country[]>;
}

export const createExternalAPI = (axios: NuxtAxiosInstance): ExternalAPI => ({
  getWorld(
    yesterday: YesterdayVal = 0,
    twoDaysAgo: YesterdayVal = 0,
  ): Promise<World[]> {
    return axios.$get(
      `${DISEASE_SH_API}/all?yesterday=${yesterday}&twoDaysAgo=${twoDaysAgo}`,
    );
  },
  getAllContinents(
    yesterday: YesterdayVal = 0,
    twoDaysAgo: YesterdayVal = 0,
    sort?: SortVal,
  ): Promise<Continent[]> {
    return axios.$get(
      `${DISEASE_SH_API}/continents?yesterday=${yesterday}&twoDaysAgo=${twoDaysAgo}&sort=${sort}`,
    );
  },
  getSpecificContinents(
    continent: string,
    yesterday: YesterdayVal = 0,
    twoDaysAgo: YesterdayVal = 0,
    sort?: SortVal,
  ): Promise<Continent> {
    return axios.$get(
      `${DISEASE_SH_API}/continent/${continent}?yesterday=${yesterday}&twoDaysAgo=${twoDaysAgo}&sort=${sort}`,
    );
  },
  getCountry(
    country: string,
    yesterday: YesterdayVal = 0,
    twoDaysAgo: YesterdayVal = 0,
    sort?: SortVal,
  ): Promise<Country> {
    return axios.$get(
      `${DISEASE_SH_API}/countries/${country}?yesterday=${yesterday}&twoDaysAgo=${twoDaysAgo}&sort=${sort}`,
    );
  },
  getCountries(
    countries: string[],
    yesterday: YesterdayVal = 0,
    twoDaysAgo: YesterdayVal = 0,
    sort?: SortVal,
  ): Promise<Country[]> {
    return axios.$get(
      `${DISEASE_SH_API}/countries/${countries}?yesterday=${yesterday}&twoDaysAgo=${twoDaysAgo}&sort=${sort}`,
    );
  },
});
