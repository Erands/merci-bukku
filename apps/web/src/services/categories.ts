import { api } from "@/lib/api";

export async function getCategories() {
  const { data } = await api.get("/categories/");
  return data;
}
