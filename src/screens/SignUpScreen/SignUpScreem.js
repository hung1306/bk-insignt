import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Input, Button, Icon, NativeBaseProvider } from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserServices";
import ENV_VARS from "../../../env";

const apiURL = ENV_VARS.API_URL;

function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangeUsername = (value) => {
    setUsername(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };
  const handleNavigateSignIn = () => {
    navigation.navigate("Login");
  };
  const mutation = useMutationHooks((data) => UserService.signupUser(data));
  const { data, isSuccess } = mutation;

  useEffect(() => {
    if (isSuccess) {
      if (data?.status === "OK") {
        handleNavigateSignIn();
      }
    }
    console.log(mutation);
    console.log("data:", data);
  }, [isSuccess]);

  const handleSignUp = () => {
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    mutation.mutate({
      username,
      email,
      password,
    });
    console.log("isSuccess:", isSuccess);
    console.log(`${apiURL}/user/sign-up`);
  };
  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Tạo tài khoản</Text>
        <Text>Đăng ký tài khoản tại đây để sử dụng ứng dụng</Text>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="user-secret" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Username"
            value={username}
            onChangeText={handleOnchangeUsername}
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<MaterialCommunityIcons name="email" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            placeholder="Email"
            value={email}
            onChangeText={handleOnchangeEmail}
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>

      {/* Password Input Field */}
      <View style={styles.buttonStyleX}>
        <View style={styles.emailInput}>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome5 name="key" />}
                size="sm"
                m={2}
                _light={{
                  color: "black",
                }}
                _dark={{
                  color: "gray.300",
                }}
              />
            }
            variant="outline"
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={handleOnchangePassword}
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
          />
        </View>
      </View>
      {data?.status === "ERR" && (
        <Text style={{ color: "red" }}>{data?.message}</Text>
      )}
      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign} onPress={handleSignUp}>
          Đăng ký
        </Button>
      </View>

      {/* Line */}
      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>Or</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      {/* Box */}
      <View style={styles.buttonStyle}>
        <Button
          onPress={() => navigation.navigate("#")} // for navigation
          style={styles.buttonDesign1}
          shadow={3}
          _light={{
            backgroundColor: "gray.50",
          }}
          _dark={{
            backgroundColor: "gray.700",
          }}
        >
          <Icon
            as={<FontAwesome5 name="google" />}
            size="sm"
            m={2}
            _light={{
              color: "black",
            }}
            _dark={{
              color: "gray.300",
            }}
          />
        </Button>
        <Button
          onPress={() => navigation.navigate("#")} // for navigation
          style={styles.buttonDesign}
          shadow={3}
          _light={{
            backgroundColor: "gray.50",
          }}
          _dark={{
            backgroundColor: "gray.700",
          }}
        >
          <Icon
            as={<FontAwesome5 name="facebook" />}
            size="sm"
            m={2}
            _light={{
              color: "black",
            }}
            _dark={{
              color: "gray.300",
            }}
          />
        </Button>
      </View>

      <View style={styles.text2}>
        <Text>Bạn đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signupText}> Đăng nhập </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
export default () => {
  return (
    <NativeBaseProvider>
      <SignUpScreen />
    </NativeBaseProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  LoginText: {
    marginTop: 40,
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  signupText: {
    fontWeight: "bold",
  },
  emailField: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "#026efd",
  },
  buttonDesign1: {
    backgroundColor: "#026efd",
    marginBottom: 10,
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
});
