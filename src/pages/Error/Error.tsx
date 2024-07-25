import { useDispatch } from "react-redux";
import styles from "./styles.module.css";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/extraReducers/userReducer";

const Error = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const navigate = useNavigate();

  const handleLogout = async () => {
    dispatch(userLogout());

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  return (
    <div className={styles.container}>
      <button onClick={() => handleLogout()}>LOG OUT</button>
    </div>
  );
};

export default Error;
