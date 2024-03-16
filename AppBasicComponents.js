import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Pressable,
  Modal,
  Button,
  ActivityIndicator,
  Alert,
  Dimensions,
  Platform,
  FlatList,
} from "react-native";

import flatList from "./data";

const Item = ({ title }) => (
  <View>
    <Text
      style={{
        backgroundColor: "#f9c2ff",
        padding: 20,
      }}
    >
      {title}
    </Text>
  </View>
);

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

import Greet from "./components/Greet";
import BoxThatScrolls from "./components/BoxThatScrolls";
import BoxThatFlexes from "./components/BoxThatFlexes";

const iconUri = require("./assets/adaptive-icon.png");

export default function App() {
  console.log({ screen_width: windowWidth, screen_height: windowHeight });
  console.log(Platform.OS);
  // [state, changes state]
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#0e7490", alignItems: "center" }}
    >
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 24 }}>
            It is my title
          </Text>
          <Image
            source={iconUri}
            style={{ width: 200, height: 200, marginTop: 20 }}
          ></Image>

          <Greet name="Alesson"></Greet>
          <Pressable
            title="Open modal"
            onPress={() => setIsModalVisible(true)}
            style={{
              color: "#fff",
              elevation: 3,
              backgroundColor: "#059669",
              paddingHorizontal: 20,
              borderRadius: 7,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#fff", padding: 10 }}>Open modal</Text>
          </Pressable>
          <Pressable
            title="Open modal"
            onPress={() =>
              Alert.alert("Its my alert", "the body :D", [
                {
                  text: "Hi",
                  onPress: () => console.log("hello"),
                },
                {
                  text: "Close",
                },
              ])
            }
            style={{
              color: "#fff",
              elevation: 3,
              backgroundColor: "#059669",
              paddingHorizontal: 20,
              borderRadius: 7,
              marginTop: 10,
            }}
          >
            <Text style={{ color: "#fff", padding: 10 }}>Alert</Text>
          </Pressable>

          <BoxThatFlexes></BoxThatFlexes>
          <ScrollView horizontal={true}>
          <BoxThatScrolls></BoxThatScrolls>
          </ScrollView>
          <View style={{ height: 300, width: 200 }}>
            <FlatList
              data={flatList}
              renderItem={({ item }) => {
                console.log(item.id)
                return (
                  <Item title={item.title} />
                )
              }}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={<View style={{ height: 15 }}/>}
              ListEmptyComponent={<View>
                <Text>
                  The list is empty
                </Text>
              </View>}
              ListHeaderComponent={
              <Text>
                FlatList header
              </Text>}
              ListFooterComponent={
                <Text>
                  FlatList footer
                </Text>
              }
            />
          </View>
          <Text style={{ marginTop: 20 }}>{text}</Text>
          <Modal
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
            animationType="slide"
            presentationStyle="pageSheet"
          >
            <View style={{ flex: 1, padding: 60 }}>
              <Text>Modal content</Text>
              <ActivityIndicator></ActivityIndicator>
              <Button
                title="close modal"
                onPress={() => setIsModalVisible(false)}
              ></Button>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const text = `What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
printing and typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s, when an unknown
printer took a galley of type and scrambled it to make a type
specimen book. It has survived not only five centuries, but also the
leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets
containing Lorem Ipsum passages, and more recently with desktop
publishing software like Aldus PageMaker including versions of Lorem
Ipsum. Why do we use it? It is a long established fact that a reader
will be distracted by the readable content of a page when looking at
its layout. The point of using Lorem Ipsum is that it has a
more-or-less normal distribution of letters, as opposed to using
'Content here, content here', making it look like readable English.
Many desktop publishing packages and web page editors now use Lorem
Ipsum as their default model text, and a search for 'lorem ipsum'
will uncover many web sites still in their infancy. Various versions
have evolved over the years, sometimes by accident, sometimes on
purpose (injected humour and the like). Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text.
It has roots in a piece of classical Latin literature from 45 BC,
making it over 2000 years old. Richard McClintock, a Latin professor
at Hampden-Sydney College in Virginia, looked up one of the more
obscure Latin words, consectetur, from a Lorem Ipsum passage, and
going through the cites of the word in classical literature,
discovered the undoubtable source. Lorem Ipsum comes from sections
1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
of Good and Evil) by Cicero, written in 45 BC. This book is a
treatise on the theory of ethics, very popular during the
Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
amet..", comes from a line in section 1.10.32. The standard chunk of
Lorem Ipsum used since the 1500s is reproduced below for those
interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
Malorum" by Cicero are also reproduced in their exact original form,
accompanied by English versions from the 1914 translation by H.
Rackham. Where can I get some? There are many variations of passages
of Lorem Ipsum available, but the majority have suffered alteration
in some form, by injected humour, or randomised words which don't
look even slightly believable. If you are going to use a passage of
Lorem Ipsum, you need to be sure there isn't anything embarrassing
hidden in the middle of text. All the Lorem Ipsum generators on the
Internet tend to repeat predefined chunks as necessary, making this
the first true generator on the Internet. It uses a dictionary of
over 200 Latin words, combined with a handful of model sentence
structures, to generate Lorem Ipsum which looks reasonable. The
generated Lorem Ipsum is therefore always free from repetition,
injected humour, or non-characteristic words etc.`;
