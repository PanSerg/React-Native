import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from './Router';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const routing = useRoute(true);
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("./assets/fonts/Roboto-Regular.ttf"),
  });

    const onLayoutRootView = useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
      return null;
    }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: "Inter-Black", fontSize: 30 }}>
        Inter Black
      </Text>
      <NavigationContainer>{routing}</NavigationContainer>;
    </View>
  ); 
};