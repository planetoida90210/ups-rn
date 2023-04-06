import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomersScreen, OrdersScreen } from "../screens";
import { Icon } from "@rneui/themed";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};
const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#59C1CC",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Customers") {
            return <Icon name="users" type="entypo" color={focused ? "#59C1CC" : "gray"} />;
          } else if (route.name === "Orders") {
            return <Icon name="box" type="entypo" color={focused ? "#EB6A7C" : "gray"} />;
          }
        },
      })}
    >
      <Tab.Screen name="Customers" component={CustomersScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Orders" component={OrdersScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
