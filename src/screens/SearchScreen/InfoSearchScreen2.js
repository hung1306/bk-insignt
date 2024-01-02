import { StyleSheet, View, Text, Image, Pressable, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const InfoSearchScreen2 = () => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <View style={styles.column}>
          <Image style={styles.image} source={item.image1} />
        </View>
        <View style={styles.column}>
          <Text>{item.text}</Text>
        </View>
        <View style={styles.column}>
          <Image style={styles.image} source={item.image2} />
        </View>
      </View>
    );
    return (
        <View style={[styles.profilepage]}>
            <View style={styles.Headercontainer}>
                <Pressable style={[styles.backIconCon]} onPress={() => navigation.navigate('Search')}>
                    <Image
                        source={require('../../../assets/Profile1/frame-18.png')}
                        style={styles.backIcon}
                    />
                </Pressable>
                <View style={[styles.headerTextCon]}>
                    <Text style={styles.headerText}>Đội xung kích khoa Điện</Text>
                </View>
            </View>
            <View>
            <Text style={styles.hcmutFootballClub1}>Đội xung kích khoa Điện</Text>
            <Image
                source={require('../../../assets/Search/background2.png')}
                resizeMode="cover"
                style={styles.image53Icon}
              />
              <Image
                source={require('../../../assets/Search/dxkddt.png')}
                style={styles.image52Icon}
        resizeMode="cover"
              />
              <Image
        style={[styles.image55Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../../../assets/Search/icon1.png")}
      />
      <Image
        style={[styles.image56Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../../../assets/Search/icon2.png")}
      />
      <Image
        style={[styles.image57Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../../../assets/Search/icon3.png")}
      />
      <Image
        style={[styles.image58Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../../../assets/Search/icon4.png")}
      />
      <Image
        style={[styles.image59Icon, styles.iconLayout1]}
        resizeMode="cover"
        source={require("../../../assets/Search/icon5.png")}
      />
       <View>
       <Image
        style={[styles.image60Icon, styles.iconLayout2]}
        resizeMode="cover"
        source={require("../../../assets/Search/99plus.png")}
      />
       <Text style={styles.overlayText}>99+</Text>
       </View>
            </View>
            <View style={styles.settingsContainer}>
                <Text style={styles.chiTit}>Chi tiết</Text>
                <ScrollView contentContainerStyle={styles.settingsList}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>
                  
                    <View style={styles.settingItem}>
                    <Image 
                                resizeMode="cover"
                                source={require('../../../assets/Search/vector1.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon}
                            />
                        <View style={styles.text2Con}>
                        
                        <Text style={styles.settingText2}>Trang - Đội xung kích khoa điện</Text>                         
                        </View>        

                    </View>
                    <View  />
                    <View style={styles.settingItem}>
                    <Image 
                                resizeMode="cover"
                                source={require('../../../assets/Search/vector2.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon}
                            />
                        <View style={styles.text2Con}>
                        <Text style={[styles.settingText2, { color: '#0077cc' }]}>028 368 7256</Text>                            
                        </View>

                    </View>
                    <View  />
                    <View style={styles.settingItem}>
                    <Image 
                                resizeMode="cover"
                                source={require('../../../assets/Search/vector3.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon}
                            />
                        <View style={styles.text2Con}>
                        <Text style={[styles.settingText2, { color: '#0077cc' }]}>ctctsv@hcmut.edu.vn</Text>                            
                        </View>

                    </View>
                    <View  />
                    <View style={styles.settingItem}>
                    <Image 
                                resizeMode="cover"
                                source={require('../../../assets/Search/vector4.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon}
                            />
                        <View style={styles.text2Con}>
                        <Text style={[styles.settingText2, { color: '#008000' }]}>Luôn mở cửa</Text>                           
                            </View>

                    </View>
                    <View  />
                    <View style={styles.settingItem}>
                    <Image 
                                resizeMode="cover"
                                source={require('../../../assets/Search/vector5.png')} // Replace with the path or URL of your setting icon
                                style={styles.settingIcon}
                            />
                        <View style={styles.text2Con}>
                        <Text style={[styles.settingText2, { color: '#0077cc' }]}>dienhcmut.edu.vn</Text>                           
                            </View>

                    </View>
                </ScrollView>
            </View>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require("../../../assets/Home/vector1.png")}
                        style={styles.iconno1}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Calendar")}>
                    <Image
                        source={require("../../../assets/Home/vector2.png")}
                        style={styles.iconno2}
                    />
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Map")}>
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
        </View>
    )
}
const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
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
        marginTop: 20,
    },
    backIcon: {
        width: 40,
        height: 40,
        marginRight: 20,
    },
    headerText: {
        fontSize: 20,
 
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
    },  
    settingsContainer: {
        top:330,
        backgroundColor: '#fff',
      
   
      
    },
    settingsList: {
      
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    separator: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginTop: 3,
        marginBottom: 3,
    },
    settingIcon: {
        width: 25,
        height: 25,
        marginRight: 10,
        marginTop: 5,
        left: 25,
    },
    settingText1: {
        fontSize: 16,
        color: "#C3C3C3",
    },
    settingText2: {
        fontSize: 16,
        
    },
    text2Con:{
        width: 300,
       
        
    },
    chiTit: {
      fontSize: 20,
      left:25,
      },
      image53Icon: {
        top:10,
        left: -10,
        width: 444,
        height: 180,
        position: "absolute",
      },
      image52Icon: {
        marginTop: 100,
        top: "30%",
        left: 105,
        width: 170,
        height: 170,
        borderRadius: 90,
        position: "absolute",
      
      },
      image55Icon: {
        left:45,
      
      },
      image56Icon: {
        left: 95,
    
      },
      image57Icon: {
        left: 144,
      },
      image58Icon: {
        left: 197,
      },
      image59Icon: {
        left: 250,
        borderRadius: 282,
      },
      image60Icon: {
        left: 290,
        borderRadius: 282,
      },
      iconLayout1: {
        height: 60,
        width: 60,
        top:310,
        position: "absolute",
      },
      iconLayout2: {
        height: 65,
        width: 65,
        top:310,
        position: "absolute",
      },
      iconLayout: {
        borderRadius: 90,
        height: 60,
        width: 60,
        top:310,
      
        position: "absolute",
      },
      hcmutFootballClub1: {
        top: 280,
        left: 50,

        textAlign: "center",
        width: 274,
        height: 48,
        fontSize:22,  
        position: "absolute",
      },
      overlayText: {
        left:293,     
        top: 315,
        fontSize:22,
        padding: 10,   
                  // Khoảng cách giữa văn bản và mép hình ảnh
      }
})