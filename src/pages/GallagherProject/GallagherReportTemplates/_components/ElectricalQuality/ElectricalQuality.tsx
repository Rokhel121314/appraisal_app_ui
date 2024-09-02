import { View, Text } from "@react-pdf/renderer";
import styles_electrical_quality from "./styles";
import { electricalQuality } from "../../../../../utils/options";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined,
  table_text,
} = styles_electrical_quality;

const ElectricalQuality = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Electrical Quality (%)`}</Text>
      </View>
      <View style={content_wrapper}>
        {electricalQuality.map((item) => {
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

export default ElectricalQuality;
