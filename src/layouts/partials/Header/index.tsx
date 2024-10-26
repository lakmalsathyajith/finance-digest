import Logo from "../../../assets/BLOTT.svg";
import styles from "./header.module.scss";

const Header: React.FunctionComponent = () => {
  return (
    <header id="header" className={styles.header}>
      <img src={Logo} alt="BLOTT" className={styles.header__logo} />
    </header>
  );
};

export default Header;
