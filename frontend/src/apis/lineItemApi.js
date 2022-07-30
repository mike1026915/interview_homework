import axios from 'axios';

import { URL_HOST } from '../constants/'

export const getLineItems = async () => {
    const response = await axios.get(`${URL_HOST}/items`);

    return response.data;
}
