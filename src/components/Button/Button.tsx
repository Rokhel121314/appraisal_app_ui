import styles from "./styles.module.css";

type PropTypes = {
  onClick: () => void;
  title: string;
  disabled: boolean;
  tooltip?: string;
};

const Button = ({
  disabled = false,
  onClick,
  tooltip = "tooltip",
  title = "Button",
}: PropTypes) => {
  return (
    <button
      className={styles.button}
      title={tooltip}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
};

export default Button;
