import styles from "./styles.module.css";

type PropType = {
  title: string;
};

const HeaderText = (props: PropType) => {
  return <span className={styles.title}>{props.title}</span>;
};

export default HeaderText;
