import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function ({title, callback}) {
  return (
    <View
      style={{
        paddingHorizontal: 30,
        paddingVertical: 15,
        flexDirection: "row",
        gap: 20,
      }}
    >
      <TouchableOpacity onPress={callback}>
        <Ionicons
          name="arrow-back"
          color="#242424"
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
        }}
      >
        {title}
      </Text>
    </View>
  );
}
