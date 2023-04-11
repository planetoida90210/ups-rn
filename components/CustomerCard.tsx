import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { Card, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { CustomerScreenNavigationProp } from "../screens/CustomersScreen";

type Props = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("MyModal", {
          name: name,
          userId: userId,
        })
      }
    >
      <Card>
        <View>
          <View className="flex-row items-center justify-between ">
            <View className="flex-row justify-between">
              <Text className="text-2xl font-bold">{name}</Text>
              <Text className="text-sm text-[#59C1cc]">ID: {userId}</Text>
            </View>
            <View className="flex items-center justify-end">
              <Text>{loading ? "loading..." : `${orders.length} x`}</Text>
              <Icon name="box" type="entypo" color="#59C1CC" size={50} />
            </View>
          </View>
        </View>
        <Card.Divider />
        <Text>{email}</Text>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
