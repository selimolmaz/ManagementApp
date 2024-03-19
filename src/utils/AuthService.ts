import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001';

async function postUserData(email: string, password: string): Promise<boolean> {
    const data = {
        email: email,
        password: password
    };

    try {
        const response = await axios.post(API_BASE_URL + "/users/login", data);
        console.log('Response:', response.data);
        return response.data
    } catch (error) {
        console.error('Error:', error);
        return false
    }
}

export default postUserData;