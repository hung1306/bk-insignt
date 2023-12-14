import { StyleSheet, View, Text, Image, Pressable, Dimensions } from "react-native";
import { fontFamily, Color, FontSize, Border, Padding } from "../../../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.homepage]}>
      <View style={[styles.vectorParent, styles.vectorParentShadowBox]}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../../../assets/Home/vector.png")}
        />
        <Text style={styles.trangCh}>Trang chủ</Text>
        <Pressable style={styles.wrapper} onPress={() => {}}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../../../assets/Home/group-1448.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.choMngNViParent, styles.frameGroupPosition]}>
        <Text style={[styles.choMngNContainer, styles.bkInSightLayout]}>
          <Text style={styles.choMngNContainer1}>
            <Text style={styles.choMngN}>Chào mừng đến với</Text>
            <Text style={styles.text}>{`   `}</Text>
          </Text>
        </Text>
        <Text style={[styles.bkInSight, styles.bkInSightSpaceBlock]}>
          BK In-sight
        </Text>
        <Pressable
          style={[styles.frameParent, styles.bkInSightSpaceBlock]}
          onPress={() => {}}
        >
          <View style={styles.image4Parent}>
            <Image
              style={styles.image4Icon}
              resizeMode="cover"
              source={require("../../../assets/Home/image-4.png")}
            />
            <Text style={styles.search}>Search</Text>
            <Image
              style={[styles.image5Icon, styles.image5IconPosition]}
              resizeMode="cover"
              source={require("../../../assets/Home/image-5.png")}
            />
          </View>
        </Pressable>
      </View>
      <View style={styles.khmPhParent}>
        <Text style={[styles.khmPh, styles.khmPhTypo]}>Khám phá</Text>
        <View style={styles.frameChild} />
        <Pressable style={styles.image66} onPress={() => {}}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../../../assets/Home/image-66.png")}
          />
        </Pressable>
        <Pressable style={styles.image67} onPress={() => {}}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../../../assets/Home/image-67.png")}
          />
        </Pressable>
        <Pressable style={styles.image68} onPress={() => {}}>
          <Image
            style={[styles.icon2, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../../assets/Home/image-68.png")}
          />
        </Pressable>
        <Text style={[styles.tinTc, styles.bnTypo]}>Tin tức</Text>
        <Text style={[styles.lchHotNg, styles.bnTypo]}>Lịch hoạt động</Text>
        <Text style={[styles.bn, styles.bnTypo]}>Bản đồ</Text>
      </View>

      <Text style={[styles.sKinNi, styles.khmPhTypo]}>Sự kiện nổi bật</Text>
      <View style={[styles.Tinblock]}>
        <View style={[styles.Tin1]}>
            <Image
              style={[styles.imagetin1]}
              resizeMode="cover"
              source={require("../../../assets/Home/image-33.png")}
            />
          <Text style={[styles.tin1Container, styles.thngTypo]}>
                Thông báo tới tất cả học sinh ngày 
                20/08/2023, thẻ sinh viên sẽ bị kiểm tra đột xuất.
          </Text>
        </View>
        <View style={[styles.line]}></View>
        <View style={[styles.Tin2]}>
          <Text style={[styles.tin2Container, styles.thngTypo]}>
            Thông báo tuyển thành viên câu lạc bộ bóng đá ngày 20/08/2023 để
              chuẩn bị cho hội thao sinh viên.
          </Text>   
          <Image
              style={[styles.imagetin2]}
              resizeMode="cover"
              source={require("../../../assets/Home/image-60.png")}
            />     
        </View>
      </View> 
      <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Image
          source={require("../../../assets/Home/vector1.png")}
          style={styles.icon}
        />
      </Pressable>
      <Pressable onPress={() => {}}>
        <Image
            source={require("../../../assets/Home/vector2.png")}
          style={styles.icon}
        />
      </Pressable>
      <Pressable onPress={() => {}}>
        <Image
            source={require("../../../assets/Home/vector3.png")}
          style={styles.icon}
        />
      </Pressable>
      <Pressable  onPress={() => navigation.navigate('Profile')}>
        <Image
            source={require("../../../assets/Home/union1.png")}
          style={styles.icon}
        />
      </Pressable>
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  homepage: {
    backgroundColor: "#87cbf0",
    flex: 1,
    //overflow: "hidden",
    width: "100%",
  },
  trangCh: {
    fontSize: 28,
    fontWeight: "600",
    //fontFamily: //fontFamily.openSansSemiBold,
    color: "#030303",
    width: 226,
    marginLeft: 25,
    textAlign: "center",
  },
  vectorIcon: {
    width: 45,
    height: 40,
  },
  wrapper: {
    width: 50,
    height: 45,
    marginLeft: 34,
  },
  vectorParent: {
    marginLeft: -197.5,
    top: 13,
    justifyContent: "flex-end",
    paddingLeft: Padding.p_3xs,
    paddingRight: 5,
    alignItems: "center",
  },
  vectorParentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },  

  choMngNViParent: {
    top: 66,
    backgroundColor: "#f4f1f1",
    paddingHorizontal: 11,
    paddingVertical: 0,
    alignItems: "flex-end",
  },
  choMngNContainer1: {
    width: "100%",
  },
  choMngNContainer: {
    alignItems: "center",
    textAlign: "left",
  },
  bkInSight: {
    fontSize: 36,
    textAlign: "center",
    height: 48,
    justifyContent: "center",
    width: "100%",
    display: "flex",
    color: Color.colorBlack,
    //fontFamily: //fontFamily.openSansRegular,
  },
  bkInSightLayout: {
    width: "100%",
    display: "flex",
    color: Color.colorBlack,
    //fontFamily: //fontFamily.openSansRegular,
  },
  bkInSightSpaceBlock: {
    marginTop: 0,
    alignItems: "center",
    marginBottom: 10,
  },
  frameParent: {
    borderRadius: 50,
    height: 36,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorBlack,
  },
  image4Icon: {
    width: 20,
    height: 20,
  },
  image4Parent: {
    flexDirection: "row",
  },
  image5Icon: {
    left: 11,
    width: 20,
    height: 20,
  },
  search: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.5)",
    width: 260,
    marginLeft: 20,
    height: 20,
    textAlign: "left",
    //fontFamily: //fontFamily.openSansRegular,
  },
  khmPhParent: {
    top: 75,
    left: 12,
    width: "94%",
  },
  khmPh: {
    width: 205,
    height: 28,
    zIndex: 0,
    alignItems: "center",
  },
  khmPhTypo: {
    display: "flex",
    fontSize: FontSize.size_xl,
    alignItems: "center",
    textAlign: "left",
    color: Color.colorBlack,
    //fontFamily: //fontFamily.openSansRegular,
  },
  frameChild: {
    borderRadius: 20,
    backgroundColor: "#fafafa",
    height: 111,
    zIndex: 1,
    width: "100%",
  },
  image66: {
    left: 10,
    top: 42,
    width: 83,
    height: 62,
    zIndex: 2,
    position: "absolute",
  },
  image67: {
    left: 260,
    top: 45,
    width: 80,
    height: 59,
    zIndex: 3,
    position: "absolute",
  },
  image68: {
    top: 38,
    width: 94,
    zIndex: 4,
    height: 70,
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    marginTop: -5,
    height: 75,
    width: "100%",
  },
  bnTypo: {
    height: 20,
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    //fontFamily: //fontFamily.openSansRegular,
    position: "absolute",
  },
  bn: {
    left: 280,
    width: 54,
    zIndex: 7,
    top: 113,
    fontSize: FontSize.size_mini,
  },
  lchHotNg: {
    top: 113,
    left: 134,
    width: 112,
    zIndex: 6,
  },
  tinTc: {
    left: 32,
    width: 52,
    zIndex: 5,
    top: 113,
    fontSize: FontSize.size_mini,
  },
  icon2: {
    marginLeft: -50,
  },
  sKinNi: {
    top: 85,
    left: 12,
    height: 20,
    alignItems: "center",
  },
  Tinblock:{
    top: 95,
    backgroundColor: 'white', 
    height: 265 ,
  },
  Tin1: {
    top: 20,
    flexDirection: 'row',
  },
  imagetin1: {
    left: 20,
    width: 150,
    borderRadius: Border.br_3xs,
    height: 100,
  },
  tin1Container: {
    left: 30,
    color: "rgba(0, 0, 0, 0.7)",
    width: 200,
    height: 100,
  },
  thngTypo: {
    textAlign: "justify",
    fontSize: 16,
  },
  Tin2: {
    top: 40,
    flexDirection: 'row',
  },
  tin2Container: {
    left: 20,
    color: "rgba(0, 0, 0, 0.7)",
    width: 200,
    height: 100,
  },
  imagetin2: {
    left: 30,
    width: 150,
    borderRadius: Border.br_3xs,
    height: 100,
  },
  line:{
    top: 32,
    height: 1,
    backgroundColor: "#77787b",
    alignSelf: 'center',
    width: "90%",
  },
  container: {
    position: 'absolute',
    bottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 60,
    paddingHorizontal: 20,
    width: '100%',
    borderRadius: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
});