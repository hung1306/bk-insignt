import { StyleSheet, Text, View } from 'react-native';
import { LoginScreen } from './src/screens/LoginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SignUpScreen } from './src/screens/SignUpScreen/SignUpScreem';
import QRScannerScreen, { HomeScreen, QrCodeScreen, ResultScreen } from './src/screens/QrCodeScreen/QrCodeScreen';
import { WellcomeScreen } from './src/screens/WellcomeScreen/WellcomeScreen';
import { Font } from 'expo-font';
import React, { useState } from 'react';
const Stack = createStackNavigator();
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // async function loadFonts() {
  //   await Font.loadAsync({
  //     'OpenSans-BoldItalic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
  //   });
  //   setFontLoaded(true);
  // }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wellcome">
        <Stack.Screen name="QrCode" component={QRScannerScreen} />
        <Stack.Screen name="QrCodeResult" component={ResultScreen} />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
