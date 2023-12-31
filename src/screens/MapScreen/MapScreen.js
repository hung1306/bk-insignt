//
// API: AIzaSyBt1drvhF1dGAaxoyW4pMqdxCP_x9WLrjU
//

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export const MapScreen = () => {
  const navigation = useNavigation();
  const [destination, setDestination] = useState(null);

  const handleLocationSelect = (data, details) => {
    setDestination({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
      title: details.name,
    });
  };

  return (
    <View style={styles.container}>
      {/* Map */}
      <MapView
        style={styles.map}
        region={
          destination
            ? {
                latitude: destination.latitude,
                longitude: destination.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
            : {
                latitude: 10.772093966697303, 
                longitude: 106.65790035906763,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }
        }
      >
        {/* Selected Destination Marker */}
        {destination && (
          <Marker
            coordinate={{
              latitude: destination.latitude,
              longitude: destination.longitude,
            }}
            title={destination.title}
          />
        )}
      </MapView>

      {/* Search Bar */}
      <GooglePlacesAutocomplete
        placeholder="Nhập địa điểm"
        onPress={handleLocationSelect}
        query={{
          key: "AIzaSyBt1drvhF1dGAaxoyW4pMqdxCP_x9WLrjU",
          language: 'en',
        }}
        styles={{
          container: {
            position: 'absolute',
            top: 10,
            left: 10,
            right: 10,
          },
          textInputContainer: {
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0)',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
