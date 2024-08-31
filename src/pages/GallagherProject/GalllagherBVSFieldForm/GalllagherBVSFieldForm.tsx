import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { RootState } from "../../../redux/store";

const GalllagherBVSFieldForm = () => {
  const site = useSelector((state: RootState) => state.gallagherSite);
  const entity = useSelector((state: RootState) => state.gallagherEntity);
  const user = useSelector((state: RootState) => state.user);

  console.log("ENTITY:", entity.entity);
  console.log("SITE:", site.filtered_site_list);
  console.log("USER:", user.user);
  return <main className={styles.main_container}>GalllagherBVSFieldForm</main>;
};

export default GalllagherBVSFieldForm;
