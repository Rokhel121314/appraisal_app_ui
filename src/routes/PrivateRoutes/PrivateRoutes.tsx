import { Outlet, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import ProtectedRoutes from "../ProtectedRoutes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import SmallButton from "../../components/SmallButton/SmallButton";
import { userLogout } from "../../redux/extraReducers/userReducer";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { resetGallagherEntityState } from "../../redux/reducers/gallagherEntitySlice";
import { resetGallagherSite } from "../../redux/reducers/gallagherSiteSlice";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const user = useSelector((state: RootState) => state.user);

  const handleLogout = async () => {
    await dispatch(userLogout());
    dispatch(resetGallagherEntityState());
    dispatch(resetGallagherSite());

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo_container} onClick={() => navigate("/")}>
          <img className={styles.logo_image} src="/logo/logo.png" alt="logo" />
          <div className={styles.text_container}>
            <span className={styles.brand_text}>
              SPECIALTY PROPERTY APPRAISAL, LLC
            </span>
            <span className={styles.qoute_text}>
              Providing Excellence in Performance and Superior Customer Service
            </span>
          </div>
        </div>
        <div className={styles.action_container}>
          <div className={styles.user_text}>
            {user.user.full_name.toUpperCase()}
          </div>
          <div className={styles.role_text}>{user.user.role}</div>
          <div className={styles.button_container}>
            <SmallButton
              title={"LOGOUT"}
              onClick={() => handleLogout()}
              icon="/logo/logout.png"
            />
          </div>
        </div>
      </nav>
      <div id="detail">
        <ProtectedRoutes logged_in={user.logged_in}>
          <Outlet />
        </ProtectedRoutes>
      </div>
    </>
  );
};

export default PrivateRoutes;
