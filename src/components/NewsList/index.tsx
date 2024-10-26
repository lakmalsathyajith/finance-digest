import NewsItem from "../NewsItem";
import styles from "./newsList.module.scss";

const NewsList = ({ news }) => {
  return (
    <div className={styles["article-list"]}>
      {news.map((newsItem) => (
        <NewsItem data={newsItem} key={newsItem.id} />
      ))}
    </div>
  );
};

export default NewsList;
