import styles from "./styles.module.css";

const PublicRoute = () => {
  return (
    <>
      <nav className={styles.container}>
        <div className={styles.logo_container}>BRAND</div>
        <div className={styles.action_container}>LOGIN</div>
      </nav>
    </>
  );
};

export default PublicRoute;
