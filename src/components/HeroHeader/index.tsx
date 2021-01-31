import React from 'react';
import { Container, Img, AvatarArea } from './styles';
import Avatar from '../Avatar/index';

export interface HeaderProps {
    image?:string
}


const Header = ({image}:HeaderProps) => {
    const img = image ? image : require('../../assets/imgs/avatar-demo.png');
    return (
        <Container>
            <Img source={require('../../assets/imgs/header.jpg')}></Img>
            <AvatarArea>
                <Avatar
                    imageUrl={img}
                    size={150}
                    border={4}
                />
            </AvatarArea>

        </Container>
    )
}

export default Header;