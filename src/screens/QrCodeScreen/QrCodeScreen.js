import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useNavigation } from '@react-navigation/native';

const QRScannerScreen = () => {
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const navigation = useNavigation();

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    setScannedData(data);
  };

  useEffect(() => {
    if (scanned) {
      navigation.navigate('ResultScreen', { scannedData });
    }
  }, [scanned, scannedData, navigation]);

  return (
    <View style={styles.container}>
      <RNCamera
        onBarCodeRead={handleBarCodeScanned}
        style={styles.camera}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  camera: {
    flex: 1,
  },
});

export default QRScannerScreen;

export const ResultScreen = () => {
    const route = useRoute();
    const scannedData = route.params?.scannedData || 'No data';
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Scanned Data:</Text>
        <Text>{scannedData}</Text>
      </View>
    );
  };
  
  