import Additions from "../_components/Additions/Additions";
import CeilingFinish from "../_components/CeilingFinish/CeilingFinish";
import CoolingSystem from "../_components/CoolingSystem/CoolingSystem";
import DepreciationDetails from "../_components/DepreciationDetails/DepreciationDetails";
import ElectricalQuality from "../_components/ElectricalQuality/ElectricalQuality";
import Elevators from "../_components/Elevators/Elevators";
import FireProtectionSystem from "../_components/FireProtectionSystem/FireProtectionSystem";
import FloorFinish from "../_components/FloorFinish/FloorFinish";
import HeatingSystem from "../_components/HeatingSystem/HeatingSystem";
import PartitionWallFinished from "../_components/PartitionWallFinished/PartitionWallFinished";
import PartitionWallStructure from "../_components/PartitionWallStructure/PartitionWallStructure";
import Plumbing from "../_components/Plumbing/Plumbing";
import ResidentialHomes from "../_components/ResidentialHomes/ResidentialHomes";
import RoofMaterials from "../_components/RoofMaterials/RoofMaterials";
import RoofPitched from "../_components/RoofPitched/RoofPitched";
import styles from "./styles";
import { Page, Text, View } from "@react-pdf/renderer";

export interface BVSFieldForm2PropTypes {
  entity_site_building_number: string;
  entity_name: string;
}

const BVSFieldForm2 = ({
  entity_site_building_number,
  entity_name,
}: BVSFieldForm2PropTypes) => {
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
          >{`BVS FIELD FORM ( ${entity_site_building_number.toUpperCase()} 2/2 )`}</Text>
          <Text
            style={styles.header_text_small}
          >{`Entity Name: ${entity_name.toUpperCase()} `}</Text>
        </View>

        {/* CONTENT */}
        <View style={styles.content_container}>
          {/* COLUMN 1 */}
          <View style={styles.column_3}>
            <RoofMaterials />
            <RoofPitched />
            <PartitionWallStructure />
            <PartitionWallFinished />
            <FloorFinish />
            <CeilingFinish />
            <HeatingSystem />
          </View>

          {/* COLUMN 2 */}
          <View style={styles.column_4}>
            <CoolingSystem />
            <FireProtectionSystem />
            <Plumbing />
            <ElectricalQuality />
            <Elevators />
            <DepreciationDetails />
            <Additions />
            <ResidentialHomes />
          </View>
        </View>
      </View>
    </Page>
  );
};

export default BVSFieldForm2;
