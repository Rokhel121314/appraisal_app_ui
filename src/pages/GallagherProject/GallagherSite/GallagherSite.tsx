import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { RootState } from "../../../redux/store";
import MediumIcon from "../../../components/MediumIcon/MediumIcon";
import { useEffect, useState } from "react";
import { GallagherSiteType } from "../../../types";
import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  addGallagherSite,
  addMultipleGallagherSite,
  deleteGallagherSite,
  updateGallagherSite,
  viewGallagherSitesPerEntity,
} from "../../../redux/extraReducers/gallagherSiteReducers";
import useUploadExcelFile from "../../../hooks/useUploadExcelFile";
import SiteTable from "../../../components/SiteTable/SiteTable";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import {
  resetSite,
  uploadSiteList,
} from "../../../redux/reducers/gallagherSiteSlice";
import LoadingModal from "../../../components/LoadingModal/LoadingModal";

const GallagherSite = () => {
  const entity = useSelector((state: RootState) => state.gallagherEntity);
  const site = useSelector((state: RootState) => state.gallagherSite);
  const gallagherSite = useSelector(
    (state: RootState) => state.gallagherSite.site
  );
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { data, handleFileUpload, resetData } = useUploadExcelFile(
    entity.entity.entity_id
  );

  console.log("excel_data:", data);

  const [sitePayload, setSitePayload] = useState<GallagherSiteType>({
    entity_site_building_number: gallagherSite.entity_site_building_number,
    site_number: gallagherSite.site_number,
    site_name: gallagherSite.site_name,
    site_address: gallagherSite.site_address,
    city: gallagherSite.city,
    state: gallagherSite.state,
    zip: gallagherSite.zip,
    building_number: gallagherSite.building_number,
    building_name: gallagherSite.building_name,
    building_address: gallagherSite.building_address,
    latitude: gallagherSite.latitude,
    longitude: gallagherSite.longitude,
    sov_rcn: gallagherSite.sov_rcn,
    sov_construction_class: gallagherSite.sov_construction_class,
    sov_area: gallagherSite.sov_area,
    inspection_date: gallagherSite.inspection_date,
    year_built: gallagherSite.year_built,
    building_use: gallagherSite.building_use,
    stories: gallagherSite.stories,
    average_height: gallagherSite.average_height,
    area_main: gallagherSite.area_main,
    area_basement: gallagherSite.area_basement,
    area_total: gallagherSite.area_total,
    frame_type: gallagherSite.frame_type,
    iso_class: gallagherSite.iso_class,
    structural_floor_frame: gallagherSite.structural_floor_frame,
    foundation_type: gallagherSite.foundation_type,
    building_service_system: gallagherSite.building_service_system,
    roof_cover_material: gallagherSite.roof_cover_material,
    roof_frame: gallagherSite.roof_frame,
    roof_age: gallagherSite.roof_age,
    roof_geometry: gallagherSite.roof_geometry,
    exterior_walltype_1: gallagherSite.exterior_walltype_1,
    exterior_walltype_2: gallagherSite.exterior_walltype_2,
    exterior_walltype_3: gallagherSite.exterior_walltype_3,
    fire_sprinklers: gallagherSite.fire_sprinklers,
    firealarms_manual: gallagherSite.firealarms_manual,
    firealarms_automatic: gallagherSite.firealarms_automatic,
    smoke_detector: gallagherSite.smoke_detector,
    fire_extinguishers: gallagherSite.fire_extinguishers,
    emergency_exit_lights: gallagherSite.emergency_exit_lights,
    additional_features: gallagherSite.additional_features,
    cost_new: gallagherSite.cost_new,
    cost_new_less_exclusions: gallagherSite.cost_new_less_exclusions,
    exclusions: gallagherSite.exclusions,
    rcn_per_area: gallagherSite.rcn_per_area,
    bvs_type: "Replacement",
    entity_id: entity.entity.entity_id,
  });

  // console.log("SITEPAYLOAD:", sitePayload);

  const diff =
    typeof site.site.sov_rcn === "number"
      ? typeof site.site.cost_new === "number"
        ? (1 - site.site.sov_rcn / site.site.cost_new) * 100
        : "N/A"
      : "NA";
  console.log("DIFF:", `${diff.toLocaleString()} %`);

  useEffect(() => {
    dispatch(viewGallagherSitesPerEntity(entity.entity.entity_id));
  }, []);

  //UPLOAD CONFIRMATION MODAL
  const [toggleUpdate, setToggleUpdate] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [toggleSaveChanges, setToggleSaveChanges] = useState(false);
  const [toggleAddSite, setToggleAddSite] = useState(false);
  const [toggleDeleteModal, setToggleDeleteModal] = useState(false);
  const [toggleUpdateModal, setToggleUpdateModal] = useState(false);
  const [toggleSaveModal, setToggleSaveModal] = useState(false);

  const handleToggleUpdate = () => {
    setToggleUpdate((prev) => !prev);
  };

  const handleToggleNewSite = () => {
    setToggleAddSite((prev) => !prev);
  };

  const handleToggleSaveChanges = () => {
    setToggleSaveChanges((prev) => !prev);
  };

  const handleToggleEdit = () => {
    if (toggleEdit) {
      setToggleEdit(false);
      dispatch(resetSite());
    } else {
      setToggleEdit(true);
    }
  };

  const handleToggleDeleteModal = () => {
    setToggleDeleteModal((prev) => !prev);
  };

  const handleToggleUpdateModal = () => {
    setToggleUpdateModal((prev) => !prev);
  };

  const handleToggleSaveModal = () => {
    setToggleSaveModal((prev) => !prev);
  };

  useEffect(() => {
    if (!data) {
      return;
    } else setToggleUpdate(true);
  }, [data]);

  // UPLOAD XLSX FILE CONFIRM FUNCTION
  const confirmFunction = async () => {
    await dispatch(uploadSiteList(data));
    if (!data) {
      return;
    } else {
      await dispatch(addMultipleGallagherSite(data));
      resetData();
      dispatch(viewGallagherSitesPerEntity(entity.entity.entity_id));
    }
  };
  // UPLOAD XLSX FILE CANCEL FUNCTION
  const cancelFunction = () => {
    resetData();
  };

  // ADD SITE
  const handleSaveSite = async () => {
    await dispatch(addGallagherSite(sitePayload));
    await dispatch(viewGallagherSitesPerEntity(entity.entity.entity_id));
    dispatch(resetSite());
    setToggleAddSite(false);
  };

  // UPDATE SITE

  const handleUpdateSite = async () => {
    await dispatch(
      updateGallagherSite({ site_id: site.site.site_id, site: sitePayload })
    );
    await dispatch(viewGallagherSitesPerEntity(entity.entity.entity_id));
    dispatch(resetSite());
    setToggleSaveChanges(false);
  };

  // DELETE SITE

  const handleDeleteSite = async () => {
    await dispatch(deleteGallagherSite(site.site.site_id));
    await dispatch(viewGallagherSitesPerEntity(entity.entity.entity_id));
    dispatch(resetSite());
  };

  return (
    <main className={styles.main_container}>
      {/* ENTITY DETAIL HEADER */}
      <div className={styles.entity_detail}>
        <div
          className={styles.detail_wrapper}
          style={{ alignItems: "flex-start" }}
        >
          <span>{`Entity Name: ${entity.entity.entity_name}`}</span>
          <span>{`Entity Number: ${entity.entity.entity_number}`}</span>
        </div>
        <div
          className={styles.detail_wrapper}
          style={{ alignItems: "flex-end" }}
        >
          <span>{`Appraiser: ${entity.entity.appraiser}`}</span>
          <span>{`Effective Date: ${entity.entity.effective_date}`}</span>
        </div>
      </div>

      {/* INPUT CONTAINER */}
      <div className={styles.input_actions_container}>
        <div className={styles.actions_wrapper}>
          {/* CREATE FUNCTIONS */}
          <div className={styles.create_functions}>
            <MediumIcon
              title={!toggleAddSite ? "NEW SITE" : "CLOSE"}
              onClick={() => {
                dispatch(resetSite());
                setSitePayload({
                  ...site.empty_site,
                  entity_id: entity.entity.entity_id,
                });
                handleToggleNewSite();
              }}
              icon="/logo/file.png"
            />
            <input type="file" onChange={handleFileUpload} />
          </div>

          {/* FILE FUNCTIONS */}
          <div className={styles.file_functions}></div>

          {/* TABLE FUNCTIONS */}
          <div className={styles.table_functions}>
            {!site.site.site_id ? (
              ""
            ) : (
              <MediumIcon
                title={"DELETE SITE"}
                onClick={() => {
                  handleToggleDeleteModal();
                }}
                icon="/logo/file.png"
              />
            )}
            {!site.site.site_id ? (
              ""
            ) : (
              <MediumIcon
                title={toggleEdit ? "CANCEL EDIT" : "EDIT FILE"}
                onClick={() => {
                  setSitePayload(site.site);
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
            {!toggleAddSite ? null : (
              <MediumIcon
                title={"SAVE NEW SITE"}
                onClick={() => {
                  handleToggleSaveModal();
                }}
                icon="/logo/file.png"
              />
            )}
          </div>
        </div>

        {/* SITE TABLE */}
        <div className={styles.table_wrapper}>
          {!site.site_list ? (
            <div>NO DATA TO LOAD</div>
          ) : (
            <SiteTable
              sitePayload={sitePayload}
              setSitePayload={setSitePayload}
              toggleEdit={toggleEdit}
              setToggleEdit={setToggleEdit}
              toggleAddSite={toggleAddSite}
              setToggleAddSite={setToggleAddSite}
            />
          )}
        </div>
      </div>

      {/* UPLOAD MODAL */}
      <ConfirmationModal
        title={"Confirm!"}
        detail="Upload data from XLSX file?"
        modal_toggle={toggleUpdate}
        confirmFunction={confirmFunction}
        cancelFunction={cancelFunction}
        toggleFunction={() => {
          handleToggleUpdate();
        }}
      />

      {/* DELETE MODAL */}
      <ConfirmationModal
        title={"Confirm DELETE!"}
        detail={`Delete ${site.site.entity_site_building_number} `}
        modal_toggle={toggleDeleteModal}
        confirmFunction={() => {
          handleDeleteSite();
        }}
        cancelFunction={() => {}}
        toggleFunction={() => {
          handleToggleDeleteModal();
        }}
      />

      {/* UPDATE MODAL */}
      <ConfirmationModal
        title={"Confirm UPDATE!"}
        detail={`Save changes to ${site.site.entity_site_building_number} `}
        modal_toggle={toggleUpdateModal}
        confirmFunction={() => {
          handleUpdateSite();
        }}
        cancelFunction={() => {}}
        toggleFunction={() => {
          handleToggleUpdateModal();
        }}
      />

      {/* SAVE NEW MODAL */}
      <ConfirmationModal
        title={"Confirm ADD!!"}
        detail={`Add  ${sitePayload.entity_site_building_number} ?`}
        modal_toggle={toggleSaveModal}
        confirmFunction={() => {
          handleSaveSite();
        }}
        cancelFunction={() => {}}
        toggleFunction={() => {
          handleToggleSaveModal();
        }}
      />

      {/* SAVE NEW MODAL */}
      <LoadingModal />
    </main>
  );
};

export default GallagherSite;
