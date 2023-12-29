import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Camera } from 'expo-camera';

const QrCodeScreen = () => {
    const navigation = useNavigation();

        const [hasPermission, setHasPermission] = useState(null);
        const [scanned, setScanned] = useState(false);
      
        useEffect(() => {
          (async () => {
            const { status } = await Permissions.askAsync(Permissions.CAMERA);
            // const { status } = await Camera.requestMicrophonePermissionsAsync()()(); // Use requestPermissionsAsync from expo-camera
            setHasPermission(status === 'granted');
          })();
        }, []);
      
        const handleBarCodeScanned = ({ type, data }) => {
          setScanned(true);
        //   alert(`Bar code with type ${type} and data ${data} has been scanned!`);
          // You can handle the scanned data as needed, for example, navigate to a new screen.
          navigation.navigate('Details');
        };
      
        if (hasPermission === null) {
          return <Text>Requesting for camera permission</Text>;
        }
        if (hasPermission === false) {
          return <Text>No access to camera</Text>;
        }
      
        return (
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backNavigation}>
                <View style={styles.backIcon}>
                    <Icon name="angle-left" size={30} color="#4E0189" style={styles.icon} />
                </View>
                <Text style={styles.backText}>QR Code</Text>
            </TouchableOpacity>
            <View style={styles.scannerContainer}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
             {scanned && (
        <Button
          title={'Tap to Scan Again'}
          onPress={() => setScanned(false)}
        />
      )}
            </View>
            
          </View>
        );
      };

const styles = StyleSheet.create({
    backNavigation: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    backIcon: {
        margin: 8,
        height: 30,
        width: 30,
        backgroundColor: '#EBD8FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
    },
    backText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    scannerContainer: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column-reverse',
    },
})
export default QrCodeScreen;