import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomersScreen, OrdersScreen } from "../screens";
import { useNavigation } from "@react-navigation/native";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};
const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Customers" component={CustomersScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Orders" component={OrdersScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
