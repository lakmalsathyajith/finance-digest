import styles from "./newsItem.module.scss";
import formatUnixToReadableDate from "../../utils/dateFormatter";
import { NewsItemData } from "../../utils/types";
import React from "react";

interface NewsItemPropTypes {
  data: NewsItemData;
}

const NewsItem: React.FunctionComponent<NewsItemPropTypes> = ({ data }) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className={styles.article} onClick={() => handleClick(data.url)}>
      <img
        src={data.image}
        alt=""
        className={styles.article__img}
        loading="lazy"
      />
      <div className={styles.article__container}>
        <div className={styles.article__meta}>
          <div className={styles.article__source}>{data.source}</div>
          <div className={styles.article__date}>
            {formatUnixToReadableDate(data.datetime)}
          </div>
        </div>
        <h2
          className={`${styles.article__heading} ${styles["truncated-paragraph"]}`}
        >
          {data.headline}
        </h2>
      </div>
    </article>
  );
};

export default NewsItem;
