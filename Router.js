import React from "react";

import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
    if (!isAuth) {
        return (
          <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreen}
              onSumbit
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Registration"
              component={Registration}
            />
          </Stack.Navigator>
        );
    }
}