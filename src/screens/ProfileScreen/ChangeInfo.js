import { StyleSheet, View, Text, Image, Pressable, TextInput, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
export const ChangeInfoScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [sex, setSex] = useState('');
    const [MSSV, setMSSV] = useState('');
    const [phone, setPhone] = useState('');

    const handleSaveProfile = () => {
        // Perform the logic to save the profile information
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Sex:', sex);
        console.log('MSSV:', MSSV);
        console.log('Phone:', phone);
    };
    return (
        <View style={[styles.profilepage]}>
            <View style={styles.Headercontainer}>
                <Pressable style={[styles.backIconCon]} onPress={() => navigation.navigate('Info')}>
                    <Image
                        source={require('../../../assets/Profile1/frame-18.png')}
                        style={styles.backIcon}
                    />
                </Pressable>
                <View style={[styles.headerTextCon]}>
                    <Text style={styles.headerText}>Thay đổi thông tin</Text>
                </View>
            </View>
            <View style={[styles.profile]}>
                <Pressable onPress={() => navigation.navigate('ChangeAvatar')}>
                <View style={[styles.profileCirlce]}>
                <Image
                    style={[styles.profileImage]}
                    resizeMode="cover"
                    source={require("../../../assets/Profile1/avatar.png")}
                />
                <Image
                    style={[styles.BottomLeftImage]}
                    resizeMode="cover"
                    source={require("../../../assets/Profile1/Camera.png")}
                />
                </View>
                </Pressable>
            </View>
            <View style={styles.container}>
            <View style={styles.changeTitle}>
                <Text style={styles.textTitle} >Thay đổi thông tin cá nhân</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Tên</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nguyễn Tuấn Anh"
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="tuananh@hcmut.edu.vn"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Giới tính</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nam"
                        value={name}
                        onChangeText={setSex}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>MSSV</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="20202002"
                        value={phone}
                        onChangeText={setMSSV}
                        keyboardType="phone-pad"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.title}>Số điện thoại</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="0987654321"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="phone-pad"
                    />
                </View>
            </View>
            <Pressable style={styles.buttonContainer} onPress={handleSaveProfile}>
                    <Text style={styles.buttonText}>Lưu</Text>
            </Pressable>
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
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileCirlce:{
        borderRadius: 50,
        marginTop: 5,
    }
    ,
    profileImage: {
        width: 100,
        height: 100,
    },
    BottomLeftImage:{
        width: 25,
        height: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: "white",
        width: "90%",
        padding: 20,
        alignSelf: "center",
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
    },
    buttonContainer:{
        alignSelf:"center",
        alignItems:"center",
        backgroundColor: "yellow",
        width: "30%",
        borderRadius: 10,
        height: 30,
        justifyContent: 'center',
        
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    changeTitle:{
        alignItems:"center",
        marginBottom: 10,
    },
    textTitle:{
        fontSize: 20,
        fontWeight: 'bold',
    }
});        