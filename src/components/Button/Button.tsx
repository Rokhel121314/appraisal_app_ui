import styles from "./styles.module.css";

type PropType = {
  onClick: () => void;
  title: string;
  disabled: boolean;
  tooltip?: string;
};

const Button = (props: PropType) => {
  return (
    <button
      className={styles.button}
      title={props.tooltip}
      disabled={props.disabled}
      onClick={() => props.onClick()}
    >
      {props.title}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
};

export default Button;
