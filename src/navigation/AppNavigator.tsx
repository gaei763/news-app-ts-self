import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { HomeScreen } from "../screens/HomeScreen";
import { ClipScreen } from "../screens/ClipScreen";
import ArticleScreen from "../screens/ArticleScreen";
import { RouteNames, RootStackParamList } from "../types/Navigation";

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RouteNames.Home}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={RouteNames.Article} component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={RouteNames.Clip} component={ClipScreen} />
      <Stack.Screen name={RouteNames.Article} component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const screenOption = (route: any): BottomTabNavigationOptions => ({
  tabBarIcon: ({ color, size }: { color: string; size: number }) => {
    let iconName: string = "home";
    switch (route.name) {
      case RouteNames.Home:
        iconName = "home";
        break;
      case RouteNames.Clip:
        iconName = "bookmark";
        break;
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name={RouteNames.Home} component={HomeStack} />
        <Tab.Screen name={RouteNames.Clip} component={ClipStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
