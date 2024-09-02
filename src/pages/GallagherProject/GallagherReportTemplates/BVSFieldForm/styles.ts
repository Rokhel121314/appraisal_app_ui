import { Font, StyleSheet } from "@react-pdf/renderer";

Font.register({
  family: "Calibri",
  src: "/fonts/calibri.ttf",
});
Font.register({
  family: "Calibri-Semibold",
  src: "/fonts/Calibre-Semibold.ttf",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    flex: 1,
  },

  section: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 24,
    width: 595,
    height: 842,
    position: "relative",
  },

  header_container: {
    flexDirection: "column",
    alignItems: "center",
  },

  header_text: {
    fontSize: 10,
    fontWeight: 800,
    marginBottom: 6,
  },

  header_text_small: {
    fontSize: 7,
    fontWeight: 600,
  },

  content_container: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    marginTop: 18,
    gap: 25,
  },

  column_1: {
    flexDirection: "column",
    justifyContent: "flex-start",
    // backgroundColor: "blue",
    height: "100%",
    width: 240,
    rowGap: 9,
  },
  column_2: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    width: 280,
    rowGap: 9,
  },

  column_3: {
    flexDirection: "column",
    justifyContent: "flex-start",
    // backgroundColor: "blue",
    height: "100%",
    width: 280,
    rowGap: 4,
  },
  column_4: {
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
    width: 240,
    rowGap: 4,
  },
});

export default styles;
