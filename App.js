import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CalendarScreen } from "./src/screens/CalendarScreen/CalendarScreen";
import { HomeScreen } from "./src/screens/HomeScreen/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen/LoginScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen/ProfileScreen";
import { ChangeInfoScreen } from "./src/screens/ProfileScreen/ChangeInfo";
import { InfoScreen } from "./src/screens/ProfileScreen/Info";
import { ChangePassScreen } from "./src/screens/ProfileScreen/ChangePass";
import { ChangeAvatarScreen } from "./src/screens/ProfileScreen/ChangeAvatar";
import { QrCodeScreen } from "./src/screens/QrCodeScreen/QrCodeScreen";
import { SearchScreen } from "./src/screens/SearchScreen/SearchScreen";
import SignUpScreen from "./src/screens/SignUpScreen/SignUpScreem";
import { WellcomeScreen } from "./src/screens/WellcomeScreen/WellcomeScreen";
import { WellcomeScreen1 } from "./src/screens/WellcomScreen1/WellcomScreen1";
import { InfoSearchScreen } from "./src/screens/SearchScreen/InfoSearchScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { store } from "./src/redux/store";
// import { Provider } from "react-redux";
// import jwt_decode from "jwt-decode";
// import { isJsonString } from "./utils";
// import * as UserService from "./src/services/UserServices";
// import { resetUser, updateUser } from "./src/redux/slices/UserSlices";
// import { useDispatch, useSelector } from "react-redux";

const Stack = createStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  // const dispatch = useDispatch();
  // const user = useSelector((state) => state.user);

  // useEffect(() => {
  //   const { storageData, decoded } = handleDecoded();
  //   if (decoded?.id) {
  //     handleGetDetailsUser(decoded?.id, storageData);
  //   }
  // }, []);

  // const handleDecoded = () => {
  //   let storageData =
  //     user?.access_token || localStorage.getItem("access_token");
  //   let decoded = {};
  //   if (storageData && isJsonString(storageData) && !user?.access_token) {
  //     storageData = JSON.parse(storageData);
  //     decoded = jwt_decode(storageData);
  //   }
  //   return { decoded, storageData };
  // };

  // UserService.axiosJWT.interceptors.request.use(
  //   async (config) => {
  //     // Do something before request is sent
  //     const currentTime = new Date();
  //     const { decoded } = handleDecoded();
  //     let storageRefreshToken = localStorage.getItem("refresh_token");
  //     const refreshToken = JSON.parse(storageRefreshToken);
  //     const decodedRefreshToken = jwt_decode(refreshToken);
  //     if (decoded?.exp < currentTime.getTime() / 1000) {
  //       if (decodedRefreshToken?.exp > currentTime.getTime() / 1000) {
  //         const data = await UserService.refreshToken(refreshToken);
  //         config.headers["token"] = `Bearer ${data?.access_token}`;
  //       } else {
  //         dispatch(resetUser());
  //       }
  //     }
  //     return config;
  //   },
  //   (err) => {
  //     return Promise.reject(err);
  //   }
  // );

  // const handleGetDetailsUser = async (id, token) => {
  //   let storageRefreshToken = localStorage.getItem("refresh_token");
  //   const refreshToken = JSON.parse(storageRefreshToken);
  //   const res = await UserService.getDetailsUser(id, token);
  //   dispatch(
  //     updateUser({
  //       ...res?.data,
  //       access_token: token,
  //       refreshToken: refreshToken,
  //     })
  //   );
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Wellcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Calendar" component={CalendarScreen} />
          <Stack.Screen name="Map" component={LoginScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="ChangeInfo" component={ChangeInfoScreen} />
          <Stack.Screen name="Info" component={InfoScreen} />
          <Stack.Screen name="ChangePass" component={ChangePassScreen} />
          <Stack.Screen name="ChangeAvatar" component={ChangeAvatarScreen} />
          <Stack.Screen name="QrCode" component={QrCodeScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="InfoSearch" component={InfoSearchScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Wellcome" component={WellcomeScreen} />
          <Stack.Screen name="Wellcome1" component={WellcomeScreen1} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
// AppRegistry.registerComponent("BK-INSIGNT", () => App);

const styles = StyleSheet.create({
  container: {
    fontFamily: "OpenSans-SemiBoldItalic",
    flex: 1,
    backgroundColor: "#fafafa",
    alignItems: "center",
    justifyContent: "center",
  },
});
