import { useQuery } from "react-query";
import { fetchNews } from "../actions/fetchData";

export const useNews = (category: string) => {
  return useQuery({
    queryKey: ["news", category],
    queryFn: () => fetchNews(category),
    staleTime: 1000 * 60 * 5,
  });
};
