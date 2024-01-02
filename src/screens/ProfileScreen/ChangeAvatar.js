import { StyleSheet, View, Text, Image, Pressable, TextInput, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";
export const ChangeAvatarScreen = () => {
    const navigation = useNavigation();
    const [value, setValue] = useState(50);
    const handleSliderChange = (newValue) => {
      setValue(newValue);
    };
    return (
        <View style={[styles.profilepage]}>
            <View style={styles.Headercontainer}>
                <Pressable style={[styles.backIconCon]} onPress={() => navigation.navigate('Profile')}>
                    <Image
                        source={require('../../../assets/Profile1/frame-18.png')}
                        style={styles.backIcon}
                    />
                </Pressable>
                <View style={[styles.headerTextCon]}>
                    <Text style={styles.headerText}>Thay đổi Avatar</Text>
                </View>
            </View>
            <View style={styles.separator} />
            <View style={styles.Imagecontainer}>
                <View style={styles.ImageCircle}>

                </View>
            </View>
            <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={50}
        maximumValue={200}
        minimumTrackTintColor="#007bff"
        maximumTrackTintColor="#dcdcdc"
        thumbTintColor="#007bff"
        value={value}
        onValueChange={handleSliderChange}
      />
      <Text style={styles.sliderValue}>{value}</Text>
    </View>
            <View style={styles.Selectcontainer}>
                <Pressable  onPress={() => {}}>
                <View style={styles.chupanh}>
                    <View style={styles.chupContainer}>
                        <Image
                            source={require('../../../assets/Profile1/Camera.png')}
                            style={styles.Chup}
                        /></View>
                    <Text style={styles.anhtext}> Chụp ảnh</Text>
                </View>
                </Pressable>
                <Pressable  onPress={() => {}}>               
                <View style={styles.chupanh}>
                    <View style={styles.chupContainer}>
                        <Image
                            source={require('../../../assets/Profile1/picture.png')}
                            style={styles.Chup}
                        /></View>
                    <Text style={styles.anhtext}> Chọn ảnh</Text>
                </View>
                </Pressable>
            </View>
            <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Lưu</Text>
            </Pressable>
            <BottomNavigation />
        </View>
    )
}
const styles = StyleSheet.create({
    profilepage: {
        backgroundColor: "#87cbf0",
        flex: 1,
        overflow: "hidden",
        width: "100%",
        marginTop: 20,
    },
    Headercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'center',
        paddingTop: 10,
        paddingLeft: 10,
        //padding: 10,
    },
    backIcon: {
        width: 40,
        height: 40,
        marginRight: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "yellow",
        width: "30%",
        borderRadius: 10,
        height: 30,
        justifyContent: 'center',

    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#736e6e',
        marginTop: 15,
        marginBottom: 10,
        width: "90%",
        alignSelf: "center",
    },
    Imagecontainer: {
        margin: 40,
        width: 300,
        height: 300,
        backgroundColor: "#D9D9D9",
        alignSelf: "center",
        justifyContent: "center",
    },
    ImageCircle: {
        width: 270,
        height: 270,
        borderRadius: 135,
        backgroundColor: "white",
        alignSelf: "center",
    },
    Selectcontainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: 10,
    },
    Chup:{
        width: 80,
        height: 80,
    },
    chupanh:{
        marginHorizontal: 30,
    },
    anhtext:{
        alignSelf: "center",
        fontSize: 18,
    },
    chupContainer:{
        backgroundColor: "white",
        marginBottom: 10,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      slider: {
        width: '80%',
      },
      sliderValue: {
        marginTop: 5,
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
      },
});        