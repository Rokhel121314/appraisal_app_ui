import { View, Text } from "@react-pdf/renderer";
import styles_floor_finish from "./styles";
import { floorFinishes } from "../../../../../utils/options";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined,
  table_text,
} = styles_floor_finish;

const FloorFinish = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Floor Finish (%)`}</Text>
      </View>
      <View style={content_wrapper}>
        {floorFinishes.map((item) => {
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

export default FloorFinish;
