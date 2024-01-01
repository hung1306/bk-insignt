import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
// import * as Permissions from "expo-permissions";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Camera } from "expo-camera";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

const QrCodeScreen = () => {
  const navigation = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      // const { status } = await Permissions.askAsync(Permissions.CAMERA);
      // const { status } = await Camera.requestMicrophonePermissionsAsync()()(); // Use requestPermissionsAsync from expo-camera
      setHasPermission(status === "granted");
    })();
    setScanned(false);
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    // You can handle the scanned data as needed, for example, navigate to a new screen.
    navigation.navigate("Details");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#87cbf0" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.backNavigation}
      >
        <View style={styles.backIcon}>
          <Icon
            name="angle-left"
            size={30}
            color="#4E0189"
            style={styles.icon}
          />
        </View>
        <Text style={styles.backText}>QR Code</Text>
      </TouchableOpacity>
      <View style={styles.scannerContainer}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        { scanned && (
          <TouchableOpacity
            style={styles.scanAgainButton}
            onPress={() => setScanned(false)}
          >
            <Text style={styles.scanAgainButtonText}>Quét</Text>
          </TouchableOpacity>
        )}
      </View>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  backNavigation: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginTop: 10,
  },
  backIcon: {
    margin: 8,
    height: 30,
    width: 30,
    backgroundColor: "#EBD8FF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {},
  backText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  scannerContainer: {
    flex: 1,
    position: "relative",
    display: "flex",
    flexDirection: "column-reverse",
    justifyContent: "space-between",
    marginBottom: 250,
  },
  scanAgainButton: {
    width: 200,
    backgroundColor: "#4E0189",
    padding: 10,
    borderRadius: 15,
    alignSelf: "center",
    marginTop: 50, 
  },
  scanAgainButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
export default QrCodeScreen;
