import { Text, View, StyleSheet } from "react-native";

export default function BoxThatFlexes() {
  return (
    <View style={{ flex: 1, height: 300, marginVertical: 10, rowGap: 5 }}>
      <View style={[styles.box, { flex: 1, backgroundColor: "red" }]}>
        <Text>Box 1</Text>
      </View>
      <View style={[styles.box, { flex: 1, backgroundColor: "white" }]}>
        <Text>Box 2</Text>
      </View>
      <View style={[styles.box, { flex: 2, backgroundColor: "yellow" }]}>
        <Text>Box 3</Text>
      </View>
      <View style={[styles.box, { flex: 2, backgroundColor: "yellow" }]}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    padding: 5,
    width: 100,
  },
});
