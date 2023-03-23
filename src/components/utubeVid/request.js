import axios from "axios";
const KEY = 'AIzaSyD0MYlft1mDHdP6kMWgMxpCykB2eZO1FEo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})