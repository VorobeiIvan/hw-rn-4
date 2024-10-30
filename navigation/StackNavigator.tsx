import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import { StackParamList } from "./navigationType";

const Stack = createStackNavigator<StackParamList>();

const StackNavigator = () => {
  const stackNavigatorOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={stackNavigatorOptions}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registration" component={RegistrationScreen} />
      <Stack.Screen name="Home" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
