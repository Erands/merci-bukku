import axios from "axios";

export const api = axios.create({
  baseURL: "http://169.58.71.248:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
