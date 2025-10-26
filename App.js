import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function App() {
  return (
    <View>
      {/*Exercise 1*/}
      <Text style={{ fontSize: 24 }}>RP Values</Text>
      <Text style={{ color: "green" }}>Excellence</Text>
      <Text style={{ backgroundColor: "yellow" }}>Customer-Centric</Text>
      <Text style={{ fontStyle: "italic" }}>Integrity</Text>
      <Text style={{ textAlign: "center" }}>Teamwork</Text>
      <Text style={{ color: "white", backgroundColor: "black" }}>
        Enterprising
      </Text>
      <StatusBar barStyle="default" />
    </View>
  );
}
