import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const WellcomeScreen1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Hình ảnh logo */}
      <Image
        source={require("../../../assets/hcmut.png")}
        style={styles.logo}
      />

      <View style={styles.containerlogo}>
        <Image
          source={require("../../../assets/Vector.png")}
          style={styles.logo1}
        />
        <Image
          source={require("../../../assets/BKInsight.png")}
          style={styles.logo2}
        />
      </View>

      {/* Nút Tiếp tục */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText}>Đăng Ký</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C0E4F8",
  },
  containerlogo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  logo1: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
    // backgroundColor: "#000",
  },
  logo2: {
    width: 150,
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3C637F",
    width: 220,
    height: 55,
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
  },
});
