import { StyleSheet, Font } from "@react-pdf/renderer";

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

const styles_entity_site_details = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 210,
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
    minHeight: 200,
  },

  one_column_wrapper: {
    flexDirection: "column",
    height: 23,
    gap: 4,
    paddingHorizontal: 3,
    paddingVertical: 2,
    borderBottom: "0.5px solid #000",
  },

  two_column_wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 23,
    borderBottom: "0.5px solid #000",
  },

  sub_column_wrapper: {
    flexDirection: "column",
    height: "100%",
    width: "50%",
    paddingHorizontal: 3,
    paddingVertical: 2,
    gap: 4,
  },
});

export default styles_entity_site_details;
