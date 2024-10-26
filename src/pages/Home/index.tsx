import NewsList from "../../components/NewsList";
import MainLayout from "../../layouts/main";
import { useNews } from "../../hooks/useNewsData";
import NewsErrorBoundary from "../../ErrorBoundries/NewsErrorBoundry";

const NewsListData = () => {
  const { data: { data } = [], error } = useNews("general");

  if (error) {
    throw new Error("No news items available!"); // This will be caught in ErrorBoundary
  }
  return <>{data && <NewsList news={data} />}</>;
};

function Home() {
  return (
    <MainLayout>
      <NewsErrorBoundary>
        <NewsListData />
      </NewsErrorBoundary>
    </MainLayout>
  );
}

export default Home;
