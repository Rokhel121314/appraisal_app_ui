import { useEffect, useState } from "react";
import InputField from "../../../components/InputField/InputField";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import Button from "../../../components/Button/Button";
import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  addGallagherEntity,
  viewAllGallagherEntity,
} from "../../../redux/extraReducers/gallagherEntityReducer";
import { resetGallagherEntityState } from "../../../redux/reducers/gallagherEntitySlice";
import EntityTable from "../../../components/EntityTable/EntityTable";

export interface EntityPayloadType {
  entity_name: string;
  entity_number: string;
  entity_address: string;
  city: string;
  state: string;
  zip: string;
  effective_date: string;
  appraiser: string;
}

const GallagherProjectList = () => {
  const user = useSelector((state: RootState) => state.user);
  const gallagherEntity = useSelector(
    (state: RootState) => state.gallagherEntity
  );

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [entityPayload, setEntityPayload] = useState<EntityPayloadType>({
    entity_name: gallagherEntity.entity.entity_name,
    entity_number: gallagherEntity.entity.entity_number,
    entity_address: gallagherEntity.entity.entity_address,
    city: gallagherEntity.entity.city,
    state: gallagherEntity.entity.state,
    zip: gallagherEntity.entity.zip,
    effective_date: gallagherEntity.entity.effective_date,
    appraiser: user.user.full_name,
  });

  const buttonDisabled =
    entityPayload.entity_name &&
    entityPayload.entity_number &&
    entityPayload.entity_address &&
    entityPayload.city &&
    entityPayload.state &&
    entityPayload.zip &&
    entityPayload.effective_date;
  console.log("buttonDisabled", buttonDisabled);

  const handleSaveEntity = async () => {
    await dispatch(addGallagherEntity(entityPayload));
    setTimeout(() => {
      dispatch(resetGallagherEntityState());
      window.location.reload();
    }, 500);
  };

  useEffect(() => {
    dispatch(viewAllGallagherEntity());
  }, []);

  return (
    <main className={styles.container}>
      {/* INPUT HANDLER */}
      <div className={styles.input_container}>
        <div className={styles.header_text}>NEW GALLAGHER PROJECT</div>
        <div className={styles.input_wrapper}>
          <div className={styles.col_3}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Entity Name:"
              placeholder="entity name..."
              type="text"
              required={true}
              disabled={false}
              initialValue={entityPayload.entity_name}
              name={"entity_name"}
              checkSpell={true}
              onChangeText={(value) => {
                setEntityPayload({ ...entityPayload, entity_name: value });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Entity #:"
              placeholder="entity #..."
              name={"entity_number"}
              type="text"
              required={true}
              disabled={false}
              initialValue={entityPayload.entity_number}
              onChangeText={(value) => {
                setEntityPayload({ ...entityPayload, entity_number: value });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Entity Address:"
              placeholder="address..."
              name={"entity_address"}
              type="text"
              required={true}
              disabled={false}
              initialValue={entityPayload.entity_address}
              checkSpell={true}
              onChangeText={(value) => {
                setEntityPayload({ ...entityPayload, entity_address: value });
              }}
            />
          </div>

          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="City:"
              placeholder="city..."
              name={"city"}
              type="text"
              required={true}
              disabled={false}
              initialValue={entityPayload.city}
              onChangeText={(value) => {
                setEntityPayload({ ...entityPayload, city: value });
              }}
            />
          </div>

          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="State:"
              placeholder="state..."
              name={"state"}
              type="text"
              required={true}
              disabled={false}
              initialValue={entityPayload.state}
              onChangeText={(value) => {
                setEntityPayload({ ...entityPayload, state: value });
              }}
            />
          </div>

          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Zip:"
              placeholder="zip..."
              name={"zip"}
              type="text"
              required={true}
              disabled={false}
              initialValue={entityPayload.zip}
              onChangeText={(value) => {
                setEntityPayload({ ...entityPayload, zip: value });
              }}
            />
          </div>

          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Effective Date:"
              placeholder="Type here..."
              name={"effective_date"}
              type="date"
              required={true}
              disabled={false}
              initialValue={entityPayload.effective_date}
              onChangeText={(value) => {
                setEntityPayload({ ...entityPayload, effective_date: value });
              }}
            />
          </div>

          <div style={{ marginTop: "20px", width: "8%" }}>
            <Button
              width="100%"
              height="35px"
              title={
                gallagherEntity.status === "loading" ? "SAVING..." : "SAVE"
              }
              disabled={!buttonDisabled}
              onClick={() => {
                handleSaveEntity();
              }}
            />
          </div>
        </div>
      </div>
      {/* TABLE */}

      <div className={styles.search_container}>SEARCH BOX</div>
      <div className={styles.table_container}>
        <EntityTable entityArray={gallagherEntity.entityList} />
      </div>
    </main>
  );
};

export default GallagherProjectList;
