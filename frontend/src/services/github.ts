import { api } from "./api";

export async function getRepositories() {
  const response = await api.get("/github/repositories");
  return response.data;
}