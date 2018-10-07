import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-48969.firebaseio.com/'
});

export default instance;