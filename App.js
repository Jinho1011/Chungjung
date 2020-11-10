import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import React, { useState } from "react";
import * as Font from "expo-font";
import { Text, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const cacheImages = (images) =>
  images.map((image) => {
    if (typeof image == "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });

const cacheFonts = (fonts) =>
  fonts.map((font) => {
    Font.loadAsync(font);
  });

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadAssets = async () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1604917407752-a87962abca72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ]);

    const fonts = cacheFonts([Ionicons.font]);

    return await Promise.all([...images, ...fonts]);
  };

  const onFinish = () => setIsReady(true);

  return isReady ? (
    <View>
      <Text>HI</Text>
    </View>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={onFinish}
      onError={console.error}
    ></AppLoading>
  );
}
