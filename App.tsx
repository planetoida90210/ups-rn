import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

//external imports
import { CustomersScreen } from "./screens";
import RootNavigator from "./navigator/RootNavigator";

const client = new ApolloClient({
  uri: "http://localhost:5001/api/hipster-fly",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
