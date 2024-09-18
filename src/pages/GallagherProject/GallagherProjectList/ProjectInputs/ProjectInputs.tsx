import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { RootState } from "../../../../redux/store";
import { EntityPayloadType } from "../GallagherProjectList";
import EditInputField from "../../../../components/EditInputField/EditInputField";

const ProjectInputs = ({
  entityPayload,
  setEntityPayload,
}: {
  entityPayload: EntityPayloadType;
  setEntityPayload: React.Dispatch<React.SetStateAction<EntityPayloadType>>;
}) => {
  const gallagherEntity = useSelector(
    (state: RootState) => state.gallagherEntity
  );

  return (
    <div className={styles.table_rows}>
      <div className={styles.col_3}>
        <EditInputField
          height={"25px"}
          marginTop="0px"
          label="Entity Name:"
          placeholder="Entity name..."
          type="text"
          required={true}
          disabled={false}
          initialValue={gallagherEntity.entity.entity_name}
          name={"entity_name"}
          checkSpell={true}
          onChangeText={(value) => {
            setEntityPayload({ ...entityPayload, entity_name: value });
          }}
        />
      </div>
      <div className={styles.col_1}>
        <EditInputField
          height={"25px"}
          marginTop="0px"
          label="Entity #:"
          placeholder="Entity Number..."
          name={"entity_number"}
          type="text"
          required={true}
          disabled={false}
          initialValue={gallagherEntity.entity.entity_number}
          onChangeText={(value) => {
            setEntityPayload({ ...entityPayload, entity_number: value });
          }}
        />
      </div>
      <div className={styles.col_2}>
        <EditInputField
          height={"25px"}
          marginTop="0px"
          label="Entity Address:"
          placeholder="Entity Address..."
          name={"entity_address"}
          type="text"
          required={true}
          disabled={false}
          initialValue={gallagherEntity.entity.entity_address}
          checkSpell={true}
          onChangeText={(value) => {
            setEntityPayload({ ...entityPayload, entity_address: value });
          }}
        />
      </div>

      <div className={styles.col_1}>
        <EditInputField
          height={"25px"}
          marginTop="0px"
          label="City:"
          placeholder="City..."
          name={"city"}
          type="text"
          required={true}
          disabled={false}
          initialValue={gallagherEntity.entity.city}
          onChangeText={(value) => {
            setEntityPayload({ ...entityPayload, city: value });
          }}
        />
      </div>

      <div className={styles.col_1}>
        <EditInputField
          height={"25px"}
          marginTop="0px"
          label="State:"
          placeholder="State..."
          name={"state"}
          type="text"
          required={true}
          disabled={false}
          initialValue={gallagherEntity.entity.state}
          onChangeText={(value) => {
            setEntityPayload({ ...entityPayload, state: value });
          }}
        />
      </div>

      <div className={styles.col_1}>
        <EditInputField
          height={"25px"}
          marginTop="0px"
          label="Zip:"
          placeholder="Zip..."
          name={"zip"}
          type="text"
          required={true}
          disabled={false}
          initialValue={gallagherEntity.entity.zip}
          onChangeText={(value) => {
            setEntityPayload({ ...entityPayload, zip: value });
          }}
        />
      </div>

      <div className={styles.col_1}>
        <EditInputField
          height={"25px"}
          marginTop="0px"
          label="Effective Date:"
          placeholder="Type here..."
          name={"effective_date"}
          type="date"
          required={true}
          disabled={false}
          initialValue={gallagherEntity.entity.effective_date}
          onChangeText={(value) => {
            setEntityPayload({ ...entityPayload, effective_date: value });
          }}
        />
      </div>

      {/* <div style={{ marginTop: "20px", width: "8%" }}>
        <Button
          width="100%"
          height="35px"
          title={gallagherEntity.status === "loading" ? "SAVING..." : "SAVE"}
          disabled={!buttonDisabled}
          onClick={() => {
            handleSaveEntity();
          }}
        />
      </div> */}
    </div>
  );
};

export default ProjectInputs;
