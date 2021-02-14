import axios from 'axios';

const api = axios.create({
    baseURL: 'https://60285b4ddd4afd001754b3ac.mockapi.io/'
})

export default api;