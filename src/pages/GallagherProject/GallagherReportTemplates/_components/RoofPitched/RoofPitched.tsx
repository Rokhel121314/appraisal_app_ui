import { View, Text } from "@react-pdf/renderer";
import styles_roof_pitched from "./styles";
import { roofPitched } from "../../../../../utils/options";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined,
  table_text,
} = styles_roof_pitched;

const RoofPitched = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Roof Pitched (%)`}</Text>
      </View>
      <View style={content_wrapper}>
        {roofPitched.map((item) => {
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

export default RoofPitched;
