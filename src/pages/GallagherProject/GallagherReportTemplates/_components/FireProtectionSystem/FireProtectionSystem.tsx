import { View, Text } from "@react-pdf/renderer";
import styles_fire_protection_system from "./styles";

const {
  container,
  header_container,
  header_text,
  content_wrapper,
  item_wrapper,
  underlined_short,
  table_text,
} = styles_fire_protection_system;

const FireProtectionSystem = () => {
  return (
    <View style={container}>
      {/* HEADER */}
      <View style={header_container}>
        <Text style={header_text}>{`Fire Protection System (%):   `}</Text>
      </View>

      {/*  */}
      <View style={content_wrapper}>
        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`Sprinkler System (___WET/___DRY)`}</Text>
        </View>
        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`Fire Alarm ( Manual )`}</Text>
        </View>

        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text style={table_text}>{`Fire Extinguishers: ___Yes/___No`}</Text>
        </View>
        <View style={item_wrapper}>
          <View style={underlined_short}></View>
          <Text
            style={table_text}
          >{`Automatic Fire Detection   __Smoke/__Heat Det./__Stobes/__Exit Signs`}</Text>
        </View>

        <View style={[item_wrapper]}>
          <Text
            style={header_text}
          >{`Ansul or Halon Gas Fire Suppresion systems?`}</Text>
          <Text style={header_text}>{`_____Yes/ _____No`}</Text>
        </View>
      </View>
    </View>
  );
};

export default FireProtectionSystem;
