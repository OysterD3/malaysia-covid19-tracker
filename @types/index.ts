export type YesterdayVal = boolean | 1 | 0 | "1" | "0";
export type SortVal =
  | "cases"
  | "todayCases"
  | "deaths"
  | "todayDeaths"
  | "recovered"
  | "active"
  | "critical"
  | "casesPerOneMillion"
  | "deathsPerOneMillion";

interface BaseStats {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

type CountryInfo = {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
};

export interface World extends BaseStats {
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  affectedCountries: number;
}

export interface Continent extends BaseStats {
  continent: string;
  continentInfo: {
    lat: number;
    long: number;
  };
  countries: string[];
}

export interface Country extends BaseStats {
  country: string;
  countryInfo: CountryInfo;
  continent: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
}
