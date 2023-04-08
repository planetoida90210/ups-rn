import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../graphql/queries";
import CustomerCard from "../components/CustomerCard";

const CustomersScreen = () => {
  const [input, setInput] = useState<string>("");
  const { loading, error, data } = useQuery(GET_CUSTOMERS);

  return (
    <ScrollView className="bg-[#59C1CC]">
      <Image source={{ uri: "https://links.papareact.com/3jc" }} className="w-full h-64" />
      <TextInput
        placeholder="Search by Customer"
        value={input.toLowerCase()}
        onChangeText={setInput}
        className="bg-white p-4 px-10 flex items-center justify-center flex-1 text-xl rounded-xl mx-2"
      />

      {data?.getCustomers.map(({ name: ID, value: { email, name } }: CustomerResponse) => (
        <CustomerCard key={ID} email={email} name={name} userId={ID} />
      ))}
    </ScrollView>
  );
};

export default CustomersScreen;
