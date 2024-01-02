import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import { Input, Button, Icon, NativeBaseProvider } from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserServices";
import ENV_VARS from "../../../env";
import { LinearGradient } from "expo-linear-gradient";

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
      {/* <View style={styles.Middle}>
        <Text style={styles.LoginText}>Tạo tài khoản</Text>
        <Text>Đăng ký tài khoản tại đây để sử dụng ứng dụng</Text>
      </View> */}
      <View style={{ marginTop: 30 }}>
        <LinearGradient
          colors={["#87CBF0", "#6D9BF5"]}
          start={[0, 0]}
          end={[1, 0]}
          style={styles.gradient}
        >
          <Pressable
            style={[styles.backIconCon]}
            onPress={() => navigation.navigate("Wellcome1")}
          >
            <Image
              source={require("../../../assets/Profile1/frame-18.png")}
              style={styles.backIcon}
            />
          </Pressable>
          <View style={styles.Middle}>
            <Text style={styles.LoginText}>Tạo tài khoản</Text>
            <Text style={{ color: "#686868" }}>
              Đăng ký tài khoản tại đây để sử dụng ứng dụng
            </Text>
          </View>
        </LinearGradient>
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
      {data && data?.status === "ERR" && (
        <Text
          style={{ color: "red", position: "absolute", top: 405, left: 15 }}
        >
          {data?.message}
        </Text>
      )}
      {/* Button signup */}
      <View style={styles.buttonWrapper}>
        <LinearGradient
          colors={["#9C3FE4", "#C65647"]}
          style={[StyleSheet.absoluteFill, styles.gradient1]}
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Đăng ký</Text>
        </TouchableOpacity>
      </View>

      {/* Line */}
      <View style={styles.lineStyle}>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>Or</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "black" }} />
      </View>

      <View style={{ marginTop: 20, flexDirection: "column", gap: 10 }}>
        <View style={styles.buttonWrapper1}>
          <TouchableOpacity
            style={styles.buttonLogin1}
            onPress={() => navigation.navigate("Login")}
          >
            <FontAwesome5
              name="google"
              size={21}
              color="red" // Đặt màu cho icon ở đây
              style={styles.iconStyle}
            />
            <Text style={styles.buttonText1}>Google</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper1}>
          <TouchableOpacity
            style={styles.buttonLogin1}
            onPress={() => navigation.navigate("Login")}
          >
            <FontAwesome5
              name="facebook"
              size={21}
              color="blue" // Đặt màu cho icon ở đây
              style={styles.iconStyle}
            />
            <Text style={styles.buttonText1}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.text2}>
        <Text style={{ fontSize: 17 }}>Bạn chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signupText}> Đăng nhập</Text>
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
    backgroundColor: "#87B7E7",
  },
  LoginText: {
    marginBottom: 7,
    fontSize: 35,
    fontWeight: "bold",
  },
  Middle: {
    paddingTop: 5,
    paddingBottom: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 35,
    backgroundColor: "#698ED7",
  },
  signupText: {
    fontWeight: "bold",
    fontSize: 17,
  },
  emailField: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  buttonStyle: {
    marginTop: 25,
    marginLeft: 15,
    marginRight: 15,
  },
  backIcon: {
    width: 35,
    height: 35,
    marginRight: 20,
  },
  backIconCon: {
    marginLeft: 20,
    marginTop: 15,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonWrapper: {
    marginTop: 40,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden", // Để đảm bảo gradient không tràn ra ngoài
  },
  buttonWrapper1: {
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden", // Để đảm bảo gradient không tràn ra ngoài
  },
  buttonLogin: {
    backgroundColor: "transparent",
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
  },
  buttonLogin1: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    borderRadius: 10,
    paddingVertical: 7,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    // paddingHorizontal: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonText1: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 19,
  },
  gradient1: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
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
    marginTop: 20,
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
