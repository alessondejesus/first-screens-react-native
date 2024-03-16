import {
  SafeAreaView,
  Dimensions,
  View,
  Image,
  ScrollView,
  Text,
} from "react-native";
import Header from "../common/Header";
import Ionicons from "react-native-vector-icons/Ionicons";
import Cacti from "../common/Badge";

export default function ProductDetail({ route, navigation }) {
  const { item } = route.params;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: Dimensions.get("screen").width,
      }}
    >
      <Header callback={() => navigation.goBack()} />
      <ScrollView>
        <View>
          <Image
            style={{
              height: 375,
              width: Dimensions.get("screen").width,
            }}
            source={require("../../assets/image-detail.png")}
          />
        </View>
        <View style={{ paddingHorizontal: 30, marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignContent: "space-between",
              justifyContent: "space-between",
              width: Dimensions.get("screen").width - 60,
            }}
          >
            <Text style={{ fontSize: 28, fontWeight: "600" }}>
              {item.title}
            </Text>
            <Text style={{ fontSize: 28, fontWeight: "400" }}>
              {item.price} $
            </Text>
          </View>
          <Text
            style={{
              color: "#FFBB56",
              fontWeight: "bold",
              fontSize: 12,
            }}
          >
            <Ionicons
              name="star"
              style={{ fontWeight: "bold", fontSize: 12 }}
            />
            5,2
          </Text>
          <Text style={{ marginTop: 25 }}>Select size</Text>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{
            paddingTop: 20,
            paddingLeft: 30,
          }}
        >
          <Cacti />
          <Cacti backgroundColor="#D3B398" color="#fff" />
          <Cacti />
          <Cacti />
          <Cacti />
          <Cacti />
          <Cacti />
          <Cacti />
          <Cacti />
          <Cacti />
          <Cacti />
          <Cacti />
          <Cacti />
          <Cacti />
        </ScrollView>
        <View style={{ paddingHorizontal: 30, marginTop: 25 }}>
          <Text>Description</Text>
          <Text style={{ marginTop: 15, fontSize: 13, color: '#808080' }}>
            Prickly pear is a drought-resistant and hardy cactus that blooms
            with yellow-golden flowers in summer.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
