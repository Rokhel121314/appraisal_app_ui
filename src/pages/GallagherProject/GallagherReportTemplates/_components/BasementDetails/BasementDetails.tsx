import { View, Text } from "@react-pdf/renderer";
import styles_basement_details from "./styles";

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
  underlined_long,
} = styles_basement_details;

const BasementDetails = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Basement`}</Text>
      </View>
      {/* BASEMENT TYPE */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Basement Type:  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`None`}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`Finished`}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`Unfinished`}</Text>
        </View>
      </View>

      {/* BASEMENT SQUARE FOOT AREA */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Basement Square Foot Area:  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`sq.ft.`}</Text>
        </View>
      </View>

      {/* BASEMENT OCCUPANCY CODE */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Basement Occupancy Code:  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_long}></View>
          <Text style={table_text}>{``}</Text>
        </View>
      </View>

      {/* BASEMENT CONSTRUCTION TYPE */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Basement Construction Type:  `}</Text>
        </View>
      </View>

      {/*  */}
      <View style={content_wrapper}>
        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`A - Frame`}</Text>
        </View>
        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`B - Masonry / Joisted Masonry`}</Text>
        </View>
        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text
            style={table_text}
          >{`C - Pre-Engineered Metal / Non Combustible`}</Text>
        </View>
        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text
            style={table_text}
          >{`D - Steel Frame / Masonry Non-Combustible`}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text
            style={table_text}
          >{`E - Protected Steel Frame / Modified Fire Resistive`}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text
            style={table_text}
          >{`F - Reinforced Concrete Frame / Fire Resistive`}</Text>
        </View>
      </View>

      {/* BASEMENT DEPTH */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Basement Depth:  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`ft.`}</Text>
        </View>
      </View>

      {/* OTHER SUBSTRUCTURE TYPES (SQ.FT) */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text
            style={header_text}
          >{`Other Substructure Types (sq.ft.):  `}</Text>
        </View>
      </View>

      {/* CRAWLSPACE */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Crawlspace:  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`sq.ft.`}</Text>
        </View>
      </View>

      {/* Stilts, Concrete/Steel */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Stilts, Concrete/Steel:  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`sq.ft.`}</Text>
        </View>
      </View>

      {/* Stilts, Wood: */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`Stilts, Wood:  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`sq.ft.`}</Text>
        </View>
      </View>

      {/* None ( Remove slab ) */}
      <View style={input_container}>
        <View style={item_wrapper}>
          <Text style={header_text}>{`None ( Remove slab ):  `}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_medium}></View>
          <Text style={table_text}>{`sq.ft.`}</Text>
        </View>
      </View>
    </View>
  );
};

export default BasementDetails;
