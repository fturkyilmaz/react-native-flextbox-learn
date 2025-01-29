import React from "react";
import { View, Text } from "react-native";

const Greetings = (props) => {
  return (
    <View>
      <Text>Hello, {props.name}!</Text>
    </View>
  );
};
export default Greetings;
