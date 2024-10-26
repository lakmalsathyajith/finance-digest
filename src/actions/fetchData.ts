import dataClient from "../utils/dataClient";

export const fetchNews = async (category: string) => {
  return await dataClient.get("/news", {
    params: { category },
  });
};
