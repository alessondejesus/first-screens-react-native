import { Text, View, StyleSheet } from "react-native";

export default function BoxThatScrolls() {
  return (
    <View style={{ flex: 1, marginVertical: 10, flexDirection: 'row'}}>
      <View style={[styles.box, { backgroundColor: "red" }]}>
        <Text>Box 1</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "white" }]}>
        <Text>Box 2</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "yellow" }]}>
        <Text>Box 3</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "pink" }]}>
        <Text>Box 4</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "purple" }]}>
        <Text>Box 5</Text>
      </View>
      <View style={[styles.box, { backgroundColor: "orange" }]}>
        <Text>Box 5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    padding: 5,
    height: 50,
    width: 100,
  },
});
