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

const styles_occupancy_code = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 60,
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

  table_header_text: {
    fontSize: 6.5,
    textAlign: "left",
    fontFamily: "Calibri",
  },

  table_text: {
    fontSize: 6.5,
    textAlign: "left",
    fontFamily: "Calibri-Light",
  },

  wrapper: {
    flexDirection: "column",
    justifyContent: "flex-start",
    border: "1px solid #000",
    minHeight: 60,
  },

  column_1: {
    height: 12,
    width: "60%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 2,
    paddingHorizontal: 3,
  },

  column_2: {
    height: 12,
    width: "20%",
    flexDirection: "row",
    alignItems: "center",
    borderLeft: "1px solid #000",
    justifyContent: "space-between",
    paddingTop: 2,
    paddingHorizontal: 3,
  },

  one_column_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 12,
    paddingHorizontal: 3,
    borderBottom: "0.5px solid #000",
  },

  three_column_wrapper: {
    width: "100%",
    height: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottom: "0.5px solid #000",
  },
});

export default styles_occupancy_code;
