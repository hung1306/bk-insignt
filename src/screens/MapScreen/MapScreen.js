// import { Text, View } from "react-native"
// export const MapScreen = () => {
//     return (
//         <View>
//             <Text>Map Page</Text>
//         </View>
//     )
// }

import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Border, FontFamily, Color, Padding } from "../GlobalStyles";

const MapScreen = () => {
  return (
    <View style={[styles.map, styles.mapBorder]}>
      <Image
        style={styles.bellIcon}
        resizeMode="cover"
        source={require("../assets/bell.png")}
      />
      <View style={styles.materialSymbolsprivacyTipO} />
      <View style={styles.statusBar}>
        <Image
          style={styles.notchIcon}
          resizeMode="cover"
          source={require("../assets/notch.png")}
        />
        <View style={[styles.statusIcons, styles.statusIconsFlexBox]}>
          <Image
            style={styles.networkSignalLight}
            resizeMode="cover"
            source={require("../assets/network-signal-light.png")}
          />
          <Image
            style={[styles.wifiSignalLight, styles.lightSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/wifi-signal--light.png")}
          />
          <Image
            style={[styles.batteryLight, styles.lightSpaceBlock]}
            resizeMode="cover"
            source={require("../assets/battery--light.png")}
          />
        </View>
        <Image
          style={styles.indicatorIcon}
          resizeMode="cover"
          source={require("../assets/indicator.png")}
        />
        <Image
          style={styles.timeLight}
          resizeMode="cover"
          source={require("../assets/time--light.png")}
        />
      </View>
      <Image
        style={styles.image10Icon}
        resizeMode="cover"
        source={require("../assets/image-10.png")}
      />
      <View style={styles.mapChild} />
      <View style={styles.mapItem} />
      <Image
        style={styles.mapInner}
        resizeMode="cover"
        source={require("../assets/frame-18.png")}
      />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-36.png")}
      />
      <Text style={styles.iHcBch}>Đại học Bách khoa TP.HCM cơ sở 2</Text>
      <Image
        style={[styles.iconPaperPlane, styles.iconPosition]}
        resizeMode="cover"
        source={`🦆 icon "Paper Plane"_11`}
      />
      <Image
        style={[styles.vectorIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <View style={[styles.navbarbottom, styles.statusIconsFlexBox]}>
        <Image
          style={styles.vectorIcon1}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={styles.vectorIcon3}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
        <Image
          style={[styles.union1Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/union1.png")}
        />
      </View>
      <View style={[styles.iosstatusBarblack, styles.batteryIconPosition]}>
        <Image
          style={styles.bgIcon}
          resizeMode="cover"
          source={require("../assets/bg.png")}
        />
        <View style={[styles.rightSide, styles.sidePosition]}>
          <Image
            style={[styles.batteryIcon, styles.batteryIconPosition]}
            resizeMode="cover"
            source={require("../assets/battery.png")}
          />
          <Image
            style={styles.wifiIcon}
            resizeMode="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.mobileSignalIcon}
            resizeMode="cover"
            source={require("../assets/mobile-signal.png")}
          />
        </View>
        <Image
          style={[styles.leftSideIcon, styles.sidePosition]}
          resizeMode="cover"
          source={require("../assets/left-side.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  statusIconsFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  iconPosition: {
    right: "7.48%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iconLayout: {
    width: 27,
    marginLeft: 64,
  },
  batteryIconPosition: {
    top: 0,
    position: "absolute",
  },
  sidePosition: {
    top: 17,
    height: 11,
    position: "absolute",
  },
  bellIcon: {
    top: 57,
    left: 367,
    width: 29,
    overflow: "hidden",
    height: 29,
    position: "absolute",
  },
  materialSymbolsprivacyTipO: {
    top: 370,
    height: 24,
    width: 24,
    left: 24,
    overflow: "hidden",
    position: "absolute",
  },
  notchIcon: {
    display: "none",
    height: 30,
    maxWidth: "100%",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    position: "absolute",
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    alignItems: "center",
    display: "none",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  timeLight: {
    top: 12,
    left: 21,
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    display: "none",
    overflow: "hidden",
    position: "absolute",
  },
  statusBar: {
    top: 1,
    height: 44,
    left: 0,
    right: 0,
    overflow: "hidden",
    position: "absolute",
  },
  image10Icon: {
    top: 97,
    width: 428,
    height: 749,
    left: 0,
    position: "absolute",
  },
  mapChild: {
    top: 403,
    left: 166,
    width: 43,
    height: 57,
    position: "absolute",
  },
  mapItem: {
    top: 398,
    left: 163,
    backgroundColor: "rgba(255, 255, 255, 0.01)",
    width: 49,
    height: 62,
    position: "absolute",
  },
  mapInner: {
    top: 46,
    left: 15,
    width: 40,
    height: 40,
    overflow: "hidden",
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  rectangleIcon: {
    top: 98,
    left: 13,
    width: 393,
    height: 44,
    position: "absolute",
    borderRadius: Border.br_3xs,
  },
  iHcBch: {
    top: 108,
    left: 29,
    fontSize: 16,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  iconPaperPlane: {
    height: "2.88%",
    width: "5.84%",
    top: "4.75%",
    bottom: "92.37%",
    left: "86.68%",
    maxHeight: "100%",
  },
  vectorIcon: {
    marginTop: -355,
    width: "4.67%",
    top: "50%",
    left: "87.85%",
    height: 20,
  },
  vectorIcon1: {
    width: 34,
    zIndex: 3,
    height: 24,
  },
  vectorIcon2: {
    zIndex: 2,
    marginLeft: 64,
    height: 30,
  },
  vectorIcon3: {
    width: 26,
    zIndex: 1,
    marginLeft: 64,
    height: 29,
  },
  union1Icon: {
    zIndex: 0,
    marginLeft: 64,
    height: 29,
  },
  navbarbottom: {
    marginLeft: -201,
    bottom: 25,
    left: "50%",
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorWhite,
    width: 400,
    alignItems: "flex-end",
    justifyContent: "center",
    padding: Padding.p_3xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  bgIcon: {
    top: -2,
    left: 78,
    width: 0,
    height: 0,
    position: "absolute",
  },
  batteryIcon: {
    height: 11,
    right: 0,
    width: 24,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  mobileSignalIcon: {
    width: 17,
    height: 11,
  },
  rightSide: {
    right: 25,
    width: 67,
    height: 11,
  },
  leftSideIcon: {
    width: 28,
    height: 11,
    left: 24,
  },
  iosstatusBarblack: {
    right: 1,
    height: 44,
    left: 0,
    overflow: "hidden",
    backgroundColor: Color.colorLightskyblue,
  },
  map: {
    borderColor: Color.colorBlack,
    flex: 1,
    width: "100%",
    height: 932,
    backgroundColor: Color.colorLightskyblue,
    borderRadius: Border.br_3xs,
  },
});

export default MapScreen;
