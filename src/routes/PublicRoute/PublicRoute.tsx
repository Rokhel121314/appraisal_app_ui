import { Outlet, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const PublicRoute = () => {
  const navigate = useNavigate();
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
        <Outlet />
      </div>
    </>
  );
};

export default PublicRoute;
