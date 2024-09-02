import { View, Text } from "@react-pdf/renderer";
import styles_heating_system from "./styles";
import { boilerAndPiping } from "../../../../../utils/options";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined,
  table_text,
} = styles_heating_system;

const HeatingSystem = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Heating System (%)`}</Text>
      </View>
      <View style={content_wrapper}>
        {boilerAndPiping.map((item) => {
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

export default HeatingSystem;
