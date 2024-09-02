import { View, Text } from "@react-pdf/renderer";
import styles_ceiling_finish from "./styles";
import { ceilingFinishes } from "../../../../../utils/options";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined,
  table_text,
} = styles_ceiling_finish;

const CeilingFinish = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Ceiling Finish (%)`}</Text>
      </View>
      <View style={content_wrapper}>
        {ceilingFinishes.map((item) => {
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

export default CeilingFinish;
