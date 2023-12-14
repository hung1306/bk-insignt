import { StyleSheet, View, Text, Image, Pressable, Dimensions } from "react-native";
import { fontFamily, Color, FontSize, Border, Padding } from "../../../GlobalStyles";
export const HomeScreen = () => {
  return (
    <View style={[styles.homepage, styles.homepageBorder]}>
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
          </View>
          <View style={styles.ellipseParent}>
            <Image
              style={styles.groupChild}
              resizeMode="cover"
              source={require("../../../assets/Home/ellipse-1.png")}
            />
            <Image
              style={[styles.image5Icon, styles.image5IconPosition]}
              resizeMode="cover"
              source={require("../../../assets/Home/image-5.png")}
            />
          </View>
        </Pressable>
      </View>
      <Text style={[styles.sKinNi, styles.khmPhTypo]}>Sự kiện nổi bật</Text>
      <View style={[styles.frameGroup, styles.frameGroupPosition]}>
        <View style={styles.groupParent}>
          <View style={[styles.frameContainer, styles.image5IconPosition]}>
            <View style={styles.thngBoTiTtCHcSinhWrapper}>
              <Text style={[styles.thngBoTiContainer, styles.thngTypo]}>
                Thông báo tới tất{`cả học sinh ngày `}
                {`20/08/2023, thẻ `}sinh viên sẽ bị ...
              </Text>
            </View>
            <Image
              style={[styles.image33Icon, styles.thngBoTuynPosition]}
              resizeMode="cover"
              source={require("../../../assets/Home/image-33.png")}
            />
          </View>
          <View style={[styles.image60Parent, styles.image60Layout]}>
            <Image
              style={[styles.image60Icon, styles.image60Layout]}
              resizeMode="cover"
              source={require("../../../assets/Home/image-60.png")}
            />
            <Text style={[styles.thngBoTuyn, styles.thngBoTuynPosition]}>
              Thông báo tuyển thành viên câu lạc bộ bóng đá ngày 20/08/2023 để
              chuẩn bị cho
            </Text>
          </View>
        </View>
        <View style={styles.frameItem} />
      </View>
      <View style={[styles.vectorParent, styles.vectorParentShadowBox]}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../../../assets/Home/vector.png")}
        />
        <Text style={styles.trangCh}>Trang chủ</Text>
        <Pressable style={styles.wrapper} onPress={() => {}}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../../../assets/Home/group-1448.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.navbarbottom, styles.vectorParentShadowBox]}>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../../../assets/Home/vector1.png")}
        />
        <Pressable style={styles.vector} onPress={() => {}}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../../../assets/Home/vector2.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.vector1, styles.union1Layout]}
          onPress={() => {}}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../../../assets/Home/vector3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.union1, styles.union1Layout]}
          onPress={() => {}}
        >
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../../../assets/Home/union1.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  homepageBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  khmPhTypo: {
    display: "flex",
    fontSize: FontSize.size_xl,
    alignItems: "center",
    textAlign: "left",
    color: Color.colorBlack,
    //fontFamily: //fontFamily.openSansRegular,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  bnTypo: {
    height: 16,
    fontSize: FontSize.size_mini,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.colorBlack,
    //fontFamily: //fontFamily.openSansRegular,
    position: "absolute",
  },
  frameGroupPosition: {
    left: 1,
    width: 395,
    position: "absolute",
  },
  bkInSightLayout: {
    width: 373,
    display: "flex",
    color: Color.colorBlack,
    //fontFamily: //fontFamily.openSansRegular,
  },
  bkInSightSpaceBlock: {
    marginTop: 9,
    alignItems: "center",
  },
  image5IconPosition: {
    top: 10,
    position: "absolute",
  },
  thngTypo: {
    textAlign: "justify",
    fontSize: FontSize.size_sm,
    //fontFamily: //fontFamily.openSansRegular,
  },
  thngBoTuynPosition: {
    left: 0,
    top: 2,
    position: "absolute",
  },
  image60Layout: {
    height: 82,
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
    left: "50%",
    position: "absolute",
  },
  union1Layout: {
    height: 29,
    marginLeft: 64,
  },
  khmPh: {
    width: 205,
    height: 28,
    zIndex: 0,
    alignItems: "center",
  },
  frameChild: {
    borderRadius: 20,
    backgroundColor: "#fafafa",
    height: 111,
    marginTop: 5,
    zIndex: 1,
    width: 371,
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
    left: 278,
    top: 45,
    width: 80,
    height: 59,
    zIndex: 3,
    position: "absolute",
  },
  icon2: {
    marginLeft: -45.41,
  },
  image68: {
    top: 38,
    width: 94,
    zIndex: 4,
    height: 70,
    left: "50%",
    position: "absolute",
  },
  tinTc: {
    left: 32,
    width: 52,
    zIndex: 5,
    top: 113,
    fontSize: FontSize.size_mini,
  },
  lchHotNg: {
    top: 115,
    left: 134,
    width: 112,
    zIndex: 6,
  },
  bn: {
    left: 296,
    width: 54,
    zIndex: 7,
    top: 113,
    fontSize: FontSize.size_mini,
  },
  khmPhParent: {
    top: 227,
    left: 12,
    width: 371,
    position: "absolute",
  },
  choMngN: {
    fontSize: 19,
  },
  text: {
    fontSize: 24,
  },
  choMngNContainer1: {
    width: "100%",
  },
  choMngNContainer: {
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
    color: Color.colorBlack,
    //fontFamily: //fontFamily.openSansRegular,
  },
  image4Icon: {
    width: 20,
    height: 20,
  },
  search: {
    fontSize: 16,
    color: "rgba(0, 0, 0, 0.5)",
    width: 103,
    marginLeft: 16,
    height: 20,
    textAlign: "left",
    //fontFamily: //fontFamily.openSansRegular,
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
    left: 11,
    width: 14,
    height: 15,
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
    top: 72,
    backgroundColor: "#f4f1f1",
    paddingHorizontal: 11,
    paddingVertical: 0,
    alignItems: "flex-end",
    width: 395,
  },
  sKinNi: {
    top: 381,
    left: 19,
    width: 208,
    height: 14,
    alignItems: "center",
    position: "absolute",
  },
  thngBoTiContainer: {
    color: "rgba(0, 0, 0, 0.7)",
    width: 155,
    height: 76,
  },
  thngBoTiTtCHcSinhWrapper: {
    left: 178,
    top: 0,
    height: 76,
    position: "absolute",
  },
  image33Icon: {
    width: 117,
    borderRadius: Border.br_3xs,
    height: 70,
  },
  frameContainer: {
    left: 38,
    width: 333,
    height: 76,
  },
  image60Icon: {
    left: 217,
    width: 164,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  thngBoTuyn: {
    width: 175,
    textAlign: "justify",
    fontSize: FontSize.size_sm,
    //fontFamily: //fontFamily.openSansRegular,
    height: 66,
    color: Color.colorBlack,
    top: 2,
  },
  image60Parent: {
    top: 99,
    left: 14,
    width: 381,
  },
  groupParent: {
    height: 195,
    backgroundColor: Color.colorWhite,
    width: 395,
    zIndex: 0,
    overflow: "hidden",
  },
  frameItem: {
    top: 93,
    left: 18,
    borderColor: "#77787b",
    borderTopWidth: 1,
    width: 349,
    height: 1,
    zIndex: 1,
    position: "absolute",
    borderStyle: "solid",
  },
  frameGroup: {
    top: 407,
    width: 395,
  },
  vectorIcon: {
    width: 41,
    height: 36,
  },
  trangCh: {
    fontSize: 28,
    fontWeight: "600",
    //fontFamily: //fontFamily.openSansSemiBold,
    color: "#030303",
    width: 226,
    marginLeft: 34,
    textAlign: "left",
  },
  wrapper: {
    width: 50,
    height: 50,
    marginLeft: 34,
  },
  vectorParent: {
    marginLeft: -197.5,
    top: 13,
    width: 396,
    justifyContent: "flex-end",
    paddingLeft: Padding.p_3xs,
    paddingRight: 5,
    alignItems: "center",
  },
  vectorIcon1: {
    width: 34,
    height: 24,
    zIndex: 3,
  },
  vector: {
    height: 30,
    marginLeft: 64,
    width: 27,
    zIndex: 2,
  },
  vector1: {
    width: 26,
    zIndex: 1,
  },
  union1: {
    width: 27,
    height: 29,
    zIndex: 0,
  },
  navbarbottom: {
    marginLeft: -201.5,
    bottom: 0,
    borderRadius: Border.br_21xl,
    borderColor: Color.colorWhite,
    width: 400,
    padding: Padding.p_3xs,
    backgroundColor: Color.colorWhite,
    justifyContent: "center",
    alignItems: "flex-end",
    borderWidth: 1,
    borderStyle: "solid",
  },
  homepage: {
    borderRadius: 8,
    backgroundColor: "#87cbf0",
    flex: 1,
    height: 664,
    overflow: "hidden",
    width: "100%",
    borderColor: Color.colorBlack,
    borderWidth: 1,
  },
});