import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import CalendarScreen from "./src/screens/CalendarScreen/CalendarScreen";
import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import { MapScreen } from "./src/screens/MapScreen/MapScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen/ProfileScreen";
import { ChangeInfoScreen } from "./src/screens/ProfileScreen/ChangeInfo";
import { InfoScreen } from "./src/screens/ProfileScreen/Info";
import { ChangePassScreen } from "./src/screens/ProfileScreen/ChangePass";
import { ChangeAvatarScreen } from "./src/screens/ProfileScreen/ChangeAvatar";
import { SearchScreen } from "./src/screens/SearchScreen/SearchScreen";
import SignUpScreen from "./src/screens/SignUpScreen/SignUpScreem";
import { WellcomeScreen } from "./src/screens/WellcomeScreen/WellcomeScreen";
import React, { useState } from "react";
import { InfoSearchScreen } from "./src/screens/SearchScreen/InfoSearchScreen";
import QrCodeScreen from "./src/screens/QrCodeScreen/QrCodeScreen";
import { DetailsScreen } from "./src/screens/QrCodeScreen/DetailsScreen";
import CalendarScreen2 from "./src/screens/CalendarScreen/CalendarScreen2";
import CalendarScreen3 from "./src/screens/CalendarScreen/CalendarScreen3";
import { InfoSearchScreen2 } from "./src/screens/SearchScreen/InfoSearchScreen2";
import { InfoSearchScreen3 } from "./src/screens/SearchScreen/InfoSearchScreen3";
import { WellcomeScreen1 } from "./src/screens/WellcomScreen1/WellcomScreen1";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
const Stack = createStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Wellcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Map" component={MapScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="ChangeInfo" component={ChangeInfoScreen} />
          <Stack.Screen name="Info" component={InfoScreen} />
          <Stack.Screen name="ChangePass" component={ChangePassScreen} />
          <Stack.Screen name="ChangeAvatar" component={ChangeAvatarScreen} />
          <Stack.Screen name="QrCode" component={QrCodeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Wellcome" component={WellcomeScreen} />
          <Stack.Screen name="Wellcome1" component={WellcomeScreen1} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Calendar" component={CalendarScreen} />
          <Stack.Screen name="Calendar2" component={CalendarScreen2} />
          <Stack.Screen name="Calendar3" component={CalendarScreen3} />
          <Stack.Screen name="InfoSearch" component={InfoSearchScreen} />
          <Stack.Screen name="InfoSearch2" component={InfoSearchScreen2} />
          <Stack.Screen name="InfoSearch3" component={InfoSearchScreen3} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
});
