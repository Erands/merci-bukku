import { api } from "@/lib/api";

export async function getCompanies() {
  const { data } = await api.get("/companies/");
  return data;
}
