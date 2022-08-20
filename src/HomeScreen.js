import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  //   TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  // TextInput,
} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View
          style={{
            flex: 20,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: "grey" }}>
              <Text style={{ fontSize: 15 }}> KAYWEST ATTENDANCE APP X</Text>
            </View>
            <Button
              onPress={() => navigation.navigate("StaffCamera")}
              title="Go to Camera"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    paddingHorizontal: 10,
    height: 40,
    margin: 12,
    // borderWidth: 1,
    width: 300,
    marginHorizontal: 60,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});
