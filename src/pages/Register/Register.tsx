import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import DropdownInput from "../../components/DropdownInput/DropdownInput";
import HeaderText from "../../components/HeaderText/HeaderText";
import InputField from "../../components/InputField/InputField";
import styles from "./styles.module.css";
import { useState } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { userRegister } from "../../redux/extraReducers/userReducer";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../redux/store";

const Register = () => {
  const [registerDetail, setRegisterDetail] = useState<{
    email: string;
    password: string;
    role: string;
    full_name: string;
  }>({
    email: "",
    password: "",
    role: "",
    full_name: "",
  });
  const [showPassword, setShowPassword] = useState<"password" | "text">(
    "password"
  );

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const user = await dispatch(userRegister(registerDetail));
      if (user.meta.requestStatus === "fulfilled") navigate("/");
    } catch (error) {
      console.log("error");
    }
  };

  const checkbox = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else setShowPassword("password");
  };
  return (
    <main className={styles.container}>
      <div className={styles.form_container}>
        <div className={styles.headertext_container}>
          <HeaderText title="SIGN UP" />
        </div>
        <InputField
          label="Email"
          placeholder="@gmail.com"
          type="email"
          name={"email"}
          required={true}
          disabled={false}
          initialValue={registerDetail.email}
          onChangeText={(value) => {
            setRegisterDetail({ ...registerDetail, email: value });
          }}
        />
        <InputField
          label="Password"
          placeholder="*******"
          type={showPassword}
          name={"password"}
          required={true}
          disabled={false}
          initialValue={registerDetail.password}
          onChangeText={(value) => {
            setRegisterDetail({ ...registerDetail, password: value });
          }}
        />
        <div className={styles.checkbox_container}>
          <input
            className={styles.checkbox}
            id="register_checkbox"
            type="checkbox"
            onClick={() => checkbox()}
          />
          <span className={styles.checkbox_text}>Show Password?</span>
        </div>
        <InputField
          label="Full Name"
          placeholder="Jackson Stahl"
          name={"full_name"}
          type={"text"}
          required={true}
          disabled={false}
          initialValue={registerDetail.full_name}
          onChangeText={(value) => {
            setRegisterDetail({ ...registerDetail, full_name: value });
          }}
        />

        <DropdownInput
          label="Role"
          select_options={["APPRAISER", "PROCESSOR"]}
          list={"role"}
          placeholder="Select Role"
          name={"roles"}
          required={true}
          disabled={false}
          onChangeText={(value) => {
            setRegisterDetail({ ...registerDetail, role: value });
          }}
        />
        <div className={styles.notification_container}>{user.message}</div>
        <Button
          title="REGISTER"
          onClick={() => {
            handleRegister();
          }}
          disabled={false}
        />
      </div>
    </main>
  );
};

export default Register;
