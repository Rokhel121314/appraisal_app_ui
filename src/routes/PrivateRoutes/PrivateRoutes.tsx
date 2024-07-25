import { Outlet, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import ProtectedRoutes from "../ProtectedRoutes";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const PrivateRoutes = () => {
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
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
        <div className={styles.action_container}></div>
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
