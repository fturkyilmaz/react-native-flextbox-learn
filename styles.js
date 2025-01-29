import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  inlineContainer: { flex: 1 },
  image: { width: 200, height: 200 },
  title: { fontWeight: "bold", fontSize: 20, color: "red" },
  bottomContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomText: { color: "black", fontSize: 30, fontWeight: "bold" },
  buttonContainer: {
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: "#2973B2",
    padding: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  toolbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0a4d0",
    padding: 8,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default styles;
