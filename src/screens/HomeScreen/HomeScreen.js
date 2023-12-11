import { StyleSheet, View, Text, Image, Pressable, Dimensions } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../../../GlobalStyles";
export const HomeScreen = () => {
    return (
        <View style={[styles.homepage, styles.homepageBorder]}>
          <View style={styles.homepageChild} />
          <View style={styles.choMngNViParent}>
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
              </View>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.groupChild}
                  resizeMode="cover"
                  source={require("../../../assets/Home/ellipse-1.png")}
                />
                <Image
                  style={styles.image5Icon}
                  resizeMode="cover"
                  source={require("../../../assets/Home/image-5.png")}
                />
              </View>
            </Pressable>
          </View>
          <View style={[styles.khmPhParent, styles.groupItemLayout]}>
            <Text style={[styles.khmPh, styles.khmPhTypo]}>Khám phá</Text>
            <View style={[styles.groupItem, styles.groupItemLayout]} />
            <Pressable
              style={[styles.image66, styles.imageLayout]}
              onPress={() => {}}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../../assets/Home/image-66.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.image67, styles.imageLayout]}
              onPress={() => {}}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../../assets/Home/image-67.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.image68, styles.imageLayout]}
              onPress={() => {}}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../../assets/Home/image-68.png")}
              />
            </Pressable>
            <Text style={[styles.tinTc, styles.bnTypo]}>Tin tức</Text>
            <Text style={[styles.lchHotNg, styles.bnTypo]}>Lịch hoạt động</Text>
            <Text style={[styles.bn, styles.bnTypo]}>Bản đồ</Text>
          </View>
          <View style={[styles.sKinNiBtParent, styles.sKinNiBtParentPosition]}>
            <Text style={[styles.sKinNi, styles.sKinNiLayout]}>
              Sự kiện nổi bật
            </Text>
            <View style={styles.image33Parent}>
              <Image
                style={[styles.image33Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../../assets/Home/image-33.png")}
              />
              <Text style={[styles.thngBoTiContainer, styles.thngTypo]}>
                Thông báo tới tất{`cả học sinh ngày `}
                {`20/08/2023, thẻ `}sinh viên sẽ bị ...
              </Text>
              <Image
                style={[styles.image60Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../../../assets/Home/image-60.png")}
              />
              <Text style={[styles.thngBoTuyn, styles.thngTypo]}>
                Thông báo tuyển thành viên câu lạc bộ bóng đá ngày 20/08/2023để
                chuẩn bị cho ...
              </Text>
              <View style={styles.frameChild} />
            </View>
          </View>
          <View style={[styles.vectorParent, styles.vectorParentShadowBox]}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../../../assets/Home/vector.png")}
            />
            <Text style={[styles.trangCh, styles.sKinNiLayout]}>Trang chủ</Text>
            <Pressable style={styles.wrapper} onPress={() => {}}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../../assets/Home/group-1448.png")}
              />
            </Pressable>
          </View>
          <Image
            style={[styles.iosstatusBarblackIcon, styles.sKinNiBtParentPosition]}
            resizeMode="cover"
            source={require("../../../assets/Home/iosstatus-barblack.png")}
          />
          <View style={[styles.navbarbottom, styles.vectorParentShadowBox]}>
            <Image
              style={styles.vectorIcon1}
              resizeMode="cover"
              source={require("../../../assets/Home/vector1.png")}
            />
            <Pressable style={styles.vector} onPress={() => {}}>
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../../assets/Home/vector2.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.vector1, styles.union1Layout]}
              onPress={() => {}}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../../assets/Home/vector3.png")}
              />
            </Pressable>
            <Pressable
              style={[styles.union1, styles.union1Layout]}
              onPress={() => {}}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../../../assets/Home/union1.png")}
              />
            </Pressable>
          </View>
        </View>
      );
}
const styles = StyleSheet.create({
    homepageBorder: {
      borderWidth: 1,
      borderStyle: "solid",
    },
    bkInSightLayout: {
      width: 373,
      display: "flex",
      //fontFamily: 'OpenSans-Regular',
      color: Color.colorBlack,
    },
    bkInSightSpaceBlock: {
      marginTop: 19,
      alignItems: "center",
    },
    groupItemLayout: {
      width: 407,
      position: "absolute",
    },
    khmPhTypo: {
      fontSize: FontSize.size_7xl,
      top: 0,
      alignItems: "center",
      display: "flex",
      color: Color.colorBlack,
      //fontFamily: 'OpenSans-Regular',
      position: "absolute",
    },
    imageLayout: {
      height: 100,
      width: 100,
      position: "absolute",
    },
    bnTypo: {
      fontSize: FontSize.size_mini,
      textAlign: "left",
      color: Color.colorBlack,
      //fontFamily: 'OpenSans-Regular',
      position: "absolute",
    },
    sKinNiBtParentPosition: {
      left: 1,
      position: "absolute",
    },
    sKinNiLayout: {
      width: 226,
      textAlign: "left",
    },
    iconLayout: {
      borderRadius: Border.br_3xs,
      position: "absolute",
    },
    thngTypo: {
      fontSize: FontSize.size_lg,
      //fontFamily: 'OpenSans-Regular',
      position: "absolute",
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
      position: "absolute",
    },
    union1Layout: {
      height: 29,
      marginLeft: 64,
    },
    homepageChild: {
      top: 117,
      backgroundColor: "#f4f1f1",
      height: 195,
      width: 430,
      left: 0,
      position: "absolute",
    },
    choMngN: {
      fontSize: 19,
    },
    text: {
      fontSize: 24,
    },
    choMngNContainer1: {
      //lineBreak: "anywhere",
      width: "100%",
    },
    choMngNContainer: {
      height: 33,
      alignItems: "center",
      textAlign: "left",
    },
    bkInSight: {
      fontSize: 38,
      textAlign: "center",
      height: 38,
      justifyContent: "center",
      width: 373,
      display: "flex",
      //fontFamily: 'OpenSans-Regular',
      color: Color.colorBlack,
    },
    image4Icon: {
      width: 20,
      height: 20,
    },
    search: {
      fontSize: 16,
      fontWeight: "500",
      //fontFamily: 'OpenSans-Regular',
      color: "rgba(0, 0, 0, 0.5)",
      width: 103,
      marginLeft: 16,
      height: 20,
      textAlign: "left",
    },
    image4Parent: {
      flexDirection: "row",
    },
    groupChild: {
      top: -13,
      left: -15,
      width: 66,
      height: 66,
      position: "absolute",
    },
    image5Icon: {
      top: 10,
      left: 11,
      width: 14,
      height: 15,
      position: "absolute",
    },
    ellipseParent: {
      width: 36,
      height: 36,
    },
    frameParent: {
      borderRadius: 50,
      width: 372,
      height: 47,
      justifyContent: "space-between",
      paddingHorizontal: 19,
      paddingVertical: 15,
      flexDirection: "row",
      backgroundColor: Color.colorWhite,
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: Color.colorBlack,
    },
    choMngNViParent: {
      top: 135,
      left: 29,
      height: 149,
      position: "absolute",
    },
    khmPh: {
      width: 190,
      left: 8,
      textAlign: "left",
    },
    groupItem: {
      top: 46,
      borderRadius: 20,
      backgroundColor: "#fafafa",
      height: 139,
      left: 0,
    },
    icon: {
      height: "100%",
      width: "100%",
    },
    image66: {
      top: 53,
      height: 100,
      width: 100,
      left: 18,
    },
    image67: {
      left: 289,
      top: 57,
    },
    image68: {
      left: 163,
      top: 53,
      height: 100,
      width: 100,
    },
    tinTc: {
      left: 40,
      top: 158,
      fontSize: FontSize.size_mini,
    },
    lchHotNg: {
      top: 157,
      left: 156,
    },
    bn: {
      left: 309,
      top: 158,
      fontSize: FontSize.size_mini,
    },
    khmPhParent: {
      top: 313,
      height: 185,
      left: 8,
    },
    sKinNi: {
      left: 14,
      fontSize: FontSize.size_7xl,
      top: 0,
      alignItems: "center",
      display: "flex",
      color: Color.colorBlack,
      //fontFamily: 'OpenSans-Regular',
      position: "absolute",
      height: 33,
    },
    image33Icon: {
      left: 15,
      width: 165,
      height: 102,
      top: 13,
    },
    thngBoTiContainer: {
      left: 236,
      color: "rgba(0, 0, 0, 0.7)",
      textAlign: "justify",
      width: 167,
      height: 116,
      top: 13,
    },
    image60Icon: {
      top: 159,
      left: 243,
      width: 175,
      height: 98,
    },
    thngBoTuyn: {
      top: 155,
      width: 197,
      height: 146,
      left: 18,
      textAlign: "left",
      color: Color.colorBlack,
      fontSize: FontSize.size_lg,
    },
    frameChild: {
      top: 144,
      left: 12,
      borderColor: "#77787b",
      borderTopWidth: 1,
      width: 398,
      height: 1,
      position: "absolute",
      borderStyle: "solid",
    },
    image33Parent: {
      top: 42,
      height: 287,
      backgroundColor: Color.colorWhite,
      width: 430,
      left: 0,
      position: "absolute",
      overflow: "hidden",
    },
    sKinNiBtParent: {
      top: 507,
      height: 329,
      width: 430,
    },
    vectorIcon: {
      width: 41,
      height: 36,
    },
    trangCh: {
      fontSize: 28,
      fontWeight: "600",
      //fontFamily: 'OpenSans-SemiBold',
      color: "#030303",
      marginLeft: 34,
    },
    wrapper: {
      width: 50,
      height: 50,
      marginLeft: 34,
    },
    vectorParent: {
      top: 55,
      left: 16,
      width: 389,
      justifyContent: "flex-end",
      paddingLeft: Padding.p_3xs,
      paddingRight: 5,
      alignItems: "center",
    },
    iosstatusBarblackIcon: {
      right: 0,
      maxWidth: "100%",
      height: 39,
      top: 0,
      left: 1,
      overflow: "hidden",
    },
    vectorIcon1: {
      width: 34,
      height: 24,
      zIndex: 3,
    },
    vector: {
      height: 30,
      zIndex: 2,
      marginLeft: 64,
      width: 27,
    },
    vector1: {
      width: 26,
      zIndex: 1,
    },
    union1: {
      zIndex: 0,
      width: 27,
      height: 29,
    },
    navbarbottom: {
      marginLeft: -203,
      bottom: 20,
      left: "50%",
      borderRadius: 40,
      borderColor: Color.colorWhite,
      width: 400,
      alignItems: "flex-end",
      padding: Padding.p_3xs,
      backgroundColor: Color.colorWhite,
      justifyContent: "center",
      borderWidth: 1,
      borderStyle: "solid",
    },
    homepage: {
      borderRadius: 8,
      backgroundColor: "#87cbf0",
      flex: 1,
      height: 929,
      overflow: "hidden",
      width: "100%",
      borderColor: Color.colorBlack,
      borderWidth: 1,
    },
  });