import { useQuery } from "react-query";
import { fetchNews } from "../actions/fetchData";
import { NewsItemData } from "../utils/types";

interface NewsResponse {
  data: NewsItemData[];
}

export const useNews = (category: string) => {
  return useQuery<NewsResponse, Error>({
    queryKey: ["news", category],
    queryFn: () => fetchNews(category),
    staleTime: 1000 * 60 * 5,
  });
};
