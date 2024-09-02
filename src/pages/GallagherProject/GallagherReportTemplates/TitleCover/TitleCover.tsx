import styles from "./styles";
import { Page, View } from "@react-pdf/renderer";

const TitleCover = () => {
  return (
    <Page
      size={"A4"}
      orientation="portrait"
      dpi={72}
      wrap={false}
      style={styles.page}
    >
      <View style={styles.section}></View>
    </Page>
  );
};

export default TitleCover;
