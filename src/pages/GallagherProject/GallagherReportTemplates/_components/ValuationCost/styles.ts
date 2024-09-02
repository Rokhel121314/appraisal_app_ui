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

const styles_valuation_cost = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 58,
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

  table_text: {
    fontSize: 6.5,
    textAlign: "left",
    fontFamily: "Calibri-Light",
  },

  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    border: "1px solid #000",
    minHeight: 48,
  },

  column_1: {
    height: "auto",
    width: "55%",
    borderRight: "1px solid #000",
  },

  column_2: {
    height: "auto",
    width: "45%",
  },

  one_column_wrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 12,
    paddingHorizontal: 3,
    paddingTop: 2,
    borderBottom: "0.5px solid #000",
  },

  three_column_wrapper: {
    width: "33.333%",
    height: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 2,
  },
});

export default styles_valuation_cost;
