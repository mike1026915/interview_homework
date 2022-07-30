import axios from 'axios';

import { URL_HOST } from '../constants'

export const getLineItems = async () => {
    const response = await axios.get(`${URL_HOST}/line-items`);

    return response.data;
}

export const getLineItemsByCampaignId = async (campaignId) => {
    const response = await axios.get(`${URL_HOST}/line-items/${campaignId}`);

    return response.data;
}