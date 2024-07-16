import styles from "./style.module.css";
import useUserStore from "../../zustand/store";
import { useForm, SubmitHandler } from "react-hook-form";
// import { useState } from "react";
import InputField from "../../components/InputField/InputField";
import { FormData } from "../../types";

interface LoginPayloadType {
  email: string;
  password: string;
}

const Login = () => {
  const { initialState, loginUser } = useUserStore();
  console.log("initialState", initialState);

  // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginPayloadType>();

  const onSubmit = async (data: FormData) => {
    loginUser(data);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            type="email"
            placeholder="Email"
            name="email"
            register={register}
            error={errors.email}
          />

          <InputField
            type="password"
            placeholder="Password"
            name="password"
            register={register}
            error={errors.password}
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
