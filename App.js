import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log(require("./assets/icon.png"));
    // console.log("text press");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={10} onPress={handlePress}>
        Hello World!! Contrary to popular belief, Lorem Ipsum is not simply
        random text. It has roots in a piece of classical Latin literature from
        45 BC, making it over 2000 years old. Richard McClintock, a Latin
        professor at Hampden-Sydney College in Virginia, looked up one of the
        more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
        going through the cites of the word in classical literature, discovered
        the undoubtable source.
      </Text>
      {/* <Image source={require("./assets/icon.png")} /> */}
      <TouchableOpacity
        onPress={() => {
          console.log("Image Tapped");
        }}
      >
        <Image
          // blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
        <Button
          title="Click me"
          onPress={() => {
            alert("Button clicked");
          }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fda7cb",
    alignItems: "center",
    justifyContent: "center",
  },
});
