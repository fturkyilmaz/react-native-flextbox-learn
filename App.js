import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";

// flexDirection w - row m- column
// alignCOntent w- stretch m- flex-start
// flexShrink w- 1 m- 0
// unnecessary display: flex

// 1+3+3 = 7 7/1 7/3 7/3

export default function App() {
  const Square = ({ text }) => {
    return (
      <View style={styles.square}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  };

  const Card = ({ text }) => {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>React Native Learn</Text>
          <Text style={styles.description}>Follow me</Text>
        </View>
        <Image
          source={{
            uri: "https://www.okoone.com/wp-content/uploads/2024/06/React-native-2-logo.png",
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.footer}>
          <Text style={[styles.nameText, { color: "red" }]}>
            React Native Learn{" "}
            <Text style={styles.nameText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it{" "}
            </Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, gap: 20 }}>
        <View style={{ gap: 20 }}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </View>
      </ScrollView>
      {/* <View style={styles.row}>
        <Square text="1" />
        <Square text="2" />
        <Square text="3" />
        <Square text="4" />
        <Square text="5" />
      </View>
      <View style={styles.row}>
        <Square text="6" />
        <Square text="7" />
        <Square text="8" />
        <Square text="9" />
        <Square text="10" />
      </View>
      <View style={styles.row}>
        <Square text="11" />
        <Square text="22" />
        <Square text="33" />
        <Square text="44" />
        <Square text="55" />
      </View> */}

      {/* <View style={[styles.square, { alignSelf: "flex-end" }]} />
      <View style={[styles.square, { alignSelf: "flex-start" }]} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: "#7ca1b4",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  footer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  card: {
    borderRadius: 10,
    backgroundColor: "#000",
    width: Dimensions.get("screen").width * 0.8,
  },
  nameText: {
    fontWeight: "bold",
    color: "#fff",
  },
  image: {
    height: Dimensions.get("screen").height * 0.2,
  },
  description: {
    fontWeight: "bold",
    color: "#fff",
  },
  title: { fontWeight: "bold", color: "#fff" },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexWrap: "wrap",
//     backgroundColor: "#7ca1b4",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   row: { flexDirection: "row" },
//   square: {
//     alignItems: "center",
//     justifyContent: "center",
//     width: 100,
//     height: 100,
//     borderColor: "#fff",
//     borderWidth: 1,
//     backgroundColor: "#7cb48f",
//   },
//   text: {
//     color: "#fff",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });
