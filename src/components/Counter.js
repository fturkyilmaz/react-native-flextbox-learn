import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import styles from "../../styles";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Sayı: {count}</Text>
      <Pressable
        onPress={() => {
          increaseCount((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{pressed ? "Pressed!" : "Press Me"}</Text>
        )}
      </Pressable>
    </View>
  );
};

export default Counter;
