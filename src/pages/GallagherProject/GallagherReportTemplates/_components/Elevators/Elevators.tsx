import { View, Text } from "@react-pdf/renderer";
import styles_electrical_quality from "./styles";
import { elevators } from "../../../../../utils/options";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined,
  table_text,
} = styles_electrical_quality;

const Elevators = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Elevators:`}</Text>
      </View>
      <View style={content_wrapper}>
        {elevators.map((item) => {
          return (
            <View style={item_wrapper} key={item}>
              <Text style={table_text}>{`${item}: `}</Text>
              <View style={underlined}></View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Elevators;
