import { View, Text, StyleSheet } from "react-native";

export default function Greet({ name }) {
  return (
    <View style={[styles.view, styles.common]}>
      <Text style={[styles.text, styles.common]}>Hello, {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  common: {
    padding: 6,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  view: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
        width: 6,
        height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 1
  },
});
