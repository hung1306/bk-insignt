import React from 'react';
import { StyleSheet, View, Text, Image, Pressable, } from "react-native";
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Home')}>
        <Image
          source={require("../../../assets/Home/vector1.png")}
          style={styles.iconno1}
        />
      </Pressable>
      <Pressable onPress={() =>  navigation.navigate('Calendar')}>
        <Image
          source={require("../../../assets/Home/vector2.png")}
          style={styles.iconno2}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Map')}>
        <Image
          source={require("../../../assets/Home/vector3.png")}
          style={styles.iconno3}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Image
          source={require("../../../assets/Home/union1.png")}
          style={styles.iconno3}
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
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
  iconno1: {
    width: 34,
    height: 24,
},
  iconno2: {
    width: 27,
    height: 30,
},
  iconno3: {
    width: 27,
    height: 29,
},  });
export default BottomNavigation;