import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Input, Button, Icon, NativeBaseProvider } from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import jwt_decode from "jwt-decode";
// import { useDispatch } from "react-redux";
// import { updateUser } from "../../redux/slices/UserSlices";

function LoginScreen() {
  const navigation = useNavigation();
  const [rememberPassword, setRememberPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const { data, isSuccess } = mutation;

  useEffect(() => {
    if (isSuccess) {
      if (data?.status === "OK") {
        console.log("isSuccess 1:", isSuccess);
        AsyncStorage.setItem(
          "access_token",
          JSON.stringify(data?.access_token)
        );
        AsyncStorage.setItem(
          "refresh_token",
          JSON.stringify(data?.refresh_token)
        );
        // if (data?.access_token) {
        //   const decoded = jwt_decode(data?.access_token);
        //   console.log("decode", decoded);
        //   if (decoded?.id) {
        //     handleGetDetailsUser(decoded?.id, data?.access_token);
        //   }
        // }
        navigation.navigate("Home");
      }
    }
  }, [isSuccess]);

  // const handleGetDetailsUser = async (id, token) => {
  //   const storage = localStorage.getItem("refresh_token");
  //   const refreshToken = JSON.parse(storage);
  //   const res = await UserService.getDetailsUser(id, token);
  //   console.log("res", res);
  //   dispatch(updateUser({ ...res?.data, access_token: token, refreshToken }));
  // };

  const toggleRememberPassword = () => {
    setRememberPassword(!rememberPassword);
  };

  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnchangePassword = (value) => {
    setPassword(value);
  };

  const handleSignIn = () => {
    console.log("loginlogin");
    mutation.mutate({
      email,
      password,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.Middle}>
        <Text style={styles.LoginText}>Đăng nhập</Text>
        <Text>Đăng nhập tài khoản tại đây để sử dụng ứng dụng</Text>
      </View>

      {/* Username or Email Input Field */}
      <View style={styles.buttonStyle}>
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

      <View style={styles.rememberForgot}>
        <TouchableOpacity
          onPress={toggleRememberPassword}
          style={styles.checkbox}
        >
          <FontAwesome5
            name={rememberPassword ? "check-square" : "square"}
            size={20}
            color={rememberPassword ? "blue" : "gray"}
          />
          <Text style={styles.rememberText}>Nhớ mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            /* Xử lý quên mật khẩu */
          }}
        >
          <Text style={styles.forgotText}>Quên mật khẩu?</Text>
        </TouchableOpacity>
      </View>
      {data?.status === "ERR" && (
        <Text style={{ color: "red" }}>{data?.message}</Text>
      )}
      {/* Button */}
      <View style={styles.buttonStyle}>
        <Button style={styles.buttonDesign} onPress={handleSignIn}>
          Đăng nhập
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
        <Text>Bạn chưa có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupText}> Đăng ký</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
export default () => {
  return (
    <NativeBaseProvider>
      <LoginScreen />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  LoginText: {
    marginTop: 20,
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
  rememberForgot: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    paddingHorizontal: 15,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    color: "black",
    marginLeft: 8,
  },
  forgotText: {
    color: "red", // Màu cho văn bản quên mật khẩu
  },
});
