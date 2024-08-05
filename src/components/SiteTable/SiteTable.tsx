import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { RootState } from "../../redux/store";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { selectSite } from "../../redux/reducers/gallagherSiteSlice";
import { GallagherSiteType } from "../../types";
import EditInputs from "../EditInputs/EditInputs";

const SiteTable = ({
  sitePayload,
  setSitePayload,
  toggleEdit = false,
  setToggleEdit,
  toggleAddSite = false,
}: {
  sitePayload: GallagherSiteType;
  setSitePayload: React.Dispatch<React.SetStateAction<GallagherSiteType>>;
  toggleEdit: boolean;
  setToggleEdit: React.Dispatch<React.SetStateAction<boolean>>;
  toggleAddSite: boolean;
  setToggleAddSite: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const site = useSelector((state: RootState) => state.gallagherSite);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  // console.log("SITE:", site.site);

  return (
    <main className={styles.container}>
      <div className={styles.table_header_container}>
        <button className={styles.table_row_header}>
          <div className={styles.col_2}>Entity-Site-Building No.</div>
          <div className={styles.col_1}>Site No.</div>
          <div className={styles.col_2}>Site Name</div>
          <div className={styles.col_2}>Site Address</div>
          <div className={styles.col_1}>City</div>
          <div className={styles.col_1}>State</div>
          <div className={styles.col_1}>Zip</div>
          <div className={styles.col_1}>Building No.</div>
          <div className={styles.col_2}>Building Name</div>
          <div className={styles.col_2}>Building Address</div>
          <div className={styles.col_1}>Latitude</div>
          <div className={styles.col_1}>Longitude</div>
          <div className={styles.col_1}>SOV RCN</div>
          <div className={styles.col_2}>SOV Construction Class</div>
          <div className={styles.col_1}>SOV Area</div>
          <div className={styles.col_1}>Inspection Date</div>
          <div className={styles.col_1}>Year Built</div>
          <div className={styles.col_3}>Building Use</div>
          <div className={styles.col_1}>Number of Story</div>
          <div className={styles.col_1}>Average Height</div>
          <div className={styles.col_1}>Main Area</div>
          <div className={styles.col_1}>Basement Area</div>
          <div className={styles.col_1}>Total Area</div>
          <div className={styles.col_1}>Frame Type</div>
          <div className={styles.col_1}>ISO Construction Class</div>
          <div className={styles.col_1}>Structural Floor Frame</div>
          <div className={styles.col_3}>Foundation Type</div>
          <div className={styles.col_3}>Building Service System</div>
          <div className={styles.col_1}>Roof Cover Material</div>
          <div className={styles.col_1}>Roof Frame</div>
          <div className={styles.col_1}>Roof Age</div>
          <div className={styles.col_1}>Roof Geometry</div>
          <div className={styles.col_1}>Exterior Wall Type 1</div>
          <div className={styles.col_1}>Exterior Wall Type 2</div>
          <div className={styles.col_1}>Exterior Wall Type 3</div>
          <div className={styles.col_1}>Fire Sprinklers</div>
          <div className={styles.col_1}>{`Fire Alarms ( Manual )`}</div>
          <div className={styles.col_1}>{`Fire Alarms ( Automatic )`}</div>
          <div className={styles.col_1}>Smoke Detectors</div>
          <div className={styles.col_1}>Fire Extinguishers</div>
          <div className={styles.col_1}>Emergency Exit Lights</div>
          <div className={styles.col_3}>Additional Features</div>
          <div className={styles.col_1}>R Cost New</div>
          <div className={styles.col_1}>Exclusions</div>
          <div className={styles.col_2}>R Cost New Less Exclusions</div>
          <div className={styles.col_1}>{`Cost per SQ.FT.`}</div>
          <div className={styles.col_1}>BVS Type</div>
          <div className={styles.col_1}>{`RCN/SOV.`}</div>
        </button>
      </div>
      <div className={styles.table_content_container}>
        {!toggleAddSite ? null : (
          <EditInputs
            sitePayload={sitePayload}
            setSitePayload={setSitePayload}
          />
        )}
        {!site.site_list ? (
          <div>NO SITE</div>
        ) : (
          site.site_list.map((item) => {
            if (item.site_id === site.site.site_id && toggleEdit) {
              return (
                <EditInputs
                  key={item.site_id}
                  sitePayload={sitePayload}
                  setSitePayload={setSitePayload}
                />
              );
            } else {
              return (
                <button
                  className={styles.table_row}
                  key={item.site_id}
                  onClick={async () => {
                    await dispatch(selectSite(item));
                    // setSitePayload(item);
                    if (toggleEdit) {
                      setToggleEdit(false);
                    } else return;
                  }}
                >
                  {/* ENTITY-SITE-BUILDING NUMBER */}
                  <div
                    className={
                      item.entity_site_building_number
                        ? styles.col_2
                        : styles.empty_2
                    }
                  >
                    {!item.entity_site_building_number
                      ? "-"
                      : item.entity_site_building_number}
                  </div>

                  {/* SITE NUMBER */}
                  <div
                    className={item.site_number ? styles.col_1 : styles.empty_1}
                  >
                    {!item.site_number ? "-" : item.site_number}
                  </div>

                  {/* SITE NAME */}
                  <div
                    className={item.site_name ? styles.col_2 : styles.empty_2}
                  >
                    {!item.site_name ? "-" : item.site_name}
                  </div>

                  {/* SITE ADDRESS */}
                  <div
                    className={
                      item.site_address ? styles.col_2 : styles.empty_2
                    }
                  >
                    {!item.site_address ? "-" : item.site_address}
                  </div>

                  {/* CITY */}
                  <div className={item.city ? styles.col_1 : styles.empty_1}>
                    {!item.city ? "-" : item.city}
                  </div>

                  {/* STATE */}
                  <div className={item.state ? styles.col_1 : styles.empty_1}>
                    {!item.state ? "-" : item.state}
                  </div>

                  {/* ZIP */}
                  <div className={item.zip ? styles.col_1 : styles.empty_1}>
                    {!item.zip ? "-" : item.zip}
                  </div>

                  {/* BUILDING NUMBER */}
                  <div
                    className={
                      item.building_number ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.building_number ? "-" : item.building_number}
                  </div>

                  {/* BUILDING NAME */}
                  <div
                    className={
                      item.building_name ? styles.col_2 : styles.empty_2
                    }
                  >
                    {!item.building_name ? "-" : item.building_name}
                  </div>

                  {/* BUILDING ADDRESS */}
                  <div
                    className={
                      item.building_address ? styles.col_2 : styles.empty_2
                    }
                  >
                    {!item.building_address ? "-" : item.building_address}
                  </div>

                  {/* LATITUDE */}
                  <div
                    className={item.latitude ? styles.col_1 : styles.empty_1}
                  >
                    {!item.latitude ? "-" : item.latitude}
                  </div>

                  {/* LONGITUDE */}
                  <div
                    className={item.longitude ? styles.col_1 : styles.empty_1}
                  >
                    {!item.longitude ? "-" : item.longitude}
                  </div>

                  {/* SOV RCN */}
                  <div className={styles.col_1}>
                    {`$ ${item.sov_rcn?.toLocaleString()}`}
                  </div>

                  {/* SOV CONSTRUCTION CLASS */}
                  <div className={styles.col_2}>
                    {item.sov_construction_class}
                  </div>

                  {/* SOV AREA */}
                  <div className={styles.col_1}>
                    {item.sov_area?.toLocaleString()}
                  </div>

                  {/* INSPECTION DATA */}
                  <div
                    className={
                      item.inspection_date ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.inspection_date ? "-" : item.inspection_date}
                  </div>

                  {/* YEAR BUILT */}
                  <div
                    className={item.year_built ? styles.col_1 : styles.empty_1}
                  >
                    {!item.year_built ? "-" : item.year_built}
                  </div>

                  {/* BUILDING TYPE */}
                  <div
                    className={
                      item.building_use ? styles.col_3 : styles.empty_3
                    }
                  >
                    {!item.building_use ? "-" : item.building_use}
                  </div>

                  {/* STORIES */}
                  <div className={item.stories ? styles.col_1 : styles.empty_1}>
                    {!item.stories ? "-" : item.stories}
                  </div>

                  {/* AVERAGE HEIGHT */}
                  <div
                    className={
                      item.average_height ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.average_height ? "-" : item.average_height}
                  </div>

                  {/* AREA MAIN */}
                  <div
                    className={item.area_main ? styles.col_1 : styles.empty_1}
                  >
                    {!item.area_main ? "-" : item.area_main.toLocaleString()}
                  </div>

                  {/* AREA BASEMENT */}
                  <div
                    className={
                      item.area_basement ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.area_basement
                      ? "-"
                      : item.area_basement.toLocaleString()}
                  </div>

                  {/* AREA TOTAL */}
                  <div
                    className={item.area_total ? styles.col_1 : styles.empty_1}
                  >
                    {!item.area_total ? "-" : item.area_total.toLocaleString()}
                  </div>

                  {/* FRAME TYPE */}
                  <div
                    className={item.frame_type ? styles.col_1 : styles.empty_1}
                  >
                    {!item.frame_type ? "-" : item.frame_type}
                  </div>

                  {/* ISO CONSTRUCTION CLASS */}
                  <div
                    className={item.iso_class ? styles.col_1 : styles.empty_1}
                  >
                    {!item.area_main ? "-" : item.area_main}
                  </div>

                  {/* STRUCTURAL FLOOR FRAME */}
                  <div
                    className={
                      item.structural_floor_frame
                        ? styles.col_1
                        : styles.empty_1
                    }
                  >
                    {!item.structural_floor_frame
                      ? "-"
                      : item.structural_floor_frame}
                  </div>

                  {/* FOUNDATION TYPE */}
                  <div
                    className={
                      item.foundation_type ? styles.col_3 : styles.empty_3
                    }
                  >
                    {!item.foundation_type ? "-" : item.foundation_type}
                  </div>

                  {/* BUILDING SERVICE SYSTEM */}
                  <div
                    className={
                      item.building_service_system
                        ? styles.col_3
                        : styles.empty_3
                    }
                  >
                    {!item.building_service_system
                      ? "-"
                      : item.building_service_system}
                  </div>

                  {/* ROOF COVER MATERIAL */}
                  <div
                    className={
                      item.roof_cover_material ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.roof_cover_material ? "-" : item.roof_cover_material}
                  </div>

                  {/* ROOF FRAME */}
                  <div
                    className={item.roof_frame ? styles.col_1 : styles.empty_1}
                  >
                    {!item.roof_frame ? "-" : item.roof_frame}
                  </div>

                  {/* ROOF AGE */}
                  <div
                    className={item.roof_age ? styles.col_1 : styles.empty_1}
                  >
                    {!item.roof_age ? "-" : item.roof_age}
                  </div>

                  {/* ROOF GEOMETRY */}
                  <div
                    className={
                      item.roof_geometry ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.roof_geometry ? "-" : item.roof_geometry}
                  </div>

                  {/* EXTERIOR WALL TYPE 1 */}
                  <div
                    className={
                      item.exterior_walltype_1 ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.exterior_walltype_1 ? "-" : item.exterior_walltype_1}
                  </div>

                  {/* EXTERIOR WALL TYPE 2 */}
                  <div
                    className={
                      item.exterior_walltype_2 ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.exterior_walltype_2 ? "-" : item.exterior_walltype_2}
                  </div>

                  {/* EXTERIOR WALL TYPE 3 */}
                  <div
                    className={
                      item.exterior_walltype_3 ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.exterior_walltype_3 ? "-" : item.exterior_walltype_3}
                  </div>

                  {/* FIRE SPRINKLERS */}
                  <div
                    className={
                      item.fire_sprinklers ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.fire_sprinklers ? "-" : item.fire_sprinklers}
                  </div>

                  {/* FIRE ALARM MANUAL */}
                  <div
                    className={
                      item.firealarms_manual ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.firealarms_manual ? "-" : item.firealarms_manual}
                  </div>

                  {/* FIRE ALARM AUTOMATIC */}
                  <div
                    className={
                      item.firealarms_automatic ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.firealarms_automatic
                      ? "-"
                      : item.firealarms_automatic}
                  </div>

                  {/* SMOKE DETECTOR */}
                  <div
                    className={
                      item.smoke_detector ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.smoke_detector ? "-" : item.smoke_detector}
                  </div>

                  {/* FIRE EXTINGUISHERS */}
                  <div
                    className={
                      item.fire_extinguishers ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.fire_extinguishers ? "-" : item.fire_extinguishers}
                  </div>

                  {/* EMERGENCY EXIT LIGHTS */}
                  <div
                    className={
                      item.emergency_exit_lights ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.emergency_exit_lights
                      ? "-"
                      : item.emergency_exit_lights}
                  </div>

                  {/* ADDITIONAL FEATURES */}
                  <div
                    className={
                      item.additional_features ? styles.col_3 : styles.empty_3
                    }
                  >
                    {!item.additional_features ? "-" : item.additional_features}
                  </div>

                  {/* COST NEW */}
                  <div
                    className={item.cost_new ? styles.col_1 : styles.empty_1}
                  >
                    {!item.cost_new ? "-" : item.cost_new.toLocaleString()}
                  </div>

                  {/* EXCLUSIONS */}
                  <div
                    className={item.exclusions ? styles.col_1 : styles.empty_1}
                  >
                    {!item.exclusions ? "-" : item.exclusions.toLocaleString()}
                  </div>

                  {/* COST LESS EXCLUSIONS */}
                  <div
                    className={
                      item.cost_new_less_exclusions
                        ? styles.col_2
                        : styles.empty_2
                    }
                  >
                    {!item.cost_new_less_exclusions
                      ? "-"
                      : item.cost_new_less_exclusions.toLocaleString()}
                  </div>

                  {/* COST PER SQ.FT */}
                  <div
                    className={
                      item.rcn_per_area ? styles.col_1 : styles.empty_1
                    }
                  >
                    {!item.rcn_per_area
                      ? "-"
                      : item.rcn_per_area.toLocaleString()}
                  </div>

                  {/* BVS TYPE */}
                  <div className={styles.col_1}>{item.bvs_type}</div>

                  {/* COST PER SQ.FT */}
                  <div className={styles.col_1}>
                    {typeof item.sov_rcn === "number"
                      ? typeof item.cost_new === "number"
                        ? `${((item.cost_new / item.sov_rcn - 1) * 100).toFixed(
                            2
                          )}% ${
                            item.cost_new / item.sov_rcn - 1 > 0
                              ? "INC."
                              : "DEC."
                          }`
                        : "N/A"
                      : "NA"}
                  </div>
                </button>
              );
            }
          })
        )}
      </div>
    </main>
  );
};

export default SiteTable;
