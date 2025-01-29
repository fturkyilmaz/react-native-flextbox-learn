import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./styles";
import Greetings from "./src/components/Greetings";
import Counter from "./src/components/Counter";
import React, { useState } from "react";

export default function App() {
  const [fullname, setFullname] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.inlineContainer}>
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator />
          <ActivityIndicator size="large" />
          <ActivityIndicator size="small" color="#0000ff" />
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
        <StatusBar style="dark" />
        <View style={styles.toolbarContainer}>
          <Image
            source={require("./assets/icon.png")}
            style={{ width: 40, height: 40 }}
          />

          <Greetings name={fullname} />
        </View>
        <View
          style={{
            marginVertical: 10,
            paddingHorizontal: 20,
          }}
        >
          <TextInput
            style={{ padding: 10, borderWidth: 1, borderRadius: 10 }}
            onChangeText={(text) => setFullname(text)}
            placeholder="Ad Soyad"
            value={fullname}
            autoCapitalize="characters"
          />
        </View>

        <View>
          <Counter />
        </View>
        <Image
          source={{
            uri: "https://cdn.shopaccino.com/igmguru/articles/What-Is-React-Native.png?v=491",
          }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Selamlar Furkan Türkyılmaz</Text>
        {/* <Image
          source={require("./assets/icon.png")}
          style={styles.image}
          resizeMode="contain"
        /> */}

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>İlk yazım</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.9}>
          <Text style={styles.buttonText}>Düzenle</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={styles.bottomText}>Native Button</Text>
        </View>
        <Button title="Kaydet" onPress={() => alert("Kaydedildi")} />
      </ScrollView>
    </SafeAreaView>
  );
}
