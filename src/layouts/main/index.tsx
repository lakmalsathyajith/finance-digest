import Header from "../partials/Header";
import styles from "./main.module.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles["main__heading"]}>
          <h1 className={styles["main__title"]}>NEWS</h1>
        </div>
        {children}
      </main>
    </>
  );
};

export default MainLayout;
