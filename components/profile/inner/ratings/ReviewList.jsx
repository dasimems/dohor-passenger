import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { reviews } from '../../../../data/ratingData';
import ReviewCard from './ReviewCard';
import { blackColor } from '../../../../assets/colors';

const ReviewList = ({ style }) => {
  return (
    <View
      style={{
        ...style
      }}
    >
      {reviews.map(({name, image, rate, review }, index)=>(
        <ReviewCard name={name} image={image} review={review} rate={rate} key={index} style={{
            borderBottomWidth: index !== reviews.length - 1? 1 : 0,
            borderBottomColor: index !== reviews.length - 1? blackColor.opacity100 : "transparent",

        }} />
      ))}
    </View>
  );
};

export default ReviewList

const styles = StyleSheet.create({})