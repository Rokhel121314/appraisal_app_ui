import { View, Text } from "@react-pdf/renderer";
import styles_partition_wall_structure from "./styles";
import { wallStructure } from "../../../../../utils/options";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined,
  table_text,
} = styles_partition_wall_structure;

const PartitionWallStructure = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Paritition Wall Structure (%)`}</Text>
      </View>
      <View style={content_wrapper}>
        {wallStructure.map((item) => {
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

export default PartitionWallStructure;
