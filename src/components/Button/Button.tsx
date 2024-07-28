import styles from "./styles.module.css";

type PropTypes = {
  onClick: () => void;
  title: string;
  disabled: boolean;
  tooltip?: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
};

const Button = ({
  disabled = false,
  onClick,
  tooltip = "tooltip",
  title = "Button",
  height = "35px",
  width = "100%",
}: PropTypes) => {
  return (
    <button
      className={styles.button}
      style={{ height: height, width: width }}
      title={tooltip}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
};

export default Button;
