import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingStars = ({ rating }) => {
  const starIcons = [];

  for (let i = 0; i < 5; i++) {
    starIcons.push(
      <Icon
        name={i < rating ? 'star' : 'star-o'}
        size={25}
        color={i < rating ? 'gold' : 'gray'}
        key={i}
      />
    );
  }

  return <View style={{ flexDirection: 'row'}}>{starIcons}</View>;
};

export default RatingStars;