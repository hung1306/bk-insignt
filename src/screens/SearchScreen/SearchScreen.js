import { StyleSheet, View, Text, Image,  TextInput,Pressable,FlatList,TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { fontFamily, Color, FontSize, Border, Padding } from "../../../GlobalStyles";
const data = [
  { id: '1', text: 'HCMUT Football Club', image1: require('../../../assets/Search/logo.png'), image2: require('../../../assets/Search/3cham.png') },
];
const RowItem = ({ item }) => (
  <View style={styles.row}>
    <Image style={styles.image1} source={item.image1} />
    <Text>{item.text}</Text>
    <Image style={styles.image2} source={item.image2} />
  </View>
);
export const SearchScreen = () => {
    const navigation = useNavigation();
    const handleRowPress = () => {
      // Chỉ chuyển hướng đến trang mới nếu đây là hàng đầu tiên
      
        navigation.navigate('InfoSearch');
      
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
   {/* <View>
   <View>
   <Image
                source={require('../../../assets/Search/logo.png')}
                style={styles.iconlogo}
        resizeMode="cover"
              />
              
   <Pressable
        style={styles.hcmutFootballClubContainer}
        onPress={() => navigation.navigate("InfoSearch")}
      >
        <Text style={styles.hcmutFootballClub}>HCMUT Football Club</Text>
      </Pressable>
   </View>
      <Text style={[styles.iXungKchContainer, styles.containerTypo]}>
        {`Đội Xung kích khoa `}Điện - Điện tử
      </Text>
      <Text style={[styles.cuLcBContainer, styles.containerTypo]}>
        Câu lạc bộ đá banh khoa Điện - Điện tử
      </Text>
      <Text style={[styles.cuLcBContainer, styles.containerTypo]}>
        Câu lạc bộ đá banh khoa Điện - Điện tử
      </Text>
      <Text style={[styles.thKhoaU, styles.containerTypo]}>
        Thủ khoa đầu vào năm 2023-2023
      </Text>
      <Text style={[styles.chngTrnhK, styles.containerTypo]}>
        Chương trình kỹ sư tài năng
      </Text>
      <Text style={[styles.lchNghTt, styles.containerTypo]}>
        Lịch nghỉ tết nguyên đán 2024
      </Text>
      
   </View> */}
   <TouchableOpacity onPress={handleRowPress}>
   {data.map((item) => (
        <RowItem key={item.id} item={item} />
      ))}
   </TouchableOpacity>
      
     </View>
    )
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
      },

      image2: {
        width: 18,
        height: 10,
        right: 25,
        resizeMode: 'cover',
      },


    


      
      
})