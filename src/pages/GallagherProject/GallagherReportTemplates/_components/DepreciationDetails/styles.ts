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

const styles_depreciation_details = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 90,
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
    height: 40,
    flexDirection: "row",
    paddingHorizontal: 3,
    justifyContent: "flex-start",
    flexWrap: "wrap",
    // backgroundColor: "green",
  },

  item_wrapper: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 5,
    columnGap: 1,
  },

  item_wrapper_2: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 5,
    columnGap: 1,
  },

  underlined_short: {
    width: 20,
    marginBottom: 2,
    borderBottom: "0.5px solid #000",
  },

  underlined_medium: {
    width: 50,
    marginBottom: 2,
    borderBottom: "0.5px solid #000",
  },

  underlined_long: {
    width: 150,
    marginBottom: 2,
    borderBottom: "0.5px solid #000",
  },

  input_container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingHorizontal: 3,
    marginTop: 2,
  },
});

export default styles_depreciation_details;
