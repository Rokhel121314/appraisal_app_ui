import { View, Text } from "@react-pdf/renderer";
import styles_section_details from "./styles";

const {
  container,
  header_text,
  wrapper,
  column_1,
  column_2,
  one_column_wrapper,
  table_header_text,
  table_text,
  three_column_wrapper,
} = styles_section_details;

const SectionDetails = () => {
  return (
    <View style={container}>
      <Text style={header_text}>SECTION DETAILS</Text>
      {/* ONE COLUMN */}
      <View style={wrapper}>
        {/* SECTION DESCRIPTION & GROSS FLOOR AREA */}
        <View style={column_1}>
          {/* SECTION DETAIL */}
          <View style={[one_column_wrapper, { backgroundColor: "#eabb222e" }]}>
            <Text style={table_header_text}>{`Section Description(s):`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`Section 1:`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`Section 2:`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`Section 3:`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`Section 4:`}</Text>
          </View>

          {/* GROSS FLOOR AREA */}
          <View style={[one_column_wrapper, { backgroundColor: "#eabb222e" }]}>
            <Text style={table_header_text}>{`Gross Floor Area:`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`Section 1:`}</Text>
            <Text style={table_text}>{`sq.ft.`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`Section 2:`}</Text>
            <Text style={table_text}>{`sq.ft.`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`Section 3:`}</Text>
            <Text style={table_text}>{`sq.ft.`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{`Section 4:`}</Text>
            <Text style={table_text}>{`sq.ft.`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_header_text}>{`Total Area:`}</Text>
            <Text style={table_header_text}>{`sq.ft.`}</Text>
          </View>
        </View>

        {/* STORIES/QUALITY/YEAR BUILT & PERIMETER */}
        <View style={column_2}>
          <View
            style={[
              one_column_wrapper,
              { backgroundColor: "#eabb222e", paddingTop: 0 },
            ]}
          >
            <View
              style={[
                three_column_wrapper,
                { borderRight: "0.5px solid #000" },
              ]}
            >
              <Text style={table_header_text}>{`No. Stories`}</Text>
            </View>

            <View
              style={[
                three_column_wrapper,
                { borderRight: "0.5px solid #000" },
              ]}
            >
              <Text style={table_header_text}>{`Quality`}</Text>
            </View>

            <View style={three_column_wrapper}>
              <Text style={table_header_text}>{`Year Built`}</Text>
            </View>
          </View>

          {/* BLANK 3 ROWS */}
          <View style={[one_column_wrapper, { paddingTop: 0 }]}>
            <View
              style={[
                three_column_wrapper,
                { borderRight: "0.5px solid #000" },
              ]}
            >
              <Text style={table_header_text}>{``}</Text>
            </View>

            <View
              style={[
                three_column_wrapper,
                { borderRight: "0.5px solid #000" },
              ]}
            >
              <Text style={table_header_text}>{``}</Text>
            </View>

            <View style={three_column_wrapper}>
              <Text style={table_header_text}>{``}</Text>
            </View>
          </View>
          {/*  */}

          {/* BLANK 3 ROWS */}
          <View style={[one_column_wrapper, { paddingTop: 0 }]}>
            <View
              style={[
                three_column_wrapper,
                { borderRight: "0.5px solid #000" },
              ]}
            >
              <Text style={table_header_text}>{``}</Text>
            </View>

            <View
              style={[
                three_column_wrapper,
                { borderRight: "0.5px solid #000" },
              ]}
            >
              <Text style={table_header_text}>{``}</Text>
            </View>

            <View style={three_column_wrapper}>
              <Text style={table_header_text}>{``}</Text>
            </View>
          </View>
          {/*  */}

          {/* BLANK 3 ROWS */}
          <View style={[one_column_wrapper, { paddingTop: 0 }]}>
            <View
              style={[
                three_column_wrapper,
                { borderRight: "0.5px solid #000" },
              ]}
            >
              <Text style={table_header_text}>{``}</Text>
            </View>

            <View
              style={[
                three_column_wrapper,
                { borderRight: "0.5px solid #000" },
              ]}
            >
              <Text style={table_header_text}>{``}</Text>
            </View>

            <View style={three_column_wrapper}>
              <Text style={table_header_text}>{``}</Text>
            </View>
          </View>
          {/*  */}

          {/* BLANK 3 ROWS */}
          <View style={[one_column_wrapper, { paddingTop: 0 }]}>
            <View
              style={[
                three_column_wrapper,
                { borderRight: "0.5px solid #000" },
              ]}
            >
              <Text style={table_header_text}>{``}</Text>
            </View>

            <View
              style={[
                three_column_wrapper,
                { borderRight: "0.5px solid #000" },
              ]}
            >
              <Text style={table_header_text}>{``}</Text>
            </View>

            <View style={three_column_wrapper}>
              <Text style={table_header_text}>{``}</Text>
            </View>
          </View>
          {/*  */}

          <View style={[one_column_wrapper, { backgroundColor: "#eabb222e" }]}>
            <Text style={table_header_text}>{`Perimeter:`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`linear.ft.`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`linear.ft.`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`linear.ft.`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`linear.ft.`}</Text>
          </View>

          <View style={[one_column_wrapper]}>
            <Text style={table_text}>{``}</Text>
            <Text style={table_text}>{`linear.ft.`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SectionDetails;
