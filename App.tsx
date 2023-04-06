import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

//external imports
import { CustomersScreen } from "./screens";
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
