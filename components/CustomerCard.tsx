import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";
import { Card, Icon } from "@rneui/themed";

type Props = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);

  return (
    <TouchableOpacity>
      <Card>
        <View>
          <View>
            <View className="flex-row justify-between">
              <Text className="text-2xl font-bold">{name}</Text>
              <Text className="text-sm text-[#59C1cc]">ID: {userId}</Text>
            </View>
            <View>
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
