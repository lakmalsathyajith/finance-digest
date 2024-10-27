import dataClient from "../utils/dataClient";

/**
 * Fetch news for the given category.
 */
export const fetchNews = async (category: string) => {
  return await dataClient.get("/news", {
    params: { category },
  });
};
