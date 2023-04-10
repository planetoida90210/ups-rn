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
            <Text>{name}</Text>
            <Text>ID: {userId}</Text>
          </View>
          <View>
            <Text>{loading ? "loading..." : `${orders.length} x`}</Text>
            <Icon name="box" type="entypo" color="#59C1CC" size={50} />
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard;
