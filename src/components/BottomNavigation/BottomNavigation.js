import * as React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
export const BottomNavigation = () => {
    return (
        <View style={[styles.navbarbottom, styles.navbarbottomShadowBox]}>
        <Pressable
            style={styles.vector}
            onPress={() => navigation.navigate("Homepage")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector9.png")}
          />
        </Pressable>
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("Calendar")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.vector2, styles.union1Layout]}
          onPress={() => navigation.navigate("Map1")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.union1, styles.union1Layout]}
          onPress={() => navigation.navigate("Profile2")}
        >
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/union11.png")}
          />
        </Pressable>
      </View>

    )
}