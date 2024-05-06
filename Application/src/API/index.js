import axios from 'axios';
import { Alert } from 'react-native';


// const API = axios.create({ baseURL: `${base}` });

const API = axios.create({ baseURL: 'http://192.168.52.159:8082' });
// const API = axios.create({ baseURL: 'http://192.168.51.147:8080' });

export const resturantRegisterApi = (data) => API.post('/restaurants', data).catch(function (error) {
    console.log(error.toJSON())
    Alert.alert('Error', 'Error')
})

