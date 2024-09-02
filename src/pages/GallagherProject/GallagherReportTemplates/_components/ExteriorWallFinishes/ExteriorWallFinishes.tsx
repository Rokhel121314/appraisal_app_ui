import { View, Text } from "@react-pdf/renderer";
import styles_exterior_wall_finishes from "./styles";
import { exteriorWallsList } from "../../../../../utils/options";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined,
  table_text,
} = styles_exterior_wall_finishes;

const ExteriorWallFinishes = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Exterior Wall Finishes (%)`}</Text>
      </View>
      <View style={content_wrapper}>
        {exteriorWallsList.map((item) => {
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

export default ExteriorWallFinishes;
