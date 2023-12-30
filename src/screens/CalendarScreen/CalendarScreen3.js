import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable} from 'react-native';
import { fontFamily, Color, FontSize, Border } from "../../../GlobalStyles";
import { useNavigation } from '@react-navigation/native';


const CalendarScreen3 = () => {
  const navigation = useNavigation();
  return (
        <ScrollView style={styles.container}>
            <View style={[styles.T]}>
            <Pressable onPress={() => navigation.navigate('Calendar')}>
                <Image
                    source={require("../../../assets/Profile1/frame-18.png")}
                    style={styles.muiten}
                />
            </Pressable>
            </View>
            <Text style={[styles.TD]}>Các biện pháp phòng dịch, xử lý khi có ca COVID-19 tại trường học thế nào?</Text>
            <Text style={[styles.TT]}>17/02/2022 | 09:40 AM</Text>
            <Text style={[styles.TH]}>Thời gian qua, tại không ít các trường học đã xuất hiện các ca COVID-19 là học sinh. Vậy các nhà trường
            phải đảm bảo các biện pháp an toàn phòng chống dịch thế nào? Xử trí ra sao khi có học sinh, thầy cô giáo,... nghi mắc, mắc COVID-19?</Text>
            <Image
                style={[styles.image]}
                resizeMode="cover"
                source={require("../../../assets/Home/image-64.png")}
            />
            <Text style={[styles.TTT]}>Đẩy lùi Covid-19</Text>
            <Text style={[styles.TH]}>Trên thực tế cho thấy, thời gian qua, tại không ít trường học đã xuất hiện các ca COVID-19 là học sinh. Vậy các cơ 
            sở giáo dục phải đảm bảo các biện pháp an toàn phòng chống dịch theo hướng dẫn của Bộ Giáo dục và Đào tạo, Bộ Y tế ở tất cả các cấp độ dịch thế nào? </Text>
            <Text style={[styles.TH]}>Đối với lớp có học sinh mắc COVID-19: cho học sinh ngồi yên tại chỗ, tổ chức điều tra xác định các trường hợp F1 theo hướng dẫn 
            của ngành y tế. Tổ chức test kháng nguyên nhanh mẫu gộp cho toàn bộ học sinh của lớp đó. Cho học sinh di chuyển sang lớp học dự phòng và khử khuẩn toàn bộ lớp học. </Text>
            <Text style={[styles.TH]}>Nguồn: Suckhoedoisong.vn</Text>

            {/* <View style={styles.container1}>
                <Pressable onPress={() => navigation.navigate('Home')}>
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
                <Pressable onPress={() => { }}>
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
            </View> */}
        </ScrollView>
  );
};

const styles = StyleSheet.create({
    T:{
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#87cbf0'
        
    },
    muiten:{
        top: 17,
        left: 10,
        width: 38,
        height: 38,
    },
    TD:{
        fontSize:26,
        fontWeight:'bold',
        left:10,
        top:10,
    },
    TT:{
        top:18,
        left:40,
        fontSize:14
    },
    TH:{
        top:16,
        // left:10,
        fontSize:17,
        textAlign: 'justify',
        // right: 10,
        margin:10
    },
    image: {
        top: 15,
        left:10,
        width: 355,
        borderRadius: Border.br_3xs,
        height: 200,
    },
    TTT:{
        top:18,
        fontSize:12,
        textAlign:'center',
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

export default CalendarScreen3;