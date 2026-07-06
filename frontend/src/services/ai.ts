import { api } from "./api";

export async function reviewCode(
  code: string
) {
  const response = await api.post(
    "/ai/review",
    {
      code,
    }
  );

  return response.data;
}