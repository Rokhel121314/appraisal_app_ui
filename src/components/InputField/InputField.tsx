import useSpellChecker from "../../hooks/useSpellChecker";
import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";

type PropTypes = {
  label: string;
  placeholder: string;
  type: "number" | "text" | "email" | "date" | "password" | "image";
  required: boolean;
  disabled: boolean;
  initialValue?: string | number | undefined;
  onChangeText: (e: any) => void;
  height?: string;
  marginTop?: string;
  checkSpell?: boolean;
  name: string;
};

const InputField = ({
  label = "input label",
  placeholder = "type here",
  type = "text",
  required = false,
  disabled = false,
  initialValue,
  onChangeText,
  height = "35px",
  marginTop = "12px",
  checkSpell = false,
  name = "name",
}: PropTypes) => {
  //
  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const {
    spellChecker,
    // spelledCorrect
  } = useSpellChecker();

  const check = () => {
    spellChecker(value);
  };

  useEffect(() => {
    if (checkSpell) {
      check();
      // console.log("correctSpell?:", spelledCorrect, "value:", value);
    } else {
      return;
    }
  }, [value]);
  //

  return (
    <div
      className={styles.container}
      style={{ marginTop: marginTop }}
      onClick={handleFocus}
    >
      <label className={styles.input_label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        style={{ height: height }}
        type={type}
        id={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        ref={inputRef}
        spellCheck={true}
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
          onChangeText(e.target.value);
        }}
      />
    </div>
  );
};

export default InputField;
