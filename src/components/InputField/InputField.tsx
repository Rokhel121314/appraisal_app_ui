import { FormFieldProps } from "../../types";
import styles from "./styles.module.css";

const InputField = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}: FormFieldProps) => {
  return (
    <>
      <input
        spellCheck={true}
        type={type}
        placeholder={placeholder}
        {...register(name, { valueAsNumber })}
      />
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </>
  );
};

export default InputField;
