import axios from "axios";

export const wecasaApi = axios.create({
  baseURL: "https://www.wecasa.fr/api/techtest",
  timeout: 1000,
  headers: { Accept: "application/json" },
});

// -H 'Accept: application/json'
