import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getCampaigns,
    getCampaignById,
} from '../apis/campaignApi';

export const fetchCampaigns = createAsyncThunk('campaign/getCampaigns', getCampaigns);
export const fetchCampaignById = createAsyncThunk('campaign/getCampaignById', getCampaignById);

export const campaignSlice = createSlice({
    name: 'campaign',
    initialState: {
        campaignLookup: {}
    },
    reducers: {
    },
    extraReducers: {
        [fetchCampaigns.fulfilled]: (state, action) => {
            state.campaignLookup = action.payload.reduce((lookup, campaign) => {
                lookup[campaign.id] = campaign;

                return lookup;
            }, {});
        },
        [fetchCampaignById.fulfilled]: (state, action) => {
            state.campaignLookup = action.payload.reduce((lookup, campaign) => {
                lookup[campaign.id] = campaign;

                return lookup;
            }, {});
        },
    }
});

export default campaignSlice.reducer