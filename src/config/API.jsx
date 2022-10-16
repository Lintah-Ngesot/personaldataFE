import axios from "axios";

export const API = axios.create({
  baseURL: "https://personal-dataa.herokuapp.com/api/v1/",
});
