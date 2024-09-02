import { View, Text } from "@react-pdf/renderer";
import styles from "./styles";

const GeolocationDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.one_column_wrapper}>
          <Text style={styles.table_text}>{`Site Latitude: N`}</Text>
        </View>
        <View style={styles.one_column_wrapper}>
          <Text style={styles.table_text}>{`Site Longitude: W`}</Text>
        </View>
      </View>
    </View>
  );
};

export default GeolocationDetails;
