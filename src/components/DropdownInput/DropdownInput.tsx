import styles from "./styles.module.css";
import { useState, useRef } from "react";

type PropTypes = {
  select_options: string[];
  label: string;
  placeholder: string;
  required: boolean;
  list: string;
  initialValue?: string;
  onChangeText: (e: string) => void;
  disabled: boolean;
};
const DropdownInput = ({
  placeholder = "Search here...",
  required = false,
  disabled = false,
  initialValue,
  select_options,
  onChangeText,
  list,
  label,
}: PropTypes) => {
  const selectRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(initialValue);
  const handleFocus = () => {
    selectRef.current?.focus();
  };
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <div className={styles.select_container} onFocus={handleFocus}>
        <input
          className={styles.select_input}
          list={list}
          placeholder={placeholder}
          spellCheck={"true"}
          lang="en"
          disabled={disabled}
          required={required}
          value={value}
          onChange={(e) => {
            e.preventDefault();
            setValue(e.target.value);
            onChangeText(e.target.value);
          }}
        />
        <datalist className={styles.select_datalist} id={list}>
          <option value={""} disabled>
            {placeholder}
          </option>
          {select_options &&
            select_options.map((item, index) => {
              return (
                <option className={styles.options} value={item} key={index}>
                  {item}
                </option>
              );
            })}
        </datalist>
      </div>
    </div>
  );
};

export default DropdownInput;
