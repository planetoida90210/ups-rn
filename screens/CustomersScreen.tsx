import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useState } from "react";

const CustomersScreen = () => {
  const [input, setInput] = useState<string>("");
  return (
    <ScrollView className="bg-[#59C1CC]">
      <Image source={{ uri: "https://links.papareact.com/3jc" }} className="w-full h-64" />
      <TextInput
        placeholder="Search by Customer"
        value={input}
        onChangeText={setInput}
        className="bg-white p-4 px-10 flex items-center justify-center flex-1 text-xl rounded-xl mx-2"
      />
    </ScrollView>
  );
};

export default CustomersScreen;
