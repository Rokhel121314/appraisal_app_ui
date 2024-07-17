import styles from "./style.module.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import InputField from "../../components/InputField/InputField";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import useUserStore from "../../zustand/store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //
  const [signUp, setSignUp] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  console.log("signUp:", signUp);
  //
  const { initialState, loginUser } = useUserStore();
  console.log("initialState:", initialState);

  const [showPassword, setShowPassword] = useState<"password" | "text">(
    "password"
  );

  const navigate = useNavigate();

  const checkbox = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else setShowPassword("password");
  };

  useEffect(() => {
    if (!initialState?.user.user_id) {
      return;
    } else {
      navigate("signup");
    }
  }, [initialState]);

  return (
    <>
      <main className={styles.main_container}>
        <div className={styles.signin_container}>
          <div className={styles.headertext_container}>
            <HeaderText title="SIGN IN" />
          </div>

          <InputField
            label="Email"
            type="email"
            placeholder="spa@spaappraisal.com"
            initialValue={signUp.email}
            required={true}
            disabled={false}
            onChangeText={(value) => {
              setSignUp({ ...signUp, email: value });
            }}
          />
          <InputField
            label="Password"
            type={showPassword}
            placeholder="**********"
            initialValue={signUp?.password}
            required={true}
            disabled={false}
            onChangeText={(value) => {
              setSignUp({ ...signUp, password: value });
            }}
          />
          <div className={styles.checkbox_container}>
            <input
              className={styles.checkbox}
              type="checkbox"
              onClick={() => checkbox()}
            />
            <span className={styles.checkbox_text}>Show Password?</span>
          </div>
          <div className={styles.notification_container}>
            {initialState?.message}
          </div>
          <Button
            title="SIGN IN"
            tooltip=""
            onClick={() => {
              loginUser(signUp);
            }}
            disabled={false}
          />
        </div>
      </main>
    </>
  );
};

export default Login;
