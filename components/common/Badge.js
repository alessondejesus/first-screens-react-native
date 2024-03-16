import { Pressable, Text } from "react-native";

export default function Cacti({ backgroundColor = "#F4F4F4", color = "#505050" }) {
    return (
      <Pressable
        onPress={() => alert("apertou")}
        style={{
          backgroundColor: backgroundColor,
          marginRight: 12,
          borderRadius: 10,
          height: 33,
          alignSelf: "flex-start",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 12,
          paddingVertical: 9,
        }}
      >
        <Text style={{ color: color }}>Cacti</Text>
      </Pressable>
    );
  }