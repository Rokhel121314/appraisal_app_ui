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

const styles_roof_materials = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 120,
    height: "auto",
    backgroundColor: "white",
    flexDirection: "column",
    fontFamily: "Calibri",
    border: "1px solid #000",
  },
  header_text: {
    fontSize: 7,
    fontWeight: 600,
    textAlign: "left",
  },

  table_header_text: {
    fontSize: 6.5,
    textAlign: "left",
    fontFamily: "Calibri",
  },

  table_text: {
    fontSize: 7,
    textAlign: "left",
    fontFamily: "Calibri-Light",
  },

  header_container: {
    height: 12,
    backgroundColor: "#eabb222e",
    borderBottom: "0.5px solid #000",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 3,
    paddingTop: 2,
  },

  content_wrapper: {
    height: 108,
    flexDirection: "row",
    paddingHorizontal: 3,
    alignItems: "flex-start",
    flexWrap: "wrap",
    paddingTop: 3,
    // backgroundColor: "green",
  },

  item_wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "50%",
    marginTop: 3,
    columnGap: 1,
  },

  underlined: {
    width: 16,
    borderBottom: "0.5px solid #000",
    marginBottom: 2,
  },
});

export default styles_roof_materials;
