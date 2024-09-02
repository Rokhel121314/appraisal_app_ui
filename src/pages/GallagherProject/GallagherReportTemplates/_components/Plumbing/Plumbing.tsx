import { View, Text } from "@react-pdf/renderer";
import styles_plumbing from "./styles";

const {
  container,
  header_container,
  header_text,
  item_wrapper,
  table_text,
  input_container,
  underlined_medium,
} = styles_plumbing;

const Plumbing = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Plumbing:   `}</Text>
      </View>

      {/* Number of Kitchens */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Number of Fixtures:  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`pcs.`}</Text>
        </View>
      </View>

      {/*  */}
    </View>
  );
};

export default Plumbing;
