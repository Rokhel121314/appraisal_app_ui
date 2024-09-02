import { dateFormater } from "../../../../../hooks/dateformater";
import styles_entity_site_details from "./styles";
import { View, Text } from "@react-pdf/renderer";

export interface EntitySiteDetailProps {
  entity_site_building_number: string;
  effective_date: string;
  inspection_date: string;
  appraiser: string;
  site_name: string;
  site_address: string;
  city: string;
  state: string;
  zip: string;
}

const {
  container,
  wrapper,
  header_text,
  one_column_wrapper,
  label_text,
  field_text,
  two_column_wrapper,
  sub_column_wrapper,
} = styles_entity_site_details;

const EntitySiteDetail = ({
  entity_site_building_number,
  effective_date,
  inspection_date,
  appraiser,
  site_name,
  site_address,
  city,
  state,
  zip,
}: EntitySiteDetailProps) => {
  return (
    <View style={container}>
      <Text style={header_text}>ENTITY-SITE DETAILS</Text>

      <View style={wrapper}>
        {/* ONE COLUMN */}
        <View style={one_column_wrapper}>
          <Text style={label_text}>Entity-Site-Building #:</Text>
          <Text style={field_text}>{`${
            !entity_site_building_number
              ? ""
              : entity_site_building_number.toUpperCase()
          }`}</Text>
        </View>

        {/* TWO COLUMN */}
        <View style={two_column_wrapper}>
          <View style={sub_column_wrapper}>
            <Text style={label_text}>Effective Date:</Text>
            <Text style={field_text}>{`${
              !effective_date ? "" : dateFormater(effective_date)
            }`}</Text>
          </View>
          <View
            style={[sub_column_wrapper, { borderLeft: "0.5px solid #000" }]}
          >
            <Text style={label_text}>Inspection Date:</Text>
            <Text style={field_text}>{`${
              !inspection_date ? "" : dateFormater(inspection_date)
            }`}</Text>
          </View>
        </View>

        {/* TWO COLUMN */}
        <View style={two_column_wrapper}>
          <View style={sub_column_wrapper}>
            <Text style={label_text}>Inspected by:</Text>
            <Text style={field_text}>{`${!appraiser ? "" : appraiser}`}</Text>
          </View>
          <View
            style={[sub_column_wrapper, { borderLeft: "0.5px solid #000" }]}
          >
            <Text style={label_text}>Pricing Program to Use:</Text>
            <Text style={field_text}>{`BVS-RCT-Minor ( M&S )`}</Text>
          </View>
        </View>

        {/* ONE COLUMN */}
        <View style={one_column_wrapper}>
          <Text style={label_text}>Site Name:</Text>
          <Text style={field_text}>{`${
            !site_name ? "" : site_name.toUpperCase()
          }`}</Text>
        </View>

        {/* ONE COLUMN */}
        <View style={one_column_wrapper}>
          <Text style={label_text}>Street Address:</Text>
          <Text style={field_text}>{`${
            !site_address ? "" : site_address.toUpperCase()
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

        {/* TWO COLUMN */}
        <View style={[two_column_wrapper, { backgroundColor: "#eabb222e" }]}>
          <View style={sub_column_wrapper}>
            <Text style={label_text}>System Version:</Text>
            <Text style={field_text}>{`Insurance`}</Text>
          </View>
          <View
            style={[sub_column_wrapper, { borderLeft: "0.5px solid #000" }]}
          >
            <Text style={label_text}>Value Basis:</Text>
            <Text style={field_text}>{`New Construction`}</Text>
          </View>
        </View>

        {/* ONE COLUMN */}
        <View style={[one_column_wrapper, { backgroundColor: "#eabb222e" }]}>
          <Text style={label_text}>Construction Terms:</Text>
          <Text style={field_text}>{`MS/B`}</Text>
        </View>
        {/*  */}
      </View>
    </View>
  );
};

export default EntitySiteDetail;
