import React from 'react';
import Style from './styles';
import Avatar from '../Avatar';
import { useNavigation } from '@react-navigation/native';

const HeroForList = (hero:any) => {
    console.log("HERO",hero.hero);
    
    const navigation = useNavigation();

    const goToPage = (page:string) => {
        navigation.navigate(page, {heroId:hero.hero.id});
    }

    return (
        <Style.Hero onPress={() => goToPage('HeroDetails')}>
            <Avatar
                imageUrl={hero.hero.thumbnail.path+"."+hero.hero.thumbnail.extension}
                size={60}
                border={1}
            />
            <Style.NameArea>
                <Style.NameText>{hero.hero.name}</Style.NameText>
            </Style.NameArea>
        </Style.Hero>
    )
}

export default HeroForList;