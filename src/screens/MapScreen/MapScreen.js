// import { Text, View } from "react-native"
// export const MapScreen = () => {
//     return (
//         <View>
//             <Text>Map Page</Text>
//         </View>
//     )
// }

// import * as React from "react";
// import { Image, StyleSheet, View, Text, TextInput, Button, Pressable } from "react-native";
// import MapView, { Marker } from 'react-native-maps'; //RN maps
// // import * as Location from 'expo-location'; //expolocation
// import { fontFamily, Color, FontSize, Border, Padding } from "../../../GlobalStyles";
// import { useNavigation } from '@react-navigation/native';

// export const MapScreen = () => {

//   const navigation = useNavigation();

//   return (
//     <View style={{ flex: 1 }}>

//     <MapView
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />

//       {/* //nav bar  */}

//       <View style={[styles.navbarbottom, styles.vectorParentShadowBox]}>
//           <Image
//             style={styles.vectorIcon1}
//             resizeMode="cover"
//             source={require("../../../assets/Home/vector1.png")}
//           />
//           <Pressable style={styles.vector} onPress={() => {}}>
//             <Image
//               style={styles.iconLayout}
//               resizeMode="cover"
//               source={require("../../../assets/Home/vector2.png")}
//             />
//           </Pressable>
//           <Pressable
//             style={[styles.vector1, styles.union1Layout]}
//             onPress={() => {}}
//           >
//             <Image
//               style={styles.iconLayout}
//               resizeMode="cover"
//               source={require("../../../assets/Home/vector3.png")}
//             />
//           </Pressable>
//           <Pressable
//             style={[styles.union1, styles.union1Layout]}
//             onPress={() => {}}
//           >
//             <Image
//               style={styles.iconLayout}
//               resizeMode="cover"
//               source={require("../../../assets/Home/union1.png")}
//             />
//           </Pressable>
//         </View>

//       {/* //!nav bar  */}

//     </View>
//   );
// };

// //styles
// const styles = StyleSheet.create({
//   union1Layout: {
//     height: 29,
//     marginLeft: 64,
//   },
//   vector1: {
//     width: 26,
//     zIndex: 1,
//   },
//   union1: {
//     width: 27,
//     height: 29,
//     zIndex: 0,
//   },
//   navbarbottom: {
//     marginLeft: -201.5,
//     bottom: 0,
//     borderRadius: Border.br_21xl,
//     borderColor: Color.colorWhite,
//     width: 400,
//     padding: Padding.p_3xs,
//     backgroundColor: Color.colorWhite,
//     justifyContent: "center",
//     alignItems: "flex-end",
//     borderWidth: 1,
//     borderStyle: "solid",
//   },
// });

// import { StyleSheet, View, Text, Image, Pressable, ScrollView } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import MapView from 'react-native-maps';

// export const MapScreen = () => {
//     const navigation = useNavigation();
//     return (
//   );
// };

// //styles
// const styles = StyleSheet.create({

// });

import React from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MapView, { Marker } from 'react-native-maps';

export const MapScreen = () => {
  const navigation = useNavigation();

  // Sample location for the Marker
  const daihocBachKhoaCoordinates = { latitude: 10.772093966697303, longitude: 106.65790035906763 };


  return (
    <View style={styles.container}>
                {/* <Pressable onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require("../../../assets/Home/vector1.png")}
                        style={styles.iconno1}
                    />
                </Pressable>
                <Pressable onPress={() => { }}>
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
                </Pressable> */}

      {/* Header with Back Button */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>Back</Text>
        </Pressable>
        <Text style={styles.headerText}>Map Screen</Text>
      </View>

      {/* Map */}
      <MapView
  style={styles.map}
  initialRegion={{
    latitude: daihocBachKhoaCoordinates.latitude,
    longitude: daihocBachKhoaCoordinates.longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
>
  {/* Đánh dấu Đại học Bách Khoa trên bản đồ */}
  <Marker coordinate={daihocBachKhoaCoordinates} title="Đại học Bách Khoa" />
</MapView>
    </View>
    
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#3498db', // Example color
  },
  backButton: {
    color: 'white',
    fontWeight: 'bold',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
  },
//   container: {
//     position: 'absolute',
//     bottom: 5,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     height: 60,
//     paddingHorizontal: 20,
//     width: '100%',
//     borderRadius: 20,
//   },
//   iconno1: {
//     width: 34,
//     height: 24,
// },
//   iconno2: {
//     width: 27,
//     height: 30,
// },
//   iconno3: {
//     width: 27,
//     height: 29,
// },  
});

