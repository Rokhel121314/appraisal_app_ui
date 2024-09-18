import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  addGallagherEntity,
  updateGallagherEntity,
  viewAllGallagherEntity,
} from "../../../redux/extraReducers/gallagherEntityReducer";
import {
  resetEntity,
  resetGallagherEntityState,
} from "../../../redux/reducers/gallagherEntitySlice";
import EntityTable from "../../../components/EntityTable/EntityTable";
import MediumIcon from "../../../components/MediumIcon/MediumIcon";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import LoadingModal from "../../../components/LoadingModal/LoadingModal";

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

  // const [toggleUpdate, setToggleUpdate] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleSaveChanges, setToggleSaveChanges] = useState(false);
  const [toggleAddEntity, setToggleAddEntity] = useState(false);
  // const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const [toggleUpdateModal, setToggleUpdateModal] = useState(false);
  const [toggleSaveModal, setToggleSaveModal] = useState(false);
  const [selectionDisabled, setSelectionDisabled] = useState(false);

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

  console.log("PAYLOAD:", entityPayload);

  // SAVE ENTITY
  const handleSaveEntity = async () => {
    await dispatch(addGallagherEntity(entityPayload));
    dispatch(resetGallagherEntityState());
    setTimeout(() => {
      dispatch(viewAllGallagherEntity());
      setToggleAddEntity(false);
    }, 500);
  };

  // UPDATE ENTITY
  const handleUpdateEntity = async () => {
    await dispatch(
      updateGallagherEntity({
        entity_id: gallagherEntity.entity.entity_id,
        entity: entityPayload,
      })
    );
    await dispatch(viewAllGallagherEntity());
    dispatch(resetEntity());
    setToggleSaveChanges(false);
    setSelectionDisabled(false);
  };

  useEffect(() => {
    dispatch(viewAllGallagherEntity());
  }, []);

  const handleToggleNewEntity = () => {
    setToggleAddEntity((prev) => !prev);
  };

  const handleToggleSaveModal = () => {
    setToggleSaveModal((prev) => !prev);
  };

  const handleToggleEdit = () => {
    if (toggleEdit) {
      setToggleEdit(false);
      setSelectionDisabled(false);
      dispatch(resetEntity());
    } else {
      setToggleEdit(true);
      setSelectionDisabled(true);
    }
  };

  const handleToggleSaveChanges = () => {
    setToggleSaveChanges((prev) => !prev);
  };

  const handleToggleUpdateModal = () => {
    setToggleUpdateModal((prev) => !prev);
  };

  return (
    <main className={styles.container}>
      {/* INPUT HANDLER */}
      <div className={styles.input_container}>
        <MediumIcon
          title={!toggleAddEntity ? "NEW PROJECT" : "CLOSE"}
          onClick={() => {
            handleToggleNewEntity();
            dispatch(resetEntity());
            setEntityPayload({
              entity_name: gallagherEntity.empty_entity.entity_name,
              entity_number: gallagherEntity.empty_entity.entity_number,
              entity_address: gallagherEntity.empty_entity.entity_address,
              city: gallagherEntity.empty_entity.city,
              state: gallagherEntity.empty_entity.state,
              zip: gallagherEntity.empty_entity.zip,
              effective_date: gallagherEntity.empty_entity.effective_date,
              appraiser: user.user.full_name,
            });
          }}
          icon="/logo/file.png"
        />

        <div className={styles.table_functions}>
          {!gallagherEntity.entity.entity_id ? (
            ""
          ) : (
            <MediumIcon
              title={toggleEdit ? "CANCEL EDIT" : "EDIT ENTITY"}
              onClick={() => {
                setEntityPayload(gallagherEntity.entity);
                handleToggleSaveChanges();
                handleToggleEdit();
              }}
              icon="/logo/file.png"
            />
          )}

          {!toggleSaveChanges ? null : (
            <MediumIcon
              title={"SAVE CHANGES"}
              onClick={() => {
                handleToggleUpdateModal();
              }}
              icon="/logo/file.png"
            />
          )}

          {!toggleAddEntity ? null : (
            <MediumIcon
              title={"SAVE NEW PROJECT"}
              onClick={() => {
                handleToggleSaveModal();
              }}
              icon="/logo/file.png"
            />
          )}
        </div>
      </div>
      {/* TABLE */}

      <div className={styles.search_container}>SEARCH BOX</div>

      {/* TABELE */}
      <div className={styles.table_container}>
        <EntityTable
          entityArray={gallagherEntity.entityList}
          entityPayload={entityPayload}
          setEntityPayload={setEntityPayload}
          toggleAddEntity={toggleAddEntity}
          toggleEdit={toggleEdit}
          setToggleEdit={setToggleEdit}
          selectionDisabled={selectionDisabled}
        />
      </div>
      {/* SAVE NEW MODAL */}
      <ConfirmationModal
        title={"Confirm Save!"}
        detail={`Add   ${entityPayload.entity_name}?`}
        modal_toggle={toggleSaveModal}
        confirmFunction={() => {
          handleSaveEntity();
        }}
        cancelFunction={() => {}}
        toggleFunction={() => {
          handleToggleSaveModal();
        }}
      />

      {/* UPDATE MODAL */}
      <ConfirmationModal
        title={"Confirm UPDATE!"}
        detail={`Save changes to  ${gallagherEntity.entity.entity_name.toUpperCase()} `}
        modal_toggle={toggleUpdateModal}
        confirmFunction={() => {
          handleUpdateEntity();
        }}
        cancelFunction={() => {}}
        toggleFunction={() => {
          handleToggleUpdateModal();
        }}
      />

      <LoadingModal status={gallagherEntity.status} />
    </main>
  );
};

export default GallagherProjectList;
