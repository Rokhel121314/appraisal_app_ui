import styles from "./styles.module.css";

type PropTypes = {
  title: string;
  onClick: () => void;
  icon: string;
};

const MediumIcon = ({
  title = "CLICK",
  onClick = () => {},
  icon = "/logo/logout.png",
}: PropTypes) => {
  return (
    <>
      <button className={styles.button} onClick={() => onClick()}>
        <img className={styles.icon} src={icon} alt={icon} />
        <span className={styles.title}> {title}</span>
      </button>
    </>
  );
};

export default MediumIcon;
