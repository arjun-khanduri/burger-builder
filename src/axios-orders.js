import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-e6fe7-default-rtdb.firebaseio.com/'
})

export default instance;