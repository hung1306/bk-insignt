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
      <Text style={styles.intro}>
        Điều gì làm cho trường Đại học Bách Khoa Thành Phố Hồ Chí Minh trở nên
        đặc biệt? Tìm hiểu ngay với ứng dụng của chúng tôi!
      </Text>
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
    backgroundColor: "#30a8e8",
  },
  containerlogo: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  logo: {
    width: 230,
    height: 230,
    resizeMode: "contain",
    marginBottom: 20,
  },
  logo1: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 20,
    // backgroundColor: "#000",
  },
  logo2: {
    width: 210,
    height: 70,
    resizeMode: "contain",
    marginBottom: 20,
    // color: '#fff'
    // backgroundColor: "#fff",
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textTransform: "uppercase",
    color: "#fff",
  },
  intro: {
    width: 400,
    fontSize: 19,
    fontWeight: "bold",
    textAlign: 'justify',
    margin: 5,
    color: "#fff",
  },
  button: {
    marginTop: 20,
    backgroundColor: "#3C637F",
    width: 200,
    height: 60,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
    borderWidth: 3, 
    borderColor: 'white',
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "center",
  },
});
