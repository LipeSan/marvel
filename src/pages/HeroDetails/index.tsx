import React, { useEffect, useState } from 'react';
import Style from './styles';
import HeroHeader from '../../components/HeroHeader';
import API from '../../services/marvel';
import { ActivityIndicator, ScrollView, Text } from 'react-native';


const HeroDetails = (navegations: any) => {
    const [characterId, setCharacterId] = useState(navegations.route.params.heroId);
    const [isLoading, setIsLoading] = useState(true);
    const [heroDetails, setHeroDetails] = useState<any>(null);

    useEffect(() => {
        getHero();
    }, []);

    const getHero = () => {
        API.getHero(characterId).then(data => {
            if (data.data.status === "Ok") {
                setHeroDetails(data.data.data.results[0]);
                console.log("***HERO***",);

            } else {
                //ERROR
            }
            setIsLoading(false);
        })
    }

    return (
        <Style.Container>
            {!isLoading
                ? <Style.Area>
                    <Style.HeaderArea>
                        <HeroHeader image={heroDetails.thumbnail.path + "." + heroDetails.thumbnail.extension} />
                    </Style.HeaderArea>
                    
                    <Style.HeroInfo>
                        <Style.Name>{heroDetails.name}</Style.Name>
                        <Style.ScrollView>
                            <Style.Info>
                                <Style.Title>Description</Style.Title>
                                <Style.Description>{heroDetails.description ? heroDetails.description : 'No description available!'}</Style.Description>
                                <Style.Title>Comics ({heroDetails.comics.available ? heroDetails.comics.available : 0})</Style.Title>
                                {heroDetails.comics.items.map((element: any) => (
                                    <Style.TextInfo>{element.name}</Style.TextInfo>
                                ))}

                                <Style.Title>Series ({heroDetails.series.available ? heroDetails.series.available : 0})</Style.Title>
                                {heroDetails.series.items.map((element: any) => (
                                    <Style.TextInfo>{element.name}</Style.TextInfo>
                                ))}

                                <Style.Title>Stories ({heroDetails.stories.available ? heroDetails.stories.available : 0})</Style.Title>
                                {heroDetails.stories.items.map((element: any) => (
                                    <Style.TextInfo>{element.name}</Style.TextInfo>
                                ))}

                                <Style.Title>Events ({heroDetails.events.available ? heroDetails.events.available : 0})</Style.Title>
                                {heroDetails.events.items.map((element: any) => (
                                    <Style.TextInfo>{element.name}</Style.TextInfo>
                                ))}
                            </Style.Info>
                        </Style.ScrollView>
                    </Style.HeroInfo>
                </Style.Area>
                : <ActivityIndicator size="large" />}
        </Style.Container>
    )
}

export default HeroDetails;