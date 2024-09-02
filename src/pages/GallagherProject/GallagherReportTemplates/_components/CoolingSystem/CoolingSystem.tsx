import { View, Text } from "@react-pdf/renderer";
import styles_cooling_system from "./styles";
import { chilledWaterSystem } from "../../../../../utils/options";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined,
  table_text,
} = styles_cooling_system;

const CoolingSystem = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Cooling System (%)`}</Text>
      </View>
      <View style={content_wrapper}>
        {chilledWaterSystem.map((item) => {
          return (
            <View style={item_wrapper} key={item}>
              <View style={underlined}></View>
              <Text style={table_text}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default CoolingSystem;
