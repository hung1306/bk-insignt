import {
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
import { LinearGradient } from "expo-linear-gradient";

export const InfoScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.profilepage]}>
      <View style={styles.Headercontainer}>
        <Pressable
          style={[styles.backIconCon]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            source={require("../../../assets/Profile1/frame-18.png")}
            style={styles.backIcon}
          />
        </Pressable>
        <View style={[styles.headerTextCon]}>
          <Text style={styles.headerText}>Thông tin cá nhân</Text>
        </View>
      </View>
      <View style={[styles.profile]}>
        <Image
          style={[styles.profileImage]}
          resizeMode="cover"
          source={require("../../../assets/Profile1/avatar.png")}
        />
      </View>
      <View style={styles.settingsContainer}>
        <ScrollView contentContainerStyle={styles.settingsList}>
          <View style={styles.settingItem}>
            <Text style={styles.settingText1}>Tên</Text>
            <View style={styles.text2Con}>
              <Text style={styles.settingText2}>Nguyễn Tuấn Anh</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.settingItem}>
            <Text style={styles.settingText1}>Giới tính</Text>
            <View style={styles.text2Con}>
              <Text style={styles.settingText2}>Nam</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.settingItem}>
            <Text style={styles.settingText1}>MSSV</Text>
            <View style={styles.text2Con}>
              <Text style={styles.settingText2}>20022002</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.settingItem}>
            <Text style={styles.settingText1}>SĐT</Text>
            <View style={styles.text2Con}>
              <Text style={styles.settingText2}>0987654321</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.settingItem}>
            <Text style={styles.settingText1}>Email</Text>
            <View style={styles.text2Con}>
              <Text style={styles.settingText2}>tuananh@hcmut.edu.vn</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.buttonWrapper}>
        <LinearGradient
          colors={["#9C3FE4", "#C65647"]}
          style={[StyleSheet.absoluteFill, styles.gradient1]}
        />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={() => navigation.navigate("ChangeInfo")}
        >
          <Text style={styles.buttonText}>Thay đổi</Text>
        </TouchableOpacity>
      </View>
      {/* <Pressable
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("ChangeInfo")}
      >
        <Text style={styles.buttonText}>Thay đổi</Text>
      </Pressable> */}
      <BottomNavigation />
    </View>
  );
};
const styles = StyleSheet.create({
  profilepage: {
    backgroundColor: "#87cbf0",
    flex: 1,
    overflow: "hidden",
    width: "100%",
    marginTop: 20,
  },
  profile: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    marginTop: 10,
    width: 150,
    height: 150,
    borderRadius: 50,
    marginBottom: 30,
  },
  Headercontainer: {
    flexDirection: "row",
    alignItems: "center",
    //justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 10,
    //padding: 10,
  },
  backIcon: {
    width: 35,
    height: 35,
    marginRight: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  settingsContainer: {
    alignSelf: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    borderRadius: 30,
    width: "90%",
  },
  settingsList: {
    marginTop: 15,
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    //marginBottom: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginTop: 15,
    marginBottom: 10,
  },
  settingIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: 5,
  },
  settingText1: {
    fontSize: 18,
    color: "#C3C3C3",
  },
  settingText2: {
    fontSize: 18,
  },
  text2Con: {
    width: 230,
  },
  buttonContainer: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    width: "30%",
    borderRadius: 10,
    height: 30,
    justifyContent: "center",
    marginTop: 20,
  },
  buttonWrapper: {
    marginTop: 25,
    marginLeft: 45,
    marginRight: 45,
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonLogin: {
    backgroundColor: "transparent",
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
  gradient1: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
