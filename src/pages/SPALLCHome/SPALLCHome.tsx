import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

const SPALLCHome = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <div
        className={styles.section_gallagher}
        onClick={() => navigate("/spallc/gallagher")}
      >
        GALLAGHER PROJECTS
      </div>
      <div
        className={styles.cmg}
        onClick={() => navigate("/spallc/catholic-mutual")}
      >
        CATHOLIC MUTUALS PROJECTS
      </div>
    </main>
  );
};

export default SPALLCHome;
