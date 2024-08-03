import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { RootState } from "../../../redux/store";
import MediumIcon from "../../../components/MediumIcon/MediumIcon";
import { useEffect, useState } from "react";
import { GallagherSiteType } from "../../../types";
import InputField from "../../../components/InputField/InputField";
import DropdownInput from "../../../components/DropdownInput/DropdownInput";
import {
  buildingUseList,
  exteriorWallsList,
  foundation,
  frameType,
  ISOConstructionClass,
  roofCovering,
  roofFrame,
  roofGeometry,
  serviceSystemsList,
  structuralFloorFrame,
} from "../../../utils/options";
import { ThunkDispatch } from "@reduxjs/toolkit";
import {
  addGallagherSite,
  addMultipleGallagherSite,
  viewGallagherSitesPerEntity,
} from "../../../redux/extraReducers/gallagherSiteReducers";
import useUploadExcelFile from "../../../hooks/useUploadExcelFile";
import SiteTable from "../../../components/SiteTable/SiteTable";
import ConfirmationModal from "../../../components/ConfirmationModal/ConfirmationModal";
import { uploadSiteList } from "../../../redux/reducers/gallagherSiteSlice";

const GallagherSite = () => {
  const entity = useSelector((state: RootState) => state.gallagherEntity);
  const site = useSelector((state: RootState) => state.gallagherSite);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { data, handleFileUpload, resetData } = useUploadExcelFile(
    entity.entity.entity_id
  );

  const [sitePayload, setSitePayload] = useState<GallagherSiteType>({
    entity_site_building_number: "",
    site_number: "",
    site_name: "",
    site_address: "",
    city: "",
    state: "",
    zip: "",
    building_number: "",
    building_name: "",
    building_address: "",
    latitude: "",
    longitude: "",
    sov_rcn: undefined,
    sov_construction_class: "",
    sov_area: undefined,
    inspection_date: "",
    year_built: "",
    building_use: "",
    stories: undefined,
    average_height: undefined,
    area_main: undefined,
    area_basement: 0,
    area_total: undefined,
    frame_type: "",
    iso_class: "",
    structural_floor_frame: "",
    foundation_type: "",
    building_service_system: "",
    roof_cover_material: "",
    roof_frame: "",
    roof_age: "",
    roof_geometry: "",
    exterior_walltype_1: "",
    exterior_walltype_2: "",
    exterior_walltype_3: "",
    fire_sprinklers: "No",
    firealarms_manual: "No",
    firealarms_automatic: "No",
    smoke_detector: "No",
    fire_extinguishers: "No",
    emergency_exit_lights: "No",
    additional_features: "",
    cost_new: undefined,
    cost_new_less_exclusions: undefined,
    exclusions: undefined,
    rcn_per_area: undefined,
    bvs_type: "Replacement",
    entity_id: entity.entity.entity_id,
  });

  const handleSaveSite = () => {
    dispatch(addGallagherSite(sitePayload));
  };

  const TOTAL_AREA =
    typeof sitePayload.area_main === "number" &&
    !Number.isNaN(sitePayload.area_main)
      ? typeof sitePayload.area_basement === "number" &&
        !Number.isNaN(sitePayload.area_basement)
        ? sitePayload.area_main + sitePayload.area_basement
        : sitePayload.area_main
      : typeof sitePayload.area_basement === "number" &&
        typeof sitePayload.area_basement === "number" &&
        !Number.isNaN(sitePayload.area_basement)
      ? sitePayload.area_basement
      : 0;

  const RCN_LESS_EXCLUSSIONS =
    typeof sitePayload.cost_new === "number" &&
    !Number.isNaN(sitePayload.cost_new)
      ? typeof sitePayload.exclusions === "number" &&
        !Number.isNaN(sitePayload.exclusions)
        ? sitePayload.cost_new - sitePayload.exclusions
        : sitePayload.cost_new
      : typeof sitePayload.exclusions === "number" &&
        typeof sitePayload.exclusions === "number" &&
        !Number.isNaN(sitePayload.exclusions)
      ? sitePayload.exclusions
      : 0;

  // GETTING AREA TOTAL ON INPUT OF MAIN AND BASEMENT AREA
  useEffect(() => {
    const TOTAL_AREA =
      typeof sitePayload.area_main === "number" &&
      !Number.isNaN(sitePayload.area_main)
        ? typeof sitePayload.area_basement === "number" &&
          !Number.isNaN(sitePayload.area_basement)
          ? sitePayload.area_main + sitePayload.area_basement
          : sitePayload.area_main
        : typeof sitePayload.area_basement === "number" &&
          typeof sitePayload.area_basement === "number" &&
          !Number.isNaN(sitePayload.area_basement)
        ? sitePayload.area_basement
        : 0;

    setSitePayload((prev) => ({
      ...prev,
      area_total: TOTAL_AREA,
    }));
  }, [sitePayload.area_basement, sitePayload.area_main]);

  // GETTING RCN LESS EXCLUSSIONS VALUE
  useEffect(() => {
    const RCN_LESS_EXCLUSSIONS =
      typeof sitePayload.cost_new === "number" &&
      !Number.isNaN(sitePayload.cost_new)
        ? typeof sitePayload.exclusions === "number" &&
          !Number.isNaN(sitePayload.exclusions)
          ? sitePayload.cost_new - sitePayload.exclusions
          : sitePayload.cost_new
        : typeof sitePayload.exclusions === "number" &&
          typeof sitePayload.exclusions === "number" &&
          !Number.isNaN(sitePayload.exclusions)
        ? sitePayload.exclusions
        : 0;

    setSitePayload((prev) => ({
      ...prev,
      cost_new_less_exclusions: RCN_LESS_EXCLUSSIONS,
    }));
  }, [sitePayload.exclusions, sitePayload.cost_new]);

  // GETTING ENTITY-SITE-BUILDING NUMBER

  useEffect(() => {
    const entity_site_building_number = `${entity.entity.entity_number}-${sitePayload.site_number}-${sitePayload.building_number}`;

    setSitePayload((prev) => ({
      ...prev,
      entity_site_building_number: entity_site_building_number,
    }));
  }, [sitePayload.site_number, sitePayload.building_number]);

  // GETTING COST PER SQ. FOOT

  useEffect(() => {
    const COST_PER_AREA =
      typeof sitePayload.cost_new === "number" &&
      !Number.isNaN(sitePayload.cost_new)
        ? typeof sitePayload.area_total === "number" &&
          !Number.isNaN(sitePayload.area_total)
          ? sitePayload.cost_new / sitePayload.area_total
          : sitePayload.cost_new / 1
        : typeof sitePayload.area_total === "number" &&
          typeof sitePayload.area_total === "number" &&
          !Number.isNaN(sitePayload.area_total)
        ? NaN
        : NaN;

    setSitePayload((prev) => ({
      ...prev,
      rcn_per_area: COST_PER_AREA,
    }));
  }, [sitePayload.area_total, sitePayload.cost_new]);

  useEffect(() => {
    dispatch(viewGallagherSitesPerEntity(entity.entity.entity_id));
  }, []);

  //CONFIRMATION MODAL
  const [toggleUpdate, setToggleUpdate] = useState(false);

  const handleToggleUpdate = () => {
    setToggleUpdate((prev) => !prev);
  };

  useEffect(() => {
    if (!data) {
      return;
    } else setToggleUpdate(true);
  }, [data]);

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

  const cancelFunction = () => {
    resetData();
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
          <input type="file" onChange={handleFileUpload} />
          <MediumIcon
            title="ADD SITE"
            onClick={() => {
              handleSaveSite();
            }}
            icon="/logo/file.png"
          />
        </div>
        <div className={styles.input_wrapper}>
          <div className={styles.col_2}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Entity-Site-Building Number:"
              placeholder={sitePayload.entity_site_building_number}
              type="text"
              required={true}
              disabled={true}
              initialValue={sitePayload.entity_site_building_number}
              name={"entity_site_building_number"}
              checkSpell={true}
              onChangeText={() => {}}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="*Site Number:"
              placeholder="site number..."
              type="text"
              required={true}
              disabled={false}
              initialValue={sitePayload.site_number}
              name={"site_number"}
              checkSpell={false}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  site_number: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="*Site Name:"
              placeholder="site name..."
              type="text"
              required={true}
              disabled={false}
              initialValue={sitePayload.site_name}
              name={"site_name"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  site_name: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Site Address:"
              placeholder="site address..."
              type="text"
              required={false}
              disabled={false}
              initialValue={sitePayload.site_address}
              name={"site_address"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  site_address: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="City:"
              placeholder="city..."
              type="text"
              required={false}
              disabled={false}
              initialValue={sitePayload.city}
              name={"city"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  city: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="State:"
              placeholder="state..."
              type="text"
              required={false}
              disabled={false}
              initialValue={sitePayload.state}
              name={"state"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  state: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Zip:"
              placeholder="zip..."
              type="text"
              required={false}
              disabled={false}
              initialValue={sitePayload.zip}
              name={"zip"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  zip: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Building Number:"
              placeholder="building number..."
              type="text"
              required={false}
              disabled={false}
              initialValue={sitePayload.building_number}
              name={"building_number"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  building_number: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Building Name:"
              placeholder="building name..."
              type="text"
              required={false}
              disabled={false}
              initialValue={sitePayload.building_name}
              name={"building_name"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  building_name: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Building Address:"
              placeholder="building address..."
              type="text"
              required={false}
              disabled={false}
              initialValue={sitePayload.building_address}
              name={"building_address"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  building_address: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Latitude:"
              placeholder="latitude..."
              type="text"
              required={false}
              disabled={false}
              initialValue={sitePayload.latitude}
              name={"latitude"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  latitude: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Longitude:"
              placeholder="longitude..."
              type="text"
              required={false}
              disabled={false}
              initialValue={sitePayload.longitude}
              name={"longitude"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  longitude: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="SOV RCN ( $ ):"
              placeholder="SOV RCN..."
              type="number"
              required={false}
              disabled={false}
              initialValue={sitePayload.sov_rcn}
              name={"sov_rcn"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  sov_rcn: parseFloat(value),
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="SOV Construction Class:"
              select_options={ISOConstructionClass}
              list={"construction_class"}
              placeholder="Select..."
              name={"construction_classes"}
              required={false}
              disabled={false}
              initialValue={sitePayload.sov_construction_class}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  sov_construction_class: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="SOV Area (sq.ft):"
              placeholder="SOV Area..."
              type="number"
              required={false}
              disabled={false}
              initialValue={sitePayload.sov_area}
              name={"sov_area"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  sov_area: parseFloat(value),
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              type="date"
              required={false}
              disabled={false}
              checkSpell={true}
              label="Inspection Date:"
              placeholder=""
              initialValue={sitePayload.inspection_date}
              name={"inspection_date"}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  inspection_date: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              type="text"
              required={false}
              disabled={false}
              checkSpell={true}
              label="Year Built:"
              placeholder="year built..."
              initialValue={sitePayload.year_built}
              name={"year_built"}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  year_built: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="Building Use/Occupancy:"
              select_options={buildingUseList}
              list={"building_uses"}
              placeholder="Select..."
              name={"building_use"}
              required={false}
              disabled={false}
              initialValue={sitePayload.building_use}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  building_use: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Number of Story:"
              placeholder="number of story..."
              type="number"
              required={false}
              disabled={false}
              initialValue={sitePayload.stories}
              name={"stories"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  stories: parseFloat(value),
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Average Height ( ft ):"
              placeholder="height..."
              type="number"
              required={false}
              disabled={false}
              initialValue={sitePayload.average_height}
              name={"average_height"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  average_height: parseFloat(value),
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Main Area (sq.ft):"
              placeholder="area..."
              type="number"
              required={false}
              disabled={false}
              initialValue={sitePayload.area_main}
              name={"area_main"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  area_main: parseFloat(value),
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Basement Area (sq.ft):"
              placeholder="area..."
              type="number"
              required={false}
              disabled={false}
              initialValue={sitePayload.area_basement}
              name={"area_basement"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  area_basement: parseFloat(value),
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Total Area (sq.ft):"
              placeholder={TOTAL_AREA.toLocaleString()}
              type="number"
              required={false}
              disabled={true}
              initialValue={sitePayload.area_total}
              name={"area_total"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  area_total: parseFloat(value),
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="Frame Type:"
              select_options={frameType}
              list={"frame_types"}
              placeholder="Select..."
              name={"frame_type"}
              required={false}
              disabled={false}
              initialValue={sitePayload.frame_type}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  frame_type: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="ISO Class:"
              select_options={ISOConstructionClass}
              list={"iso_classes"}
              placeholder="Select..."
              name={"iso_class"}
              required={false}
              disabled={false}
              initialValue={sitePayload.iso_class}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  iso_class: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="Structural Floor Frame:"
              select_options={structuralFloorFrame}
              list={"structural_floor_frames"}
              placeholder="Select..."
              name={"structural_floor_frame"}
              required={false}
              disabled={false}
              initialValue={sitePayload.structural_floor_frame}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  structural_floor_frame: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="Foundation Type:"
              select_options={foundation}
              list={"foundation_types"}
              placeholder="Select..."
              name={"foundation_type"}
              required={false}
              disabled={false}
              initialValue={sitePayload.foundation_type}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  foundation_type: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="Building Service System:"
              select_options={serviceSystemsList}
              list={"services"}
              placeholder="Select..."
              name={"service"}
              required={false}
              disabled={false}
              initialValue={sitePayload.building_service_system}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  building_service_system: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="Roof Cover Material:"
              select_options={roofCovering}
              list={"roof_covers"}
              placeholder="Select..."
              name={"roof_cover"}
              required={false}
              disabled={false}
              initialValue={sitePayload.roof_cover_material}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  roof_cover_material: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="Roof Frame:"
              select_options={roofFrame}
              list={"roof_frames"}
              placeholder="Select..."
              name={"roof_frame"}
              required={false}
              disabled={false}
              initialValue={sitePayload.roof_frame}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  roof_frame: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Roof Age:"
              placeholder="roof age..."
              type="text"
              required={false}
              disabled={false}
              initialValue={sitePayload.roof_age}
              name={"roof_age"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  roof_age: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="Roof Geometry:"
              select_options={roofGeometry}
              list={"roof_geometrys"}
              placeholder="Select..."
              name={"roof_geometry"}
              required={false}
              disabled={false}
              initialValue={sitePayload.roof_geometry}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  roof_geometry: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="Exterior Wall Type-1:"
              select_options={exteriorWallsList}
              list={"exterior_wall_types_1"}
              placeholder="Select..."
              name={"exterior_wall_type_1"}
              required={false}
              disabled={false}
              initialValue={sitePayload.exterior_walltype_1}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  exterior_walltype_1: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="Exterior Wall Type-2:"
              select_options={exteriorWallsList}
              list={"exterior_wall_types_2"}
              placeholder="Select..."
              name={"exterior_wall_type_2"}
              required={false}
              disabled={false}
              initialValue={sitePayload.exterior_walltype_2}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  exterior_walltype_2: value,
                });
              }}
            />
          </div>
          <div className={styles.col_3}>
            <DropdownInput
              label="Exterior Wall Type-3:"
              select_options={exteriorWallsList}
              list={"exterior_wall_types_3"}
              placeholder="Select..."
              name={"exterior_wall_type_3"}
              required={false}
              disabled={false}
              initialValue={sitePayload.exterior_walltype_3}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  exterior_walltype_3: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <DropdownInput
              label="Fire Sprinklers:"
              select_options={["Yes", "No"]}
              list={"fire_sprinklers"}
              placeholder="Select..."
              name={"fire_sprinkler"}
              required={false}
              disabled={false}
              initialValue={sitePayload.fire_sprinklers}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  fire_sprinklers: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <DropdownInput
              label="Fire Alarms (Manual):"
              select_options={["Yes", "No"]}
              list={"fire_alarms_m"}
              placeholder="Select..."
              name={"fire_alarm_m"}
              required={false}
              disabled={false}
              initialValue={sitePayload.firealarms_manual}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  firealarms_manual: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <DropdownInput
              label="Fire Alarms (Automatic):"
              select_options={["Yes", "No"]}
              list={"fire_alarms_a"}
              placeholder="Select..."
              name={"fire_alarm_a"}
              required={false}
              disabled={false}
              initialValue={sitePayload.firealarms_automatic}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  firealarms_automatic: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <DropdownInput
              label="Smoke Detectors:"
              select_options={["Yes", "No"]}
              list={"smoke_detectors"}
              placeholder="Select..."
              name={"smoke_detector"}
              required={false}
              disabled={false}
              initialValue={sitePayload.smoke_detector}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  smoke_detector: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <DropdownInput
              label="Fire Extinguishers:"
              select_options={["Yes", "No"]}
              list={"fire_extinguishers"}
              placeholder="Select..."
              name={"fire_extinguisher"}
              required={false}
              disabled={false}
              initialValue={sitePayload.fire_extinguishers}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  fire_extinguishers: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <DropdownInput
              label="Emergency Exit Lights:"
              select_options={["Yes", "No"]}
              list={"emergency_exit_lights"}
              placeholder="Select..."
              name={"emergency_exit_light"}
              required={false}
              disabled={false}
              initialValue={sitePayload.emergency_exit_lights}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  emergency_exit_lights: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Additional Features:"
              placeholder="additional features..."
              type="text"
              required={false}
              disabled={false}
              initialValue={sitePayload.additional_features}
              name={"additional_features"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  additional_features: value,
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Cost New ( $ ):"
              placeholder="cost new..."
              type="number"
              required={false}
              disabled={false}
              initialValue={sitePayload.cost_new}
              name={"cost_new"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  cost_new: parseFloat(value),
                });
              }}
            />
          </div>
          <div className={styles.col_1}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Exclusions ( $ ):"
              placeholder="exclusions..."
              type="number"
              required={false}
              disabled={false}
              initialValue={sitePayload.exclusions}
              name={"exclusions"}
              checkSpell={true}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  exclusions: parseFloat(value),
                });
              }}
            />
          </div>
          <div className={styles.col_2}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Cost New Less Exclusions ( $ ):"
              placeholder={RCN_LESS_EXCLUSSIONS.toLocaleString()}
              type="number"
              required={false}
              disabled={true}
              initialValue={sitePayload.cost_new_less_exclusions}
              name={"cost_new_less_exclusions"}
              checkSpell={true}
              onChangeText={() => {}}
            />
          </div>
          <div className={styles.col_2}>
            <InputField
              height={"25px"}
              marginTop="0px"
              label="Cost per Sq.Ft ( $/sq.ft.):"
              placeholder={
                sitePayload.rcn_per_area !== undefined
                  ? sitePayload.rcn_per_area.toLocaleString()
                  : "0"
              }
              type="number"
              required={false}
              disabled={true}
              initialValue={sitePayload.rcn_per_area}
              name={"rcn_per_area"}
              checkSpell={true}
              onChangeText={() => {}}
            />
          </div>
          <div className={styles.col_1}>
            <DropdownInput
              label="BVS Type:"
              select_options={["Reconstruction", "Replacement"]}
              list={"bvs_types"}
              placeholder="Select..."
              name={"bvs_type"}
              required={false}
              disabled={false}
              initialValue={sitePayload.bvs_type}
              onChangeText={(value) => {
                setSitePayload({
                  ...sitePayload,
                  bvs_type: value,
                });
              }}
            />
          </div>
        </div>
        <div className={styles.table_wrapper}>
          {!site.site_list ? <div>NO DATA TO LOAD</div> : <SiteTable />}
        </div>
      </div>
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
    </main>
  );
};

export default GallagherSite;
