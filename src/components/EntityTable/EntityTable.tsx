import styles from "./styles.module.css";
import { dateFormater } from "../../hooks/dateformater";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { selectEntity } from "../../redux/reducers/gallagherEntitySlice";
import ProjectInputs from "../../pages/GallagherProject/GallagherProjectList/ProjectInputs/ProjectInputs";
import { EntityPayloadType } from "../../redux/extraReducers/gallagherEntityReducer";
import { RootState } from "../../redux/store";

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

const EntityTable = ({
  entityArray,
  entityPayload,
  setEntityPayload,
  toggleAddEntity,
  setToggleEdit,
  toggleEdit,
  selectionDisabled,
}: {
  entityArray: EntityType[];
  entityPayload: EntityPayloadType;
  setEntityPayload: React.Dispatch<React.SetStateAction<EntityPayloadType>>;
  toggleAddEntity: boolean;
  setToggleEdit: React.Dispatch<React.SetStateAction<boolean>>;
  toggleEdit: boolean;
  selectionDisabled: boolean;
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const entity = useSelector((state: RootState) => state.gallagherEntity);

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
        <span className={`${styles.col_1}`}>Zip</span>
        <span className={`${styles.col_1}`}>Effective Date</span>
      </div>
      <div className={styles.table_row_container}>
        {!toggleAddEntity ? null : (
          <ProjectInputs
            entityPayload={entityPayload}
            setEntityPayload={setEntityPayload}
          />
        )}

        {entityArray.map((item) => {
          if (item.entity_id === entity.entity.entity_id && toggleEdit) {
            return (
              <ProjectInputs
                entityPayload={entityPayload}
                setEntityPayload={setEntityPayload}
              />
            );
          }
          return (
            <button
              className={styles.table_rows}
              disabled={selectionDisabled}
              key={item.entity_id}
              onClick={async () => {
                await dispatch(selectEntity(item));
                if (toggleEdit) {
                  setToggleEdit(false);
                } else return;
              }}
            >
              <span
                style={{
                  textDecoration: "underline",
                  color: "Highlight",
                  cursor: "pointer",
                }}
                className={`${styles.col_3}`}
                onClick={() => {
                  handleNavigateProjectPage(item.entity_id, item);
                }}
              >
                {item.entity_name}
              </span>
              <span className={`${styles.col_1}`}>{item.entity_number}</span>
              <span className={`${styles.col_2}`}>{item.entity_address}</span>
              <span className={`${styles.col_1}`}>{item.city}</span>
              <span className={`${styles.col_1}`}>{item.state}</span>
              <span className={`${styles.col_1}`}>{item.zip}</span>
              <span className={`${styles.col_1}`}>
                {dateFormater(item.effective_date)}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default EntityTable;
