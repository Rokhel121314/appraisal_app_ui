import { Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
  family: "Calibri",
  src: "/fonts/calibri.ttf",
});
Font.register({
  family: "Calibri-Semibold",
  src: "/fonts/Calibre-Semibold.ttf",
});
Font.register({
  family: "Calibri-Light",
  src: "/fonts/Calibre-Light.ttf",
});

const styles_sov_details = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 70,
    height: "auto",
    backgroundColor: "white",
    flexDirection: "column",
    fontFamily: "Calibri",
  },
  header_text: {
    fontSize: 9,
    fontWeight: 600,
    textAlign: "left",
  },

  label_text: {
    fontSize: 7,
    fontWeight: "ultralight",
    textAlign: "left",
    fontFamily: "Calibri-Light",
  },

  field_text: {
    fontSize: 8,
    fontWeight: 800,
    textAlign: "left",
    fontFamily: "Calibri-Semibold",
  },

  wrapper: {
    flexDirection: "column",
    border: "1px solid #000",
    minHeight: 70,
  },

  one_column_wrapper: {
    flexDirection: "column",
    backgroundColor: "#d9d9d980",
    height: 23,
    gap: 4,
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderBottom: "0.5px solid #000",
  },
});

export default styles_sov_details;
