import { News } from "../../utils/types";
import NewsItem from "../NewsItem";
import styles from "./newsList.module.scss";

interface NewsListPropTypes {
  news: News;
}

const NewsList: React.FunctionComponent<NewsListPropTypes> = ({ news }) => {
  return (
    <div className={styles["article-list"]}>
      {news.map((newsItem) => (
        <NewsItem data={newsItem} key={newsItem.id} />
      ))}
    </div>
  );
};

export default NewsList;
