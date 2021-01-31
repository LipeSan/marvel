import styled from "styled-components/native";

const Hero = styled.TouchableOpacity`
    flex-direction: row;
    padding:18px;
    border-bottom-color: #D42026;
    border-bottom-width: 1px;

`;

const NameArea = styled.View`
    flex-direction:column;
    margin-top: auto;
    margin-bottom: auto;
    padding-left:12px;
`;

const NameText = styled.Text`
    font-size: 18px;
`;

export default {
    Hero,
    NameText,
    NameArea
};