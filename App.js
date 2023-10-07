import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Checkbox } from "react-native-paper";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: "30px", fontWeight: "bold", marginTop: 55 }}>
        LOGIN
      </Text>

      <View style={{ marginTop: 50 }}>
        <View
          style={{
            backgroundColor: "#DCBC3B",
            flexDirection: "row",
            height: "60px",
            marginTop: 50,
            margin: 15,
            border: "1px solid white",
          }}
        >
          <Image
            style={{ height: "32px", width: "32px", margin: 10 }}
            source={require("./assets/avatar_user.png")}
          />
          <TextInput
            placeholder="Name"
            style={{
              height: "50px",
              width: "300px",
              backgroundColor: "#DCBC3B",
              marginTop: 3,
              fontSize: 20,
            }}
          ></TextInput>
        </View>
        <View
          style={{
            backgroundColor: "#DCBC3B",
            flexDirection: "row",
            height: "60px",
            marginTop: 50,
            margin: 15,
            border: "1px solid white",
          }}
        >
          <Image
            style={{ height: "32px", width: "32px", margin: 10 }}
            source={require("./assets/lock.png")}
          />
          <TextInput
            placeholder="Password"
            style={{
              height: "50px",
              width: "300px",
              backgroundColor: "#DCBC3B",
              marginTop: 3,
              fontSize: 20,
            }}
          ></TextInput>
          <Image
            style={{ height: "32px", width: "32px", margin: 15 }}
            source={require("./assets/eye.png")}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "black",
          height: "50px",
          marginTop: 50,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 7,
          }}
        >
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 30,
          }}
          onPress={() => navigation.navigate("Password")}
        >
          Fogot your password?
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
function PasswordScreen() {
  return (
    <View style={styles2.container}>
      <View
        style={{
          backgroundColor: "#23235B",
          height: "95%",
          width: "90%",
          margin: 20,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 28,
            color: "white",
            marginTop: "35px",
          }}
        >
          PASSWORD
          <br /> GENERATOR
        </Text>
        <TextInput
          style={{
            width: "316px",
            height: "55px",
            backgroundColor: "#151537",
            marginLeft: 18,
            marginTop: 30,
          }}
        ></TextInput>

        <View>
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
              Password length
            </Text>
            <TextInput
              style={{
                height: "33px",
                width: "118px",
                backgroundColor: "white",
              }}
            ></TextInput>
          </View>
          <View style={styles2.text1}>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
              }}
            >
              Include lower case letters
            </Text>
            <Checkbox.Item style={{ marginLeft: 20 }} status="checked" />
          </View>

          <View style={styles2.text2}>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
              }}
            >
              Include upcase letters
            </Text>
            <Checkbox.Item style={{ marginLeft: 53 }} status="unchecked" />
          </View>

          <View style={styles2.text2}>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
              }}
            >
              Include number
            </Text>
            <Checkbox.Item style={{ marginLeft: 107 }} status="checked" />
          </View>

          <View style={styles2.text2}>
            <Text
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: 20,
              }}
            >
              Include special symbol
            </Text>
            <Checkbox.Item style={{ marginLeft: 43 }} status="unchecked" />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#3B3B98",
              height: "55px",
              width: "269px",
              marginTop: 20,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 13,
              }}
            >
              GENERATE PASSWORD{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Password" component={PasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9C901",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7676B3",
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  text1: {
    marginTop: 20,
    flexDirection: "row",
    marginLeft: 20,
    // justifyContent: "space-around",
  },
  text2: {
    flexDirection: "row",
    marginLeft: 20,
    //  justifyContent: "space-around",
  },
});

export default App;
