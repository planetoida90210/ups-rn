import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//external imports
import { CustomersScreen } from "./screens";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <CustomersScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
}
