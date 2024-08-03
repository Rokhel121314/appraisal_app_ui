import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { RootState } from "../../redux/store";

const SiteTable = () => {
  const site = useSelector((state: RootState) => state.gallagherSite);

  return (
    <main className={styles.container}>
      <div className={styles.table_header_container}>
        <div className={styles.table_row_header}>
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
          <div className={styles.col_1}>SOV Construction Class</div>
          <div className={styles.col_1}>SOV Area</div>
          <div className={styles.col_1}>Inspection Date</div>
          <div className={styles.col_1}>Year Built</div>
          <div className={styles.col_1}>Building Use</div>
          <div className={styles.col_1}>Number of Story</div>
          <div className={styles.col_1}>Average Height</div>
          <div className={styles.col_1}>Main Area</div>
          <div className={styles.col_1}>Basement Area</div>
          <div className={styles.col_1}>Total Area</div>
          <div className={styles.col_1}>Frame Type</div>
          <div className={styles.col_1}>ISO Construction Class</div>
          <div className={styles.col_1}>Structural Floor Frame</div>
          <div className={styles.col_1}>Foundation Type</div>
          <div className={styles.col_1}>Building Service System</div>
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
          <div className={styles.col_1}>Additional Features</div>
          <div className={styles.col_1}>R Cost New</div>
          <div className={styles.col_1}>Exclusions</div>
          <div className={styles.col_1}>R Cost New Less Exclusions</div>
          <div className={styles.col_1}>{`Cost per SQ.FT.`}</div>
          <div className={styles.col_1}>BVS Type</div>
        </div>
      </div>
      <div className={styles.table_content_container}>
        {!site.site_list ? (
          <div>NO SITE</div>
        ) : (
          site.site_list.map((item) => {
            return (
              <div className={styles.table_row} key={item.site_id}>
                <div className={styles.col_2}>
                  {item.entity_site_building_number}
                </div>
                <div className={styles.col_1}>{item.site_number}</div>
                <div className={styles.col_2}>{item.site_name}</div>
                <div className={styles.col_2}>{item.site_address}</div>
                <div className={styles.col_1}>{item.city}</div>
                <div className={styles.col_1}>{item.state}</div>
                <div className={styles.col_1}>{item.zip}</div>
                <div className={styles.col_1}>{item.building_number}</div>
                <div className={styles.col_2}>{item.building_name}</div>
                <div className={styles.col_2}>{item.building_address}</div>
                <div className={styles.col_1}>{item.latitude}</div>
                <div className={styles.col_1}>{item.longitude}</div>
                <div className={styles.col_1}>
                  {`$ ${item.sov_rcn?.toLocaleString()}`}
                </div>
                <div className={styles.col_1}>
                  {item.sov_construction_class}
                </div>
                <div className={styles.col_1}>
                  {item.sov_area?.toLocaleString()}
                </div>
                <div className={styles.col_1}>{item.inspection_date}</div>
                <div className={styles.col_1}>{item.year_built}</div>
                <div className={styles.col_1}>{item.building_use}</div>
                <div className={styles.col_1}>{item.stories}</div>
                <div className={styles.col_1}>{item.average_height}</div>
                <div className={styles.col_1}>{item.area_main}</div>
                <div className={styles.col_1}>{item.area_basement}</div>
                <div className={styles.col_1}>{item.area_total}</div>
                <div className={styles.col_1}>{item.frame_type}</div>
                <div className={styles.col_1}>{item.iso_class}</div>
                <div className={styles.col_1}>
                  {item.structural_floor_frame}
                </div>
                <div className={styles.col_1}>{item.foundation_type}</div>
                <div className={styles.col_1}>
                  {item.building_service_system}
                </div>
                <div className={styles.col_1}>{item.roof_cover_material}</div>
                <div className={styles.col_1}>{item.roof_frame}</div>
                <div className={styles.col_1}>{item.roof_age}</div>
                <div className={styles.col_1}>{item.roof_geometry}</div>
                <div className={styles.col_1}>{item.exterior_walltype_1}</div>
                <div className={styles.col_1}>{item.exterior_walltype_2}</div>
                <div className={styles.col_1}>{item.exterior_walltype_3}</div>
                <div className={styles.col_1}>{item.fire_sprinklers}</div>
                <div className={styles.col_1}>{item.firealarms_manual}</div>
                <div className={styles.col_1}>{item.firealarms_automatic}</div>
                <div className={styles.col_1}>{item.smoke_detector}</div>
                <div className={styles.col_1}>{item.fire_extinguishers}</div>
                <div className={styles.col_1}>{item.emergency_exit_lights}</div>
                <div className={styles.col_1}>{item.additional_features}</div>
                <div className={styles.col_1}>{item.cost_new}</div>
                <div className={styles.col_1}>{item.exclusions}</div>
                <div className={styles.col_1}>
                  {item.cost_new_less_exclusions}
                </div>
                <div className={styles.col_1}>{item.cost_new}</div>
                <div className={styles.col_1}>{item.bvs_type}</div>
              </div>
            );
          })
        )}
      </div>
    </main>
  );
};

export default SiteTable;
