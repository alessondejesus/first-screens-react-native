import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Cacti from "../common/Badge";

export default function Home({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: Dimensions.get("screen").width,
      }}
    >
      <ScrollView>
        <View style={{ paddingHorizontal: 30 }}>
          <Text style={{ fontSize: 28, fontWeight: "500" }}>
            Plant{"\n"}
            is for room
          </Text>
        </View>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{
              paddingTop: 28,
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
        </View>
        <View style={{ paddingLeft: 30, marginTop: 24 }}>
          <Text style={{ fontSize: 12, color: "#808080" }}>
            Popularity
            <Ionicons name="arrow-down" color="#808080" />
          </Text>
          <Flower callback={() => navigation.navigate("ProductDetail", {
            item: {
              title: 'Prickly Pear',
              price: '20'
            }
          })} />
          <Flower callback={() => navigation.navigate("ProductDetail", {
            item: {
              title: 'Prickly Pear',
              price: '20'
            }
          })} />
          <Flower callback={() => navigation.navigate("ProductDetail", {
            item: {
              title: 'Prickly Pear',
              price: '20'
            }
          })} />
        </View>
        <FreeShipping />
      </ScrollView>
    </SafeAreaView>
  );
}

function Flower({ callback }) {
  return (
    <TouchableOpacity style={{ flexDirection: "row" }} onPress={callback}>
      <View
        style={{
          backgroundColor: "#F2F7FF",
          position: "relative",
          borderRadius: 10,
          marginTop: 24,
          height: 72,
          width: 113,
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
          }}
        >
          <Image
            style={{
              height: 88,
              width: 97,
            }}
            source={require("../../assets/flower.png")}
          />
        </View>
        <View
          style={{
            backgroundColor: "green",
            position: "absolute",
            backgroundColor: "#fff",
            borderRadius: 10,
            height: 24,
            width: 24,
            bottom: 8,
            right: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="heart-outline" color="#808080" />
        </View>
      </View>
      <View style={{ marginTop: 30, marginLeft: 24, gap: 6 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Echeveria</Text>
          <Text
            style={{
              color: "#FFBB56",
              fontWeight: "bold",
              fontSize: 12,
              marginLeft: 10,
            }}
          >
            <Ionicons
              name="star"
              style={{ fontWeight: "bold", fontSize: 12 }}
            />
            5,2
          </Text>
        </View>
        <Text style={{ fontSize: 12, color: "#505050" }}>From 3 Inch</Text>
        <Text>25 $</Text>
      </View>
    </TouchableOpacity>
  );
}

function FreeShipping() {
  return (
    <View
      style={{
        marginTop: 40,
        width: Dimensions.get("screen").width,
        paddingHorizontal: 30,
      }}
    >
      <View
        style={{
          backgroundColor: "#E2E9FF",
          height: 92,
          borderRadius: 12,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            height: 92,
          }}
        ></View>
        <View style={{ flex: 3, paddingVertical: 30, paddingLeft: 30, gap: 8 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
            }}
          >
            Free shipping
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 12,
                color: "#808080",
              }}
            >
              When ordering
            </Text>
            <View
              style={{
                backgroundColor: "#FFBB56",
                borderRadius: 4,
                paddingHorizontal: 10,
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 12,
                }}
              >
                from 40$
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ position: "relative" }}>
            <Image
              style={{
                position: "absolute",
                top: -28,
                height: 120,
                width: 120,
              }}
              source={require("../../assets/free-shipping.png")}
            />
          </View>
        </View>
      </View>
      <View style={{ paddingTop: 30 }}>
        <Flower />
      </View>
    </View>
  );
}
