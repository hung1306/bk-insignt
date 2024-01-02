import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export const WellcomeScreen = () => {
  const navigation = useNavigation();
  const handleContinue = () => {
    navigation.navigate("Wellcome1");
  };

  return (
    <View style={styles.container}>
      {/* Hình ảnh logo */}
      <View>
        <Image
          source={require("../../../assets/hcmut.png")}
          style={styles.logo}
        />
      </View>
      {/* Tên ứng dụng */}
      <View>
        <Text style={styles.appName}>Chào mừng đến với</Text>
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
      </View>
      {/* Nút Tiếp tục */}
      <View>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
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
    color: '#fff'
    // backgroundColor: "#fff",
  },
  appName: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    textTransform: 'uppercase',
    color: "#fff",
  },
  button: {
    backgroundColor: "#3C637F",
    width: 220,
    height: 55,
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 25,
    // fontWeight: "bold",
    textAlign: "center",
    // alignItems: 'center'
  },
});
