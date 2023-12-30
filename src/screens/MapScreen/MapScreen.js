

import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MapView, { Marker } from 'react-native-maps';

export const MapScreen = () => {
  const navigation = useNavigation();

  // Sample location for the Marker
  const daihocBachKhoaCoordinates = { latitude: 10.77326184023574, longitude: 106.65976274375608 };
  const handleMarkerPress = () => {
    navigation.navigate('Details'); 
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Button */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </Pressable>
        <Text style={styles.headerText}>Map Screen</Text>
      </View>

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
  <Marker coordinate={daihocBachKhoaCoordinates} title="Tòa A5" onPress={handleMarkerPress} />
</MapView>
    </View>
    
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#3498db', // Example color
  },
  backButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },

});

