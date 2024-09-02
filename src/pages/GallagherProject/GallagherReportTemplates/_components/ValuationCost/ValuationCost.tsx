import { View, Text } from "@react-pdf/renderer";
import styles_valuation_cost from "./styles";

const {
  container,
  header_text,
  wrapper,
  column_1,
  one_column_wrapper,
  table_text,
  column_2,
} = styles_valuation_cost;

const ValuationCost = () => {
  return (
    <View style={container}>
      <Text style={header_text}>VALUATION COST</Text>
      {/* ONE COLUMN */}
      <View style={wrapper}>
        {/* SECTION DESCRIPTION & GROSS FLOOR AREA */}
        <View style={column_1}>
          {/* SECTION DETAIL */}

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`Replacement Cost New:`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`Exclusions:`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`RCN Less Exclusions:`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`S$RCN/sq.ft.:`}</Text>
          </View>
        </View>

        {/* STORIES/QUALITY/YEAR BUILT & PERIMETER */}
        <View style={column_2}>
          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`$`}</Text>
            <Text style={table_text}>{``}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`$`}</Text>
            <Text style={table_text}>{``}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`$`}</Text>
            <Text style={table_text}>{``}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`$`}</Text>
            <Text style={table_text}>{`/sq.ft.`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ValuationCost;
