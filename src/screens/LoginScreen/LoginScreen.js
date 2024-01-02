import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { Input, Button, Icon, NativeBaseProvider } from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useMutationHooks } from "../../hooks/useMutationHook";
import * as UserService from "../../services/UserServices";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from "expo-linear-gradient";
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
    console.log("data login:", data);
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
            <Text style={styles.LoginText}>Đăng nhập</Text>
            <Text style={{ color: "#686868" }}>
              Đăng nhập tài khoản tại đây để sử dụng ứng dụng
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
            backgroundColor={"white"}
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
      {data && data?.status === "ERR" && (
        <Text
          style={{ color: "red", position: "absolute", top: 390, left: 15 }}
        >
          {data?.message}
        </Text>
      )}
      {/* Button */}
      <View style={styles.buttonWrapper}>
        <LinearGradient
          colors={["#9C3FE4", "#C65647"]}
          style={[StyleSheet.absoluteFill, styles.gradient1]}
        />
        <TouchableOpacity style={styles.buttonLogin} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
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
    backgroundColor: "#87B7E7",
  },
  LoginText: {
    // marginTop: 10,
    marginBottom: 7,
    fontSize: 35,
    fontWeight: "bold",
  },
  Middle: {
    paddingTop: 10,
    paddingBottom: 30,
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
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
  },
  backIcon: {
    width: 40,
    height: 40,
    marginRight: 20,
  },
  backIconCon: {
    marginLeft: 20,
    marginTop: 20,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonWrapper: {
    marginTop: 45,
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
    marginTop: 25,
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
    marginTop: 10,
    paddingHorizontal: 18,
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    color: "black",
    marginLeft: 8,
    fontWeight: "bold",
  },
  forgotText: {
    color: "red", // Màu cho văn bản quên mật khẩu
    fontWeight: "medium",
  },
});
