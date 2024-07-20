import styles from "./style.module.css";
import HeaderText from "../../components/HeaderText/HeaderText";
import InputField from "../../components/InputField/InputField";
import { useState } from "react";
import Button from "../../components/Button/Button";
// import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/extraReducers/userReducer";

import { ThunkDispatch } from "@reduxjs/toolkit";

const Login = () => {
  //
  const [loginDetail, setLoginDetail] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  console.log("signUp:", loginDetail);

  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  console.log("user:", user);

  const [showPassword, setShowPassword] = useState<"password" | "text">(
    "password"
  );

  const checkbox = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else setShowPassword("password");
  };

  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user?.user.user_id) {
  //     return;
  //   } else {
  //     navigate("signup");
  //   }
  // }, [user]);

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
            initialValue={loginDetail.email}
            required={true}
            disabled={false}
            onChangeText={(value) => {
              setLoginDetail({ ...loginDetail, email: value });
            }}
          />
          <InputField
            label="Password"
            type={showPassword}
            placeholder="**********"
            initialValue={loginDetail?.password}
            required={true}
            disabled={false}
            onChangeText={(value) => {
              setLoginDetail({ ...loginDetail, password: value });
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
          <div className={styles.notification_container}>{user?.message}</div>
          <Button
            title="SIGN IN"
            tooltip=""
            onClick={() => {
              dispatch(userLogin(loginDetail));
            }}
            disabled={false}
          />
        </div>
      </main>
    </>
  );
};

export default Login;
