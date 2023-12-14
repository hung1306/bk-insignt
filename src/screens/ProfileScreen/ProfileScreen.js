import { StyleSheet, View, Text, Image, Pressable, ScrollView } from "react-native";
import { fontFamily, Color, FontSize, Border, Padding } from "../../../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
export const ProfileScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={[styles.profilepage]}>
            <View style={[styles.profile]}>
                <Image
                    style={[styles.profileImage]}
                    resizeMode="cover"
                    source={require("../../../assets/Profile1/avatar.png")}
                />
                <Text style={[styles.profileName]}>
                    Nguyễn Tuấn Anh
                </Text>
            </View>
            <View style={styles.settingsContainer}>
                <ScrollView contentContainerStyle={styles.settingsList}>
                    <Pressable style={[]} onPress={() => { }}>
                        <View style={styles.settingItem}>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/vector3.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon}
                            />
                            <Text style={styles.settingText}>Thông tin cá nhân</Text>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/vector.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon2}
                            />
                        </View>
                    </Pressable>
                    <View style={styles.separator} />
                    <Pressable style={[]} onPress={() => { }}>
                        <View style={styles.settingItem}>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/lock.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon}
                            />
                            <Text style={styles.settingText}>Thay đổi mật khẩu</Text>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/vector.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon2}
                            />
                        </View>
                    </Pressable>
                    <View style={styles.separator} />
                    <Pressable style={[]} onPress={() => { }}>
                        <View style={styles.settingItem}>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/settings.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon}
                            />
                            <Text style={styles.settingText}>Thông báo</Text>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/vector.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon2}
                            />
                        </View>
                    </Pressable>
                    <View style={styles.separator} />
                    <Pressable style={[]} onPress={() => { }}>
                        <View style={styles.settingItem}>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/group.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon}
                            />
                            <Text style={styles.settingText}>Bảo mật</Text>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/vector.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon2}
                            />
                        </View>
                    </Pressable>
                    <View style={styles.separator} />
                    <Pressable style={[]} onPress={() => { }}>
                        <View style={styles.settingItem}>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/vector2.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon}
                            />
                            <Text style={styles.settingText}>Liên hệ</Text>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/vector.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon2}
                            />
                        </View>
                    </Pressable>
                    <View style={styles.separator} />
                    <Pressable style={[]} onPress={() => { }}>
                        <View style={styles.settingItem}>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/vector1.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon}
                            />
                            <Text style={styles.settingText}>Đăng xuất</Text>
                            <Image
                                resizeMode="cover"
                                source={require('../../../assets/Profile1/vector.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon2}
                            />
                        </View>
                    </Pressable>
                </ScrollView>
            </View>

            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require("../../../assets/Home/vector1.png")}
                        style={styles.icon}
                    />
                </Pressable>
                <Pressable onPress={() => { }}>
                    <Image
                        source={require("../../../assets/Home/vector2.png")}
                        style={styles.icon}
                    />
                </Pressable>
                <Pressable onPress={() => { }}>
                    <Image
                        source={require("../../../assets/Home/vector3.png")}
                        style={styles.icon}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Profile')}>
                    <Image
                        source={require("../../../assets/Home/union1.png")}
                        style={styles.icon}
                    />
                </Pressable>
            </View>
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
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    settingsContainer: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        borderRadius: 40,
        width: "90%",
    },
    settingsList: {
        marginTop: 15,
        marginBottom: 20,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //marginBottom: 10,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginTop: 15,
        marginBottom: 10,
    },
    settingIcon: {
        width: 30,
        height: 30,
        marginRight: 10,
        marginTop: 5,
    },
    settingIcon2: {
        width: 20,
        height: 30,
    },
    settingText: {
        flex: 1,
        fontSize: 20,
    },
});        