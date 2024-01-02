import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import SlideShow from "./SlideImage";
import Icon from "react-native-vector-icons/FontAwesome";
import RatingStars from "./RatingStars";
import Comment from "./Comment";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

export const DetailsScreen = ({ navigation }) => {
  const placeInfo = {
    name: "Tòa A5",
    detail:
      "Tòa A5 là  nơi đặt phòng làm việc của phòng quan hệ dối ngoại, phòng thanh tra pháp chế, trung tâm dữ liệu và công nghệ thông tin... Hội trường A5 với quy mô lớn nhất trường cũng tọa lạc ở đây.",
  };

  return (
    <ScrollView style={styles.container}>
      {/* Navigation */}
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
        <Text style={styles.backText}>Tòa A5</Text>
      </TouchableOpacity>

      {/* Hình ảnh */}
      <View style={styles.slideShow}>
        <SlideShow />
      </View>

      {/* Chi tiết */}
      <View style={styles.detailContainer}>
        <View style={styles.headerDetailContainer}>
          <Text style={styles.placeName}>{placeInfo.name}</Text>
          <RatingStars />
        </View>
        <View>
          <Text style={styles.detailText}>{placeInfo.detail}</Text>
        </View>
      </View>

      {/* ListFooterComponent */}
      <Comment />
      {/* <BottomNavigation /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CBF0",
    marginTop: 20,
  },
  backNavigation: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
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
  slideShow: {
    flex: 1,
    height: 290,
  },
  detailContainer: {
    backgroundColor: "#fff",
    marginBottom: 16,
    margin: 10,
    borderRadius: 15,
  },
  placeName: {
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailText: {
    fontSize: 17,
    margin: 10,
  },
  headerDetailContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
});
