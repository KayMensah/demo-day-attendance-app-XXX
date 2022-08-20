import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  // TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/HomeScreen";
import StaffCamera from "./src/StaffCamera";
// import RegisterScreen from "./src/RegisterScreen";
// import SignIn from "./src/SignIn";

// import SelectDropdown from "react-native-select-dropdown";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Signin" component={SignIn} /> */}
        <Stack.Screen name="StaffCamera" component={StaffCamera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
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
