import { View, Text } from "@react-pdf/renderer";
import styles_residential_homes from "./styles";

const {
  container,
  header_container,
  header_text,
  item_wrapper,
  table_text,
  input_container,
  underlined_medium,
} = styles_residential_homes;

const ResidentialHomes = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Residential Homes`}</Text>
      </View>

      {/* Number of Kitchens */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Number of Kitchens:  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`pcs.`}</Text>
        </View>
      </View>

      {/* Number of Bathrooms */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Number of Bathrooms:  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`Full,`}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`Half,`}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`3/4`}</Text>
        </View>
      </View>
    </View>
  );
};

export default ResidentialHomes;
