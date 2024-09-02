import { View, Text } from "@react-pdf/renderer";
import styles_construction_type from "./styles";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined,
  table_text,
} = styles_construction_type;

const ConstructionType = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Construction Type (%)`}</Text>
      </View>
      <View style={content_wrapper}>
        <View style={item_wrapper}>
          <View style={underlined}></View>
          <Text style={table_text}>{`Frame (M&S = D, ISO = 1)`}</Text>
        </View>
        <View style={item_wrapper}>
          <View style={underlined}></View>
          <Text
            style={table_text}
          >{`Masonry / Joist Masonry ( M&S = C, ISO =2) (Wood framed roof)`}</Text>
        </View>
        <View style={item_wrapper}>
          <View style={underlined}></View>
          <Text
            style={table_text}
          >{`Pre-Engineered Metal / Non-Combastible ( M&S = S, ISO = 3)`}</Text>
        </View>
        <View style={item_wrapper}>
          <View style={underlined}></View>
          <Text
            style={table_text}
          >{`Steel Frame / Masonry Non-Combastible ( M&S = C, ISO = 4) ( Steel fr roof)`}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined}></View>
          <Text
            style={table_text}
          >{`Protected Steel Frame / Modified Fire Resistive ( M&S = A, ISO = 5)`}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined}></View>
          <Text
            style={table_text}
          >{`Reinforced Concrete Frame / Fire Resistive ( M&S = B, ISO = 6 )`}</Text>
        </View>
      </View>
    </View>
  );
};

export default ConstructionType;
