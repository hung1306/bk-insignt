import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Swiper from 'react-native-swiper';

const SlideShow = () => {
    const images = [
        'https://hcmut.edu.vn/img/news/-SXLgJZUKn1p4PrafUeV6II4.jpg',
        'https://scontent-hkg1-1.xx.fbcdn.net/v/t39.30808-6/405242442_361068713111198_6286829442679218388_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=D6_NyEoATq4AX-kdopY&_nc_ht=scontent-hkg1-1.xx&oh=00_AfA6WdL4DTKGzzwtLDDZAvQkO51xcKNmjdcAZbJM6eANIw&oe=6591A3BE',
        'https://fenr.hcmut.edu.vn/uploads/images/Tin%20tuc/2022_MHX_1.jpg'
    ];

    return (
        <View style={styles.container}>
            <Swiper style={styles.wrapper} loop={false} showsPagination={false}>
                {images.map((image, index) => (
                    <View key={index} style={styles.slide}>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                ))}
            </Swiper>
        </View>
    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 5,
    },
    wrapper: {
        height: 400
    },
    slide: {
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default SlideShow;
