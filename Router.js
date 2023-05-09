import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//---Screens
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import CreatePostsScreen from "./Screens/CreatePostsScreen/CreatePostsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
    if (!isAuth) {
        return (
          <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
              options={{ headerShown: false }}
              name="LoginScreen"
              component={LoginScreen}
              onSumbit
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="RegistrationScreen"
              component={RegistrationScreen}
            />
          </Stack.Navigator>
        );
  };
  return (
    <Tab.Navigator initialRouteName="PostScreen">
      <Tab.Screen
        options={{
          headerRight: () => {
            return <LogOutBtn onPress />;
          },
          headerTitle: "Публикации",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <Octicons name="three-bars" size={size} color={color} />;
          },
        }}
        name="PostsScreen"
        component={PostsScreen}
      />
      <Tab.Screen
        options={{
          headerTitle: "Создать публикацию",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <FontAwesome name="plus-square-o" size={size} color={color} />
            );
          },
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
      />
      <Tab.Screen
        options={{
          headerTitle: "Профиль",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size, color }) => {
            return <Ionicons name="person" size={24} color="black" />;
          },
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}