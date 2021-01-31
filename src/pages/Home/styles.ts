import styled from "styled-components/native";

const Container = styled.SafeAreaView`
    flex:1;
`;

const Main = styled.View`
    flex-direction: column;
    flex:9;
`;

const Pagination = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex:1;
    border-top-color: #D42026;
    border-top-width: 1px;
`;

const TouchableOpacity = styled.TouchableOpacity`
    padding: 10px;
`;

const PaginationText = styled.Text`
    font-size: 20px;
    color: ${(props:any) => props.color ? props.color : null};
`;

const PaginationArea = styled.View`
    border: 1px solid #D42026;
    padding: 5px;
    height: 40px;
    width: 40px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    background: ${(props:any) => props.background ? props.background : null};
`;

const Header = styled.View`
    height: 40px;
    width: 100%;
    background:#D42026;
`;

const HeaderText = styled.Text`
    color: white;
    padding-left: 100px;
    font-size: 16px;
    flex-direction:column;
    margin-top: auto;
    margin-bottom: auto;
`;

const SearchContainer = styled.View`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom:12px;
    padding-top: 5px;
    flex-direction: row;
    justify-content: space-between;
`;

const SearchInput = styled.TextInput`
    background: white;
    padding-left: 20px;
    height: 40px;
    border-radius: 10px;
    font-size: 16px;
    width: 90%;
    border: 1px solid gray;
`;

const SearchPlaceholder = styled.Text`
    font-size: 16px;
    color:#D42026;
    padding-left: 25px;
    margin-top: 12px;
`;

const TitleContainer = styled.View`
    flex-direction: row;
    padding-left: 20px;
    padding-top: 12px;
`;

const TitleFirst = styled.Text`
    font-size: 16px;
    color:#D42026;
    opacity: 1;
    font-weight: 800;
    text-transform: uppercase;
    border-bottom-color: #D42026;
    border-bottom-width: 1px;
`;

const TitleSecond = styled.Text`
    font-size: 16px;
    color:#D42026;
    text-transform: uppercase;
`;

const FlatList = styled.FlatList`
`;

export default {
    Container,
    Header,
    HeaderText,
    SearchContainer,
    SearchInput,
    SearchPlaceholder,
    TitleContainer,
    TitleFirst,
    TitleSecond,
    FlatList,
    Pagination,
    Main,
    TouchableOpacity,
    PaginationText,
    PaginationArea,
};