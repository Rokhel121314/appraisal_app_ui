import { View, Text } from "@react-pdf/renderer";
import styles_sov_details from "./styles";

export interface SOVDetailProps {
  year_built: string;
  sov_area: number | undefined;
  sov_rcn: number | undefined;
  stories: number | undefined;
  fire_sprinklers: string;
}

const {
  container,
  header_text,
  wrapper,
  one_column_wrapper,
  label_text,
  field_text,
  sub_column_wrapper,
  two_column_wrapper,
} = styles_sov_details;

const SOVDetails = ({
  year_built,
  sov_area,
  sov_rcn,
  stories,
  fire_sprinklers,
}: SOVDetailProps) => {
  return (
    <View style={container}>
      <Text style={header_text}>SOV DETAILS</Text>
      {/* ONE COLUMN */}
      <View style={wrapper}>
        <View style={one_column_wrapper}>
          <Text style={label_text}>SOV Year:</Text>
          <Text style={field_text}>{`${
            !year_built ? "N/A" : year_built
          }`}</Text>
        </View>

        {/* ONE COLUMN */}
        <View style={one_column_wrapper}>
          <Text style={label_text}>SOV Gross Floor Area:</Text>
          <Text style={field_text}>
            {!sov_area ? `N/A` : `${sov_area.toLocaleString()} sq.ft.`}
          </Text>
        </View>

        {/* ONE COLUMN */}
        <View style={one_column_wrapper}>
          <Text style={label_text}>SOV $RCN:</Text>
          <Text style={field_text}>
            {!sov_rcn ? `$ 0` : `$ ${sov_rcn.toLocaleString()}`}
          </Text>
        </View>

        {/* TWO COLUMN */}
        <View style={two_column_wrapper}>
          <View style={sub_column_wrapper}>
            <Text style={label_text}>Number of Stories:</Text>
            <Text style={field_text}>{`${!stories ? "" : stories}`}</Text>
          </View>
          <View
            style={[sub_column_wrapper, { borderLeft: "0.5px solid #000" }]}
          >
            <Text style={label_text}>Fire Sprinkler:</Text>
            <Text style={field_text}>{`${
              !fire_sprinklers ? "" : fire_sprinklers
            }`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SOVDetails;
