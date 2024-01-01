import React from "react";
import { StyleSheet, View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MapView, { Marker } from "react-native-maps";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import Icon from "react-native-vector-icons/FontAwesome";

export const MapScreen = () => {
  const navigation = useNavigation();

  // Sample location for the Marker
  const daihocBachKhoaCoordinates = {
    latitude: 10.77326184023574,
    longitude: 106.65976274375608,
  };
  const handleMarkerPress = () => {
    navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
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
        <Text style={styles.backText}>Bản đồ</Text>
      </TouchableOpacity>

      {/* Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: daihocBachKhoaCoordinates.latitude,
          longitude: daihocBachKhoaCoordinates.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // 10.77326184023574, 106.65976274375608
      >
        {/* Đánh dấu Đại học Bách Khoa trên bản đồ */}
        <Marker
          coordinate={daihocBachKhoaCoordinates}
          title="Tòa A5"
          onPress={handleMarkerPress}
        />
      </MapView>
      <BottomNavigation />
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#3498db", // Example color
  },
  backButton: {
    color: "white",
    fontWeight: "bold",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  map: {
    flex: 1,
  },
  // back navigation
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
});
