import BasementDetails from "../_components/BasementDetails/BasementDetails";
import BuildingDetails from "../_components/BuildingDetails/BuildingDetails";
import ConstructionType from "../_components/ConstructionType/ConstructionType";
import EntitySiteDetail, {
  EntitySiteDetailProps,
} from "../_components/EntitySiteDetails/EntitySiteDetail";
import ExteriorWallFinishes from "../_components/ExteriorWallFinishes/ExteriorWallFinishes";
import GeolocationDetails from "../_components/GeolocationDetails/GeolocationDetails";
import OccupancyCode from "../_components/OccupancyCode/OccupancyCode";
import SectionDetails from "../_components/SectionDetails/SectionDetails";
import SOVDetails from "../_components/SOVDetails/SOVDetails";
import ValuationCost from "../_components/ValuationCost/ValuationCost";
import styles from "./styles";
import { Page, Text, View } from "@react-pdf/renderer";

interface BVSFieldFormProps extends EntitySiteDetailProps {
  entity_name: string;
  building_name: string;
  building_address: string;
  year_built: string;
  sov_area: number | undefined;
  sov_rcn: number | undefined;
}

const BVSFieldForm1 = ({
  entity_site_building_number,
  effective_date,
  inspection_date,
  appraiser,
  site_name,
  site_address,
  city,
  state,
  zip,
  entity_name,
  building_name,
  building_address,
  year_built,
  sov_area,
  sov_rcn,
}: BVSFieldFormProps) => {
  return (
    <Page
      size={"A4"}
      orientation="portrait"
      dpi={72}
      wrap={false}
      style={styles.page}
    >
      <View style={styles.section}>
        {/* HEADER */}
        <View style={styles.header_container}>
          <Text
            style={styles.header_text}
          >{`BVS FIELD FORM ( ${entity_site_building_number.toUpperCase()} 1/2 )`}</Text>
          <Text
            style={styles.header_text_small}
          >{`Entity Name: ${entity_name.toUpperCase()} `}</Text>
        </View>

        {/* CONTENT */}
        <View style={styles.content_container}>
          {/* COLUMN 1 */}
          <View style={styles.column_1}>
            <EntitySiteDetail
              entity_site_building_number={entity_site_building_number}
              effective_date={effective_date}
              inspection_date={inspection_date}
              appraiser={appraiser}
              site_name={site_name}
              site_address={site_address}
              city={city}
              state={state}
              zip={zip}
            />
            <BuildingDetails
              building_name={building_name}
              building_address={building_address}
              city={city}
              state={state}
              zip={zip}
            />
            <SOVDetails
              year_built={year_built}
              sov_area={sov_area}
              sov_rcn={sov_rcn}
            />

            <SectionDetails />
            <GeolocationDetails />
            <ValuationCost />
          </View>

          {/* COLUMN 2 */}
          <View style={styles.column_2}>
            <OccupancyCode />
            <ConstructionType />
            <BasementDetails />
            <ExteriorWallFinishes />
          </View>
        </View>
      </View>
    </Page>
  );
};

export default BVSFieldForm1;
