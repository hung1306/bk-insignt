import { StyleSheet, View, Text, Image, Pressable, TextInput, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
export const ChangePassScreen = () => {
    const navigation = useNavigation();
    const [curPass, setcurPass] = useState('');
    const [newPass, setnewPass] = useState('');
    const [confirmPass, setconfirmPass] = useState('');
    const [firstCon, setfirstCon] = useState(true);
    const [secondCon, setsecondCon] = useState(true);
    const handlefirstCon = () => {
        setfirstCon(!isfirstCon);
      };
      const handlesecondCon = () => {
        setsecondCon(!isecondCon);
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
                    <Text style={styles.headerText}>Thay đổi mật khẩu</Text>
                </View>
            </View>
            <View style={styles.separator} />
            <Text style={styles.alert}>Mật khẩu mới phải thay đổi so với mật khẩu cũ</Text>
            <View style={styles.container}>
                <Text style={styles.title}>Mật khẩu hiện tại</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        value={curPass}
                        onChangeText={setcurPass}
                    />

                </View>
                <Text style={styles.title}>Mật khẩu mới</Text>                
                <View style={styles.inputContainer}>

                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        value={newPass}
                        onChangeText={setnewPass}
                    />
                </View>
                <Text style={styles.title}>Xác nhận mật khẩu</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        value={confirmPass}
                        onChangeText={setconfirmPass}
                    />
                </View>
            </View>
            <View style={styles.confirm}>
            <View style={styles.confirmCon}>
            <Image
                        source={firstCon ? require('../../../assets/Profile1/check_mark.png') : require('../../../assets/Profile1/x_mark.png')}
                        style={styles.checkIcon}
                    />
            <Text>Độ dài mật khẩu tối thiểu 8 kí tự</Text>
            </View>
            <View style={styles.confirmCon}>
                <Image
                        source={secondCon ? require('../../../assets/Profile1/check_mark.png') : require('../../../assets/Profile1/x_mark.png')}
                        style={styles.checkIcon}
                    />
<Text>Mật khẩu bao gồm kí tự và số.</Text>
            </View>
            </View>
            <Pressable style={styles.buttonContainer} onPress={() => (firstCon && secondCon) ? navigation.navigate('Profile'):{}}>
                    <Text style={styles.buttonText}>Xác nhận</Text>
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
    container: {
        //backgroundColor: "white",
        width: "90%",
        padding: 20,
        alignSelf: "center",
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: -20,
    },
    inputContainer: {
        marginBottom: 10,
    },
    title: {
        fontSize:18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        fontSize:18,
        backgroundColor: "white",
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        borderRadius: 5,
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
    separator: {
        borderBottomWidth: 1,
        borderColor: '#736e6e',
        marginTop: 15,
        marginBottom: 10,
        width: "90%",
        alignSelf:"center",
    },
    alert:{
        alignSelf:"center",
        color:'#736e6e',
        fontSize: 16,
    },
    confirm:{
        marginHorizontal: 40,
        marginBottom: 15,
    },
    confirmCon:{
        marginVertical: 5,
        flexDirection: 'row',
    },
    checkIcon:{
        width:20,
        height: 20,
        marginRight: 10,
    }
});        