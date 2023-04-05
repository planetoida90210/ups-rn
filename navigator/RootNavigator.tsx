import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return <RootStack.Navigator></RootStack.Navigator>;
};

export default RootNavigator;
