import axios from 'axios';
import {Md5} from 'md5-typescript';

const config = require('../config/config.json');

const getAllHeros = (filter:any = {}) => {
    const request = {params : queryParams(filter)};
        return axios.get(`${config.urlBase}/characters`, request).then((data) => {
        return data;
    }).catch(error => {
        console.log("ERROR", error.response);
        return error.response;
    });
}

const getHero = (heroId:number) => {
    const request = {params :queryParams({})};
    return axios.get(`${config.urlBase}/characters/${heroId}`, request).then(data => {
        return data;
    }).catch(error => {
        console.log("ERROR", error.response);
        return error.response;
    });
}

const queryParams = (params:any) => {
    params.ts = config.time;
    params.apikey = config.publicKey;
    params.hash = Md5.init(config.time+config.privateKey+config.publicKey);
    return params
}

 export default { getAllHeros, getHero }