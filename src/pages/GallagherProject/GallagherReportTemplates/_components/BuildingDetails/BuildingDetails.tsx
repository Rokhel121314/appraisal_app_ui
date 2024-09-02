import styles_building_details from "./styles";
import { View, Text } from "@react-pdf/renderer";

export interface BuildingDetailProps {
  building_name: string;
  building_address: string;
  city: string;
  state: string;
  zip: string;
}

const {
  container,
  header_text,
  wrapper,
  field_text,
  one_column_wrapper,
  label_text,
  comment_row,
  yellow_row,
  sub_column_wrapper,
  two_column_wrapper,
} = styles_building_details;

const BuildingDetails = ({
  building_name,
  building_address,
  city,
  state,
  zip,
}: BuildingDetailProps) => {
  return (
    <View style={container}>
      <Text style={header_text}>BUILDING DETAILS</Text>

      <View style={wrapper}>
        {/* ONE COLUMN */}
        <View style={one_column_wrapper}>
          <Text style={label_text}>Building Name:</Text>
          <Text style={field_text}>{`${
            !building_name ? "" : building_name.toUpperCase()
          }`}</Text>
        </View>

        {/* ONE COLUMN */}
        <View style={one_column_wrapper}>
          <Text style={label_text}>Street Address:</Text>
          <Text style={field_text}>{`${
            !building_address ? "" : building_address.toUpperCase()
          }`}</Text>
        </View>

        {/* ONE COLUMN */}
        <View style={one_column_wrapper}>
          <Text style={label_text}>City:</Text>
          <Text style={field_text}>{`${!city ? "" : city.toUpperCase()}`}</Text>
        </View>

        {/* TWO COLUMN */}
        <View style={two_column_wrapper}>
          <View style={sub_column_wrapper}>
            <Text style={label_text}>State:</Text>
            <Text style={field_text}>{`${
              !state ? "" : state.toUpperCase()
            }`}</Text>
          </View>
          <View
            style={[sub_column_wrapper, { borderLeft: "0.5px solid #000" }]}
          >
            <Text style={label_text}>ZIP:</Text>
            <Text style={field_text}>{`${!zip ? "" : zip}`}</Text>
          </View>
        </View>

        {/* ONE COLUMN WITH YELLOW BG */}
        <View style={[yellow_row]}>
          <Text
            style={[label_text, { paddingTop: 2 }]}
          >{`Separate Insurance Exclusion Costs? - BVS No, Write Up Yes`}</Text>
        </View>

        {/* COMMENT */}
        <View style={[comment_row]}>
          <Text style={label_text}>{`Comment:`}</Text>
        </View>

        {/*  */}
      </View>
    </View>
  );
};

export default BuildingDetails;
