import styles from "./styles.module.css";
import { dateFormater } from "../../hooks/dateformater";
import SmallButton from "../SmallButton/SmallButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { selectEntity } from "../../redux/reducers/gallagherEntitySlice";

type EntityType = {
  entity_name: string;
  entity_number: string;
  entity_address: string;
  city: string;
  state: string;
  zip: string;
  effective_date: string;
  appraiser: string;
  date_updated: string;
  entity_id: string;
  date_created: string;
};

type PropTypes = {
  entityArray: EntityType[];
};

const EntityTable = (props: PropTypes) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  const handleNavigateProjectPage = async (
    entity_id: string,
    entity: EntityType
  ) => {
    await dispatch(selectEntity(entity));
    navigate(`/spallc/gallagher/${entity_id}`);
  };

  return (
    <>
      <div className={styles.table_header}>
        <span className={`${styles.col_3}`}>Entity Name</span>
        <span className={`${styles.col_1}`}>Entity #</span>
        <span className={`${styles.col_2}`}>Entity Address</span>
        <span className={`${styles.col_1}`}>City</span>
        <span className={`${styles.col_1}`}>State</span>
        <span className={`${styles.col_1}`}>Effective Date</span>
        <span className={`${styles.col_1}`}>Appraiser</span>
        <span className={`${styles.col_1}`}>Last Modified</span>
        <span className={`${styles.col_1}`}>Action</span>
      </div>
      <div className={styles.table_row_container}>
        {props.entityArray.map((item) => {
          return (
            <div className={styles.table_rows} key={item.entity_id}>
              <span className={`${styles.col_3}`}>{item.entity_name}</span>
              <span className={`${styles.col_1}`}>{item.entity_number}</span>
              <span className={`${styles.col_2}`}>{item.entity_address}</span>
              <span className={`${styles.col_1}`}>{item.city}</span>
              <span className={`${styles.col_1}`}>{item.state}</span>
              <span className={`${styles.col_1}`}>
                {dateFormater(item.effective_date)}
              </span>
              <span className={`${styles.col_1}`}>{item.appraiser}</span>
              <span className={`${styles.col_1}`}>
                {dateFormater(item.date_updated)}
              </span>
              <div className={`${styles.col_1} ${styles.action_container}`}>
                <SmallButton
                  title="OPEN"
                  onClick={() => {
                    handleNavigateProjectPage(item.entity_id, item);
                  }}
                  icon="/logo/view-2.png"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EntityTable;
