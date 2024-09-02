import { View, Text } from "@react-pdf/renderer";
import styles_sov_details from "./styles";

export interface SOVDetailProps {
  year_built: string;
  sov_area: number | undefined;
  sov_rcn: number | undefined;
}

const {
  container,
  header_text,
  wrapper,
  one_column_wrapper,
  label_text,
  field_text,
} = styles_sov_details;

const SOVDetails = ({ year_built, sov_area, sov_rcn }: SOVDetailProps) => {
  return (
    <View style={container}>
      <Text style={header_text}>SOV DETAILS</Text>
      {/* ONE COLUMN */}
      <View style={wrapper}>
        <View style={one_column_wrapper}>
          <Text style={label_text}>SOV Year:</Text>
          <Text style={field_text}>{`${!year_built ? "" : year_built}`}</Text>
        </View>

        {/* ONE COLUMN */}
        <View style={one_column_wrapper}>
          <Text style={label_text}>SOV Gross Floor Area:</Text>
          <Text style={field_text}>
            {!sov_area ? `0 sq.ft.` : `${!sov_area.toLocaleString()} sq.ft.`}
          </Text>
        </View>

        {/* ONE COLUMN */}
        <View style={one_column_wrapper}>
          <Text style={label_text}>SOV $RCN:</Text>
          <Text style={field_text}>
            {!sov_rcn ? `$ 0` : `$ ${sov_rcn.toLocaleString()}`}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SOVDetails;
