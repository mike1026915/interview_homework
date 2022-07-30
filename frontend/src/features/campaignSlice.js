import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCampaigns } from '../apis/campaignApi';

export const fetchCampaigns = createAsyncThunk('campaign/getCampaigns', getCampaigns);

export const campaignSlice = createSlice({
    name: 'campaign',
    initialState: {
        campaigns: []
    },
    reducers: {
    },
    extraReducers: {
        [fetchCampaigns.fulfilled]: (state, action) => {
            state.campaigns = action.payload;
        }
    }
});

export default campaignSlice.reducer