import React from "react";
import Style from "./styles";

export interface AvatarProps {
  imageUrl?: string,
  size?: number,
  border?: number
}

const Avatar = ({ imageUrl, size, border }: AvatarProps) => {
  console.log("TEST-3",imageUrl);
  
  const img = imageUrl ? {uri:imageUrl} : require('../../assets/imgs/avatar-demo.png') ;
  return (
    <Style.Wrapper >
      <Style.Image source={img} size={size} border={border}/>
    </Style.Wrapper>
  )
}

export default Avatar;