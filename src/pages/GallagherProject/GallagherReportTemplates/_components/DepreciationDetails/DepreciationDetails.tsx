import { View, Text } from "@react-pdf/renderer";
import styles_depreciation_details from "./styles";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined_short,
  table_text,
  input_container,
  underlined_medium,
  item_wrapper_2,
} = styles_depreciation_details;

const DepreciationDetails = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text
          style={header_text}
        >{`Depreciation (For Actual Cash Value only):`}</Text>
      </View>

      {/* BASEMENT CONSTRUCTION TYPE */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Building Condition:  `}</Text>
        </View>
      </View>

      {/*  */}
      <View style={content_wrapper}>
        <View style={item_wrapper_2}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`Excellent`}</Text>
        </View>
        <View style={item_wrapper_2}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`Poor`}</Text>
        </View>
        <View style={item_wrapper_2}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`Good`}</Text>
        </View>
        <View style={item_wrapper_2}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`Very Poor`}</Text>
        </View>

        <View style={item_wrapper_2}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`Average`}</Text>
        </View>
      </View>

      {/* Effective Age */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Effective Age:  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`years`}</Text>
        </View>
      </View>

      {/* Effective Age */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text
            style={header_text}
          >{`Depreciation % (overrides depreciation based on Age & Condition):  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{``}</Text>
        </View>
      </View>
    </View>
  );
};

export default DepreciationDetails;
