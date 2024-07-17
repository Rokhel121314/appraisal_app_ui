import styles from "./styles.module.css";
import { useRef, useState } from "react";

type PropTypes = {
  label: string;
  placeholder: string;
  type: "number" | "text" | "email" | "date" | "password" | "image";
  required: boolean;
  disabled: boolean;
  initialValue?: string | number;
  onChangeText: (e: string) => void;
};

const InputField = ({
  label = "input label",
  placeholder = "type here",
  type = "text",
  required = false,
  disabled = false,
  initialValue,
  onChangeText,
}: PropTypes) => {
  //
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  //

  return (
    <div className={styles.container} onClick={handleFocus}>
      <label className={styles.input_label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        ref={inputRef}
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
          onChangeText(e.target.value);
        }}
        spellCheck={true}
        lang="en"
      />
    </div>
  );
};

export default InputField;
