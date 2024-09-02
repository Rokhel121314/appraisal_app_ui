import { View, Text } from "@react-pdf/renderer";
import styles_occupancy_code from "./styles";

const {
  container,
  wrapper,
  three_column_wrapper,
  column_1,
  column_2,
  table_header_text,
  table_text,
} = styles_occupancy_code;

const OccupancyCode = () => {
  return (
    <View style={container}>
      <View style={wrapper}>
        {/* HEADER */}
        <View style={[three_column_wrapper, { backgroundColor: "#eabb222e" }]}>
          {/* Description */}
          <View style={column_1}>
            <Text
              style={table_header_text}
            >{`Occupancy Code & Description`}</Text>
          </View>

          {/* Occupancy */}
          <View style={column_2}>
            <Text style={table_header_text}>{`Occupancy %`}</Text>
          </View>

          {/* Story Height */}
          <View style={column_2}>
            <Text style={table_header_text}>{`Story Height`}</Text>
          </View>
        </View>

        {/* TABLE CELL */}
        <View style={[three_column_wrapper]}>
          {/* Description */}
          <View style={column_1}>
            <Text style={table_text}>{`Occ1:`}</Text>
            <Text style={table_text}>{``}</Text>
          </View>

          {/* Occupancy */}
          <View style={column_2}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`%`}</Text>
          </View>

          {/* Story Height */}
          <View style={column_2}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`ft.`}</Text>
          </View>
        </View>

        {/* TABLE CELL */}
        <View style={[three_column_wrapper]}>
          {/* Description */}
          <View style={column_1}>
            <Text style={table_text}>{`Occ2:`}</Text>
            <Text style={table_text}>{``}</Text>
          </View>

          {/* Occupancy */}
          <View style={column_2}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`%`}</Text>
          </View>

          {/* Story Height */}
          <View style={column_2}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`ft.`}</Text>
          </View>
        </View>

        {/* TABLE CELL */}
        <View style={[three_column_wrapper]}>
          {/* Description */}
          <View style={column_1}>
            <Text style={table_text}>{`Occ3:`}</Text>
            <Text style={table_text}>{``}</Text>
          </View>

          {/* Occupancy */}
          <View style={column_2}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`%`}</Text>
          </View>

          {/* Story Height */}
          <View style={column_2}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`ft.`}</Text>
          </View>
        </View>

        {/* TABLE CELL */}
        <View style={[three_column_wrapper]}>
          {/* Description */}
          <View style={column_1}>
            <Text style={table_text}>{`Occ4:`}</Text>
            <Text style={table_text}>{``}</Text>
          </View>

          {/* Occupancy */}
          <View style={column_2}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`%`}</Text>
          </View>

          {/* Story Height */}
          <View style={column_2}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`ft.`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OccupancyCode;
