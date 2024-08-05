import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import Button from "../../components/Button/Button";

const SPALLCHome = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <div className={styles.section}>
        <div className={styles.button_container}>
          <Button
            title="VIEW Gallagher Projects"
            disabled={false}
            onClick={() => {
              navigate("/spallc/gallagher");
            }}
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.button_container}>
          <Button
            title="VIEW CMG Projects"
            disabled={false}
            onClick={() => {
              navigate("/spallc/catholic-mutual");
            }}
          />
        </div>
      </div>
    </main>
  );
};

export default SPALLCHome;
