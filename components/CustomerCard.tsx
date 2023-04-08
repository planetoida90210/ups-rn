import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useCustomerOrders from "../hooks/useCustomerOrders";

type Props = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrders(userId);
  return (
    <TouchableOpacity>
      <Text>CustomerCard</Text>
    </TouchableOpacity>
  );
};

export default CustomerCard;
