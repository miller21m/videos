import axios from 'axios';
const KEY = 'AIzaSyDQf0b5TmYzLsXGvaTTo0PaM8M_2Rnz9a0';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults: 5,
        key : `${KEY}`
    } 
});