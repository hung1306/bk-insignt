import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { fontFamily, Color, FontSize, Border, Padding } from "../../../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
import { Calendar } from '@ui-kitten/components';

const CalendarScreen = () => {
  const [date, setDate] = useState(new Date());
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
        <View style={[styles.T]}>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Image
                    source={require("../../../assets/Profile1/frame-18.png")}
                    style={styles.muiten}
                />
            </Pressable>
            <Text style={styles.newssSectionTitle}>Lịch hoạt động</Text>
        </View>
        <View style={styles.container}>
            <Calendar
                style={styles.calendar}
                date={date}
                onSelect={nextDate => {setDate(nextDate); navigation.navigate('Calendar2');}}
            />
            <Text style={styles.newsSectionTitle}>Tin tức & Sự kiện</Text>     
            <View style={[styles.Tinblock]}>
                <View style={[styles.Tin1]}>
                    <Image
                    style={[styles.imagetin1]}
                    resizeMode="cover"
                    source={require("../../../assets/Home/image-33.png")}
                    />
                <Text style={[styles.tin1Container, styles.thngTypo]}>
                        Thông báo tới tất cả học sinh ngày 
                        20/08/2023, thẻ sinh viên sẽ bị kiểm tra đột xuất một cách ngẫu nhiên để đảm bảo cho đợt thi...
                </Text>
                </View>
                <View style={[styles.line]}></View>
                <Pressable onPress={() => navigation.navigate('Calendar3')}>      
                    <View style={[styles.Tin2]}>
                    <Text style={[styles.tin2Container, styles.thngTypo]}>
                        Biện pháp phòng ngừa Covid 19 phải được tuân thủ trong toàn bộ khuôn viên một cách nghiêm ngặt và rõ ràng theo tư vấn... 
                    </Text> 
                    
                    <Image 
                        style={[styles.imagetin2]}
                        resizeMode="cover"
                        source={require("../../../assets/Home/image-34.jpg")}
                    />
                    </View>     
                </Pressable>
            </View> 
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
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87cbf0', 
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#e4e9f2',
    borderRadius: 40,
    marginLeft: 14,
    marginTop:10,
    backgroundColor: '#fff',
  },
  newssSectionTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 21,
    marginLeft: 30,
    marginBottom: 10,
  },
  newsSectionTitle: {
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 12,
    marginLeft: 36,
    marginBottom: 10,
  },
  Tinblock:{
    top: 8,
    backgroundColor: 'white', 
    height: 265 ,
  },
  Tin1: {
    top: 17,
    flexDirection: 'row',
  },
  imagetin1: {
    left: 10,
    width: 150,
    borderRadius: Border.br_3xs,
    height: 100,
  },
  tin1Container: {
    left: 17,
    color: "rgba(0, 0, 0, 0.7)",
    width: 200,
    height: 100,
  },
  thngTypo: {
    textAlign: "justify",
    fontSize: 16,
  },
  Tin2: {
    top: 40,
    flexDirection: 'row',
  },
  tin2Container: {
    left: 10,
    color: "rgba(0, 0, 0, 0.7)",
    width: 200,
    height: 100,
  },
  imagetin2: {
    left: 17,
    width: 150,
    borderRadius: Border.br_3xs,
    height: 100,
  },
  line:{
    top: 32,
    height: 1,
    backgroundColor: "#77787b",
    alignSelf: 'center',
    width: "90%",
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
T:{
    flexDirection: 'row',
    height: 65
},
muiten:{
    top: 20,
    left: 10,
    width: 38,
    height: 38,
}


});

export default CalendarScreen;



