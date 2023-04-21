import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StarHalfIcon, StarIcon } from '../../assets/icons';

const Stars = ({active, total, activeColor, nonActiveColor, starSize, style}) => {
  if(!total){
    total = 5;
  }

  if(!starSize){
    starSize = 17;
  }


  if(!activeColor){
    activeColor = "#FDCD03";
  }

  if(!nonActiveColor){
    nonActiveColor = "#E2E2E2";
  }


  const [stars, setStars] = useState([])

  useEffect(()=>{

    const starArr = [];
    let count = 0;

    for (var i = 0; i < total; i++){
      var presentStarCount = active-count;
      if(presentStarCount > 0){

        if (presentStarCount > 1){

          starArr.push(<StarIcon key={i} set="bold" color={activeColor} size={starSize} />)
        }else{

          starArr.push(<StarHalfIcon key={i} color={activeColor} size={starSize} />)
        }
        

      }else{
        starArr.push(<StarIcon key={i} set="bold" color={nonActiveColor} size={starSize} />);
      }
      count++;
    }

    setStars(starArr);


  }, [active, total])
  return <View style={{
    flexDirection: "row",
    alignItems: "center",
    ...style
  }}>
      {stars}
    </View>;
}

export default Stars

const styles = StyleSheet.create({})