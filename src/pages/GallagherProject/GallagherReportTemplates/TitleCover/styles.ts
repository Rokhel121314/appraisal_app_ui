import { StyleSheet } from "@react-pdf/renderer";

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

    width: 595,
    height: 842,
    position: "relative",
  },

  headerText: {
    fontSize: 16,
    fontWeight: 800,
    textDecoration: "underline",
  },
});

export default styles;
