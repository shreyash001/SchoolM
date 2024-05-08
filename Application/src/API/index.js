import axios from 'axios';
import { Alert } from 'react-native';

const API = axios.create({ baseURL: 'http://192.168.162.159:8082/' });

export const userLoginApi = async (data) => {
    try {
        const response = await API.post('user/login', data);
        return response.data;
        // console.log(response.data)
    } catch (error) {
        // Handle error
        // console.log(error.toJSON().status)
        if (error.toJSON().status === 401) Alert.alert('User Not Found', 'Check your userId and CCode before trying again');
        else if (error.toJSON().status === 500) Alert.alert('Internal Server Error', 'An error occurred while processing your request.');
        else if (error.toJSON().status === 302) Alert.alert('User Found', 'Invalid Password');
        else Alert.alert('Error',"Error")
        
        // throw error; // Rethrow the error to propagate it to the caller
    }
};
