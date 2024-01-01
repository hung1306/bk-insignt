import { StyleSheet, View, Text, Image,  TextInput,Pressable,FlatList,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { fontFamily, Color, FontSize, Border, Padding } from "../../../GlobalStyles";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const data = [
  { id: '1', text: 'HCMUT Football Club', image1: require('../../../assets/Search/logo.png') },
  { id: '2', text: 'Đội xung kích khoa điện - điện tử', image1: require('../../../assets/Search/dxkddt.png') },
  { id: '3', text: 'CLB đá banh khoa Điện -điện tử', image1: require('../../../assets/Search/dabanhddt.png') },
  { id: '4', text: 'Thủ khoa đầu vào năm 2023', image1: require('../../../assets/Search/thukhoa.png')},
  { id: '5', text: 'Chương trình kỹ sư tài năng', image1: require('../../../assets/Search/kstn.png') },
  { id: '6', text: 'Lịch nghỉ tết nguyên đán 2024', image1: require('../../../assets/Search/lichnghi.png') },
];
const Stack = createStackNavigator();

export const SearchScreen = () => {
    const navigation = useNavigation();
    const [searchKeyword, setSearchKeyword] = useState("");
    const filteredData = data.filter(item =>
      item.text.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    const isSearching = searchKeyword !== '';
    const displayedData = searchKeyword ? filteredData : data;
    const handleItemPress = (item) => {
   
      if (item.id === '1') {
        navigation.navigate('InfoSearch', { itemId: item.id });
      } else if (item.id === '2') {
        navigation.navigate('InfoSearch2', { itemId: item.id });
      } else if (item.id === '3') {
        navigation.navigate('InfoSearch3', { itemId: item.id });
      }
    };
    

    return (
      
     <View>
           <View  style={styles.container}>
      <View style={styles.headerContainer}>
    
      <Pressable style={[styles.backIconCon]} onPress={() => navigation.navigate('Home')}>
                    <Image
                        source={require('../../../assets/Profile1/frame-18.png')}
                        style={styles.backIcon}
                    />
                </Pressable>
        <View style={styles.searchContainer}>
          <Image
            style={styles.searchIcon}
            resizeMode="cover"
            source={require('../../../assets/Home/image-4.png')}
          />
           <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm"
        placeholderTextColor="#888"
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />
        </View>
        

      </View>
      
    </View>
    <View style={styles.actionButtonsContainer}>
    <Pressable onPress={() => console.log('Pressed Gần đây')}>
          <Text style={styles.actionButton}>Gần đây</Text>
        </Pressable>
        <Pressable onPress={() => console.log('Pressed Xem tất cả')}>
          <Text style={styles.action2Button}>Xem tất cả</Text>
        </Pressable>
    </View>
    {isSearching ? (
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleItemPress(item)}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 25,top:30 }}>
                <Image source={item.image1} style={styles.image1} />
                <Text style={styles.itemText}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      ) : (
        <View>
          {data.map(item => (
            <TouchableOpacity key={item.id} onPress={() => handleItemPress(item)}>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10,top:30 }}>
                <Image source={item.image1} style={styles.image1} />
                <Text style={styles.itemText}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}


     </View>
    )
    console.log(displayedData);

}
const styles = StyleSheet.create({
   
    container: {
     
        backgroundColor: '#87cbf0',
      
      },
      headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
      },
      backIcon: {
        width: 40,
        height: 40,
        marginRight: 20,
    },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 5,
        flex: 1,
      },
      searchIcon: {
        width: 20,
        height: 20,
        marginRight: 10,
        tintColor: '#888',
      },
      searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
      },
      vectorParent: {
        marginLeft: -197.5,
        top: 13,
        justifyContent: "flex-end",
        paddingLeft: Padding.p_3xs,
        paddingRight: 5,
        alignItems: "center",
      },
      vectorParentShadowBox: {
        shadowOpacity: 1,
        elevation: 4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowColor: "rgba(0, 0, 0, 0.25)",
        flexDirection: "row",
        left: "50%",
        position: "absolute",
      },  
      actionButton: {
        top: 20,
       left: 25,
        fontSize: 18,
        
      },
      action2Button: {
        top: 20,
        fontSize: 18,
        right:25,
        color:'#87cbf0',

        
      },
      actionButtonsContainer: {
        flexDirection: 'row', // Add row direction
        justifyContent: 'space-between', // Space evenly
        marginBottom: 5, // Add margin bottom
      },
      hcmutFootballClubContainer: {
        left: 118,
        top: 30,
        position: "absolute",
      },
      hcmutFootballClub: {
        height: 36,
        width: 253,
        textAlign: "left",
        color: Color.lightLabelPrimary,
        fontSize:18,
      },
      cuLcBContainer: {
        top: 136,
      },
      containerTypo: {
        height: 58,
        left: 116,
        width: 253,
        textAlign: "left",
        color: Color.lightLabelPrimary,
      
        fontSize: FontSize.size_xl,
        position: "absolute",
      },
      iXungKchContainer: {
        top: 86,
      },
      thKhoaU: {
        top: 186,
      },
      chngTrnhK: {
        top: 186+50,
      },
      lchNghTt: {
        top: 186+100,
      },
      iconlogo:{
        width:50,
        height:50,
        left: 35,
        top: 20,
      },
      row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        top:20,
      },
      image1: {
        width: 50,
        height: 50,
        left:30,
        resizeMode: 'cover',
        marginRight:60,
      },

      image2: {
        width: 18,
        height: 10,
        right: 25,
        resizeMode: 'cover',
      },


    


      
      
})