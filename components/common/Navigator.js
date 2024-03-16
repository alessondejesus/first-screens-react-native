import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "../products/ProductDetail";
import Home from "../home/Home";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
}
