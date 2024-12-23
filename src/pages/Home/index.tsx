import NewsList from "../../components/NewsList";
import MainLayout from "../../layouts/main";
import { useNews } from "../../hooks/useNewsData";
import NewsErrorBoundary from "../../ErrorBoundries/NewsErrorBoundry";
import styles from "../../ErrorBoundries/NewsErrorBoundry/newsErrorBoundary.module.scss";

/**
 * Using this additional component to wrap in an error boundary.
 */
const NewsListData: React.FunctionComponent = () => {
  /**
   * Encapsulates the data fetching logic here. No significant usage of using react-query at this stage.
   * Bust make room for enhancements in the future
   */
  const { data, error, isLoading } = useNews("general");

  if (error) {
    throw new Error("No news items available!"); // This will be caught in ErrorBoundary
  }

  if (isLoading) {
    return <h2 className={styles.message}>Loading...</h2>;
  }

  return <>{data && <NewsList news={data.data} />}</>;
};

/**
 * Landing page of the application
 */
const Home: React.FunctionComponent = () => {
  return (
    <MainLayout>
      <NewsErrorBoundary>
        <NewsListData />
      </NewsErrorBoundary>
    </MainLayout>
  );
};

export default Home;
