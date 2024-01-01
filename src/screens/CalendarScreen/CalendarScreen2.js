import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { fontFamily, Color, FontSize, Border } from "../../../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation';


const CalendarScreen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <View style={[styles.T]}>
            <Pressable onPress={() => navigation.navigate('Calendar')}>
                <Image
                    source={require("../../../assets/Profile1/frame-18.png")}
                    style={styles.muiten}
                />
            </Pressable>
            <Text style={styles.newssSectionTitle}>Sự kiện nổi bật</Text>
        </View>
        <View style={[styles.Tinblock]}>
                <Pressable onPress={() => navigation.navigate('Calendar3')}>      
                    <View style={[styles.Tin1]}>
                        <Image
                        style={[styles.imagetin1]}
                        resizeMode="cover"
                        source={require("../../../assets/Home/image-60.png")}
                        />
                    <Text style={[styles.tin1Container, styles.thngTypo]}>
                            Thông báo tuyển thành viên câu lạc bộ bóng đá ngày 20/08/2023 để chuẩn bị cho giải đấu Báo Thanh Niên 2024 sân 11 tổ chức...
                    </Text>
                    </View>     
                </Pressable>
                <View style={[styles.line]}></View>
                <Pressable onPress={() => navigation.navigate('Calendar3')}>      
                    <View style={[styles.Tin2]}>
                    <Text style={[styles.tin2Container, styles.thngTypo]}>
                        Học bổng do công ty BOOSCH tài trợ lên đến 100 triệu đồng dành cho các học sinh có thành tích học tập xuất sắc và ... 
                    </Text> 
                    
                    <Image 
                        style={[styles.imagetin2]}
                        resizeMode="cover"
                        source={require("../../../assets/Home/image-61.jpg")}
                    />
                    </View>     
                </Pressable>
                <View style={[styles.line2]}></View>
                <Pressable onPress={() => navigation.navigate('Calendar3')}>      
                    <View style={[styles.Tin3]}>
                        <Image
                        style={[styles.imagetin3]}
                        resizeMode="cover"
                        source={require("../../../assets/Home/image-62.jpg")}
                        />
                    <Text style={[styles.tin3Container, styles.thngTypo]}>
                            Thông báo tất cả sinh viên toàn trường tất cả các khóa tham gia sinh hoạt công dân HK231, đối với K20 sẽ tham gia vào ngày...
                    </Text>
                    </View>     
                </Pressable>
                <View style={[styles.line3]}></View>
                <Pressable onPress={() => navigation.navigate('Calendar3')}>      
                    <View style={[styles.Tin4]}>
                    <Text style={[styles.tin4Container, styles.thngTypo]}>
                        Chương trình đào tạo thạc sĩ dành cho sinh viên có GPA từ 7.0 trở lên với nhiều lợi ích cùng con đường học tập rõ ràng... 
                    </Text> 
                    
                    <Image 
                        style={[styles.imagetin4]}
                        resizeMode="cover"
                        source={require("../../../assets/Home/image-63.png")}
                    />
                    </View>     
                </Pressable>
            </View>
            <BottomNavigation />
        
    </View>
  );
};

const styles = StyleSheet.create({
    T:{
        flexDirection: 'row',
        height: 65,
        
    },
    newssSectionTitle:{
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 21,
        marginLeft: 30,
        marginBottom: 10,
    },
    muiten:{
        top: 20,
        left: 10,
        width: 38,
        height: 38,
    },
    container: {
        flex: 1,   
        backgroundColor: '#87cbf0',   
      },
      Tinblock:{
        top: 8,
        backgroundColor: 'white', 
        height: 530 ,
      },
      Tin1: {
        top: 13,
        flexDirection: 'row',
      },
      imagetin1: {
        left: 10,
        width: 150,
        borderRadius: Border.br_3xs,
        height: 95,
      },
      tin1Container: {
        left: 17,
        color: "rgba(0, 0, 0, 0.7)",
        width: 200,
        height: 105,
      },
      thngTypo: {
        textAlign: "justify",
        fontSize: 16,
      },
      Tin2: {
        top: 30,
        flexDirection: 'row',
      },
      tin2Container: {
        left: 10,
        color: "rgba(0, 0, 0, 0.7)",
        width: 200,
        height: 105,
      },
      imagetin2: {
        left: 17,
        width: 150,
        borderRadius: Border.br_3xs,
        height: 95,
      },
      line:{
        top: 20,
        height: 1,
        backgroundColor: "#77787b",
        alignSelf: 'center',
        width: "90%",
      },
      line2:{
        top: 32,
        height: 1,
        backgroundColor: "#77787b",
        alignSelf: 'center',
        width: "90%",
      },
      Tin3: {
        top: 50,
        flexDirection: 'row',
      },
      imagetin3: {
        left: 10,
        width: 150,
        borderRadius: Border.br_3xs,
        height: 90,
      },
      tin3Container: {
        left: 17,
        color: "rgba(0, 0, 0, 0.7)",
        width: 200,
        height: 105,
      },
      line3:{
        top: 45,
        height: 1,
        backgroundColor: "#77787b",
        alignSelf: 'center',
        width: "90%",},
      Tin4: {
        top: 60,
        flexDirection: 'row',
      },
      tin4Container: {
        left: 10,
        color: "rgba(0, 0, 0, 0.7)",
        width: 200,
        height: 105,
      },
      imagetin4: {
        left: 17,
        width: 150,
        borderRadius: Border.br_3xs,
        height: 95,
      },
      container1: {
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

});

export default CalendarScreen2;



