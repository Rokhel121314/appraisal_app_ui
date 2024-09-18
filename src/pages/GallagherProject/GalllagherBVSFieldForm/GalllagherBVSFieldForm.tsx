import { useSelector } from "react-redux";
import styles from "./styles.module.css";
import { RootState } from "../../../redux/store";
import { Document, PDFViewer } from "@react-pdf/renderer";
import BVSFieldForm1 from "../GallagherReportTemplates/BVSFieldForm/BVSFieldForm1";
import BVSFieldForm2 from "../GallagherReportTemplates/BVSFieldForm/BVSFieldForm2";
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

const GalllagherBVSFieldForm = () => {
  const site = useSelector((state: RootState) => state.gallagherSite);
  const entity = useSelector((state: RootState) => state.gallagherEntity);
  const user = useSelector((state: RootState) => state.user);

  const [isloading, setIsloading] = useState(true);

  console.log("isloading", isloading);

  console.log("ENTITY:", entity.entity);
  console.log("SITE:", site.filtered_site_list);
  console.log("USER:", user.user);
  return (
    <main className={styles.main_container}>
      {isloading && (
        <div style={{ color: "#fff" }}>
          Rendering BVS Field Form... Please be patient...
        </div>
      )}
      <PDFViewer width={"99%"} height={"99%"} showToolbar={true}>
        <Document
          pageMode="useNone"
          pageLayout="singlePage"
          title="BVS Field Form"
          author={entity.entity.appraiser}
          subject={entity.entity.entity_name}
          onRender={() => setIsloading(false)}
        >
          {site.filtered_site_list.map((sites) => {
            return (
              <Fragment key={sites.site_id}>
                <BVSFieldForm1
                  key={sites.site_id}
                  entity_site_building_number={`${entity.entity.entity_number}-${sites.site_number}-${sites.building_number}`}
                  effective_date={entity.entity.effective_date}
                  inspection_date={sites.inspection_date}
                  appraiser={entity.entity.appraiser}
                  site_name={sites.site_name}
                  site_address={sites.site_address}
                  city={sites.city}
                  state={sites.state}
                  zip={sites.zip}
                  entity_name={entity.entity.entity_name}
                  building_name={sites.building_name}
                  building_address={sites.building_address}
                  year_built={sites.year_built}
                  sov_area={sites.sov_area}
                  sov_rcn={sites.sov_rcn}
                  bvs_type={sites.bvs_type}
                  stories={sites.stories}
                  fire_sprinklers={sites.fire_sprinklers}
                />
                <BVSFieldForm2
                  key={sites.site_id}
                  entity_site_building_number={`${entity.entity.entity_number}-${sites.site_number}-${sites.building_number}`}
                  entity_name={entity.entity.entity_name}
                />
              </Fragment>
            );
          })}
        </Document>
      </PDFViewer>
    </main>
  );
};

export default GalllagherBVSFieldForm;
