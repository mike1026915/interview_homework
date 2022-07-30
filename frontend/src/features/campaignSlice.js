import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampaigns = createAsyncThunk('campaign/receiveCampaigns', async () => {
    const response = await fetch('http://localhost:3000/campaigns')
    const data = await response.text();

    return data;
})

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