import styled from "styled-components/native";

const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Area = styled.View`
    height: 100%;
    width: 100%;
`;

const HeaderArea = styled.View`
    width: 100%;
    height:30%;
`;

const HeroInfo = styled.View`
    padding:75px 15px;
    height:80%;
`;

const Name = styled.Text`
    font-size:25px;
    margin: auto;
`;

const Title = styled.Text`
    padding-top: 15px;
    font-size:18px;
    font-weight: 700;
    text-transform: uppercase;
`;

const Description = styled.Text`
    padding-top:5px;
    padding-bottom: 25px;
    font-size:16px;
    text-align: justify;
`;

const Info = styled.View`
`;

const TextInfo = styled.Text`
    font-size: 13px;
    padding-bottom:5px;
`;

const ScrollView = styled.ScrollView`
    height:100%;
`;

export default {
    Container,
    HeaderArea,
    HeroInfo,
    Name,
    Description,
    Title,
    Info,
    TextInfo,
    Area,
    ScrollView
};