import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CalendarScreen } from './src/screens/CalendarScreen/CalendarScreen';
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen/LoginScreen';
import { ProfileScreen } from './src/screens/ProfileScreen/ProfileScreen';
import { ChangeInfoScreen } from './src/screens/ProfileScreen/ChangeInfo';
import { InfoScreen } from './src/screens/ProfileScreen/Info';
import { ChangePassScreen } from './src/screens/ProfileScreen/ChangePass';
import { ChangeAvatarScreen } from './src/screens/ProfileScreen/ChangeAvatar';
// import { QrCodeScreen } from './src/screens/QrCodeScreen/QrCodeScreen';
import { SearchScreen } from './src/screens/SearchScreen/SearchScreen';
import { SignUpScreen } from './src/screens/SignUpScreen/SignUpScreem';
import { WellcomeScreen } from './src/screens/WellcomeScreen/WellcomeScreen';
import { Font } from 'expo-font';
import React, { useState } from 'react';
import { InfoSearchScreen } from './src/screens/SearchScreen/InfoSearchScreen';
import QrCodeScreen from './src/screens/QrCodeScreen/QrCodeScreen';
import { DetailsScreen } from './src/screens/QrCodeScreen/DetailsScreen';

const Stack = createStackNavigator();
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Wellcome" screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="QrCode" component={QrCodeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WellCome" component={WellcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Map" component={LoginScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ChangeInfo" component={ChangeInfoScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="ChangePass" component={ChangePassScreen} />
        <Stack.Screen name="ChangeAvatar" component={ChangeAvatarScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="InfoSearch" component={InfoSearchScreen} />
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
