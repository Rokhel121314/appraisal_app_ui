import { View, Text } from "@react-pdf/renderer";
import styles_partition_wall_finished from "./styles";
import { wallFinish } from "../../../../../utils/options";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined,
  table_text,
} = styles_partition_wall_finished;

const PartitionWallFinished = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Paritition Wall Finish (%)`}</Text>
      </View>
      <View style={content_wrapper}>
        {wallFinish.map((item) => {
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

export default PartitionWallFinished;
