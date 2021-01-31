import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView, Text, TextInput, View } from 'react-native';
import Style from './styles';
import API from '../../services/marvel';
import HeroForList from '../../components/HeroForList';

import LeftIcon from '../../assets/imgs/left.svg';
import RightIcon from '../../assets/imgs/right.svg';
import SearchIcon from '../../assets/imgs/search.svg';

interface Pagination {
    previous: number,
    next: number,
    totalPage: number,
    current: number,
    totalRegister: number
}



const Home = () => {


    //VARIABLES
    const [heroList, setHeroList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [showPagination, setShowPagination] = useState(true);
    const [search, setSearch] = useState('');
    const [pagination, setPagination] = useState<Pagination>({ current: 1, previous: 0, next: 2, totalPage: 2, totalRegister: 0});

    useEffect(() => {
        getHeros(0);
    }, []);

    const getHeros = (page: number) => {
        if (page !== pagination.current) {
            setIsLoading(true);
            let offset = page * 20;
            API.getAllHeros({ offset: offset }).then(data => {
                if (data.data.status === "Ok") {
                    let pageAux = page;
                    let pageObject: Pagination = {
                        previous: pageAux - 1,
                        current: pageAux,
                        next: pageAux + 1,
                        totalPage: data.data.data.total / data.data.data.count,
                        totalRegister: data.data.data.total
                    }
                    setPagination(pageObject);
                    setHeroList(data.data.data.results);
                } else {
                    //ERROR
                }
                setIsLoading(false);
            });
        }
    }

    const getNewPage = (page: number) => {
        console.log("**** PAGINATION ****", page);
        getHeros(page);
    }

    const searchHero = () => {
        if (search !== '') {
            setShowPagination(false);
            setIsLoading(true);
            API.getAllHeros({ nameStartsWith: search, limit: 100 }).then(data => {
                if (data.data.status === "Ok") {
                    setHeroList(data.data.data.results);
                    setPagination({
                        previous: pagination.previous,
                        current: pagination.current,
                        next: pagination.next,
                        totalPage: pagination.totalPage,
                        totalRegister: data.data.data.total
                    })
                } else {
                    //ERROR
                }
                setIsLoading(false);
            });
        } else {
            setShowPagination(true);
            getHeros(pagination.current);
        }

    }

    const getPagination = () => {
        console.log("PAGE", pagination);
        if (pagination.totalPage >= 3) {
            if (showPagination) {
                return (
                    <Style.Pagination>
                        <Style.TouchableOpacity onPress={() => getNewPage(pagination.previous)}>
                            <LeftIcon width='24' height='24' fill={'#D42026'} />
                        </Style.TouchableOpacity>
                        {pagination.current <= 0
                            ? null
                            : <Style.TouchableOpacity onPress={() => getNewPage(pagination.previous)}>
                                <Style.PaginationArea background={'white'}>
                                    <Style.PaginationText color={'#D42026'}>{pagination.previous+1}</Style.PaginationText>
                                </Style.PaginationArea>

                            </Style.TouchableOpacity>}
                        <Style.TouchableOpacity onPress={() => getNewPage(pagination.current)}>
                            <Style.PaginationArea background={'#D42026'}>
                                <Style.PaginationText color={'white'}>{pagination.current+1}</Style.PaginationText>
                            </Style.PaginationArea>
                        </Style.TouchableOpacity>
                        {pagination.current === pagination.total
                            ? null
                            : <Style.TouchableOpacity onPress={() => getNewPage(pagination.next)}>
                                <Style.PaginationArea background={'white'}>
                                    <Style.PaginationText color={'#D42026'}>{pagination.next+1}</Style.PaginationText>
                                </Style.PaginationArea>
                            </Style.TouchableOpacity>}
                        <Style.TouchableOpacity onPress={() => getNewPage(pagination.next)}>
                            <RightIcon width='24' height='24' fill={'#D42026'} />
                        </Style.TouchableOpacity>
                    </Style.Pagination>
                )
            } else {
                return (<Style.Pagination><Style.PaginationText color={'#D42026'}>Encontrado {pagination.totalRegister} registro(s)</Style.PaginationText></Style.Pagination>)
            }
        }
    }


    return (
        <Style.Container>
            <Style.Main>
                <Style.TitleContainer>
                    <Style.TitleFirst>Busca Marvel</Style.TitleFirst>
                    <Style.TitleSecond>Test Front-End</Style.TitleSecond>
                </Style.TitleContainer>
                <Style.SearchPlaceholder>Nome do Personagem</Style.SearchPlaceholder>
                <Style.SearchContainer>
                    <Style.SearchInput value={search} onChangeText={(name: string) => setSearch(name)}></Style.SearchInput>
                    <Style.TouchableOpacity onPress={searchHero}>
                        <SearchIcon width='24' height='24' fill={'#D42026'} />
                    </Style.TouchableOpacity>
                </Style.SearchContainer>
                <Style.Header>
                    <Style.HeaderText>Nome</Style.HeaderText>
                </Style.Header>
                {isLoading ?
                    <ActivityIndicator size="large" />
                    : <ScrollView>
                        {heroList.map((element: any) => (
                            <HeroForList hero={element}></HeroForList>
                        ))}
                    </ScrollView>
                }
            </Style.Main>
            {getPagination()}
        </Style.Container>
    )
}

export default Home;