import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getCurrencyRate as getCurrencyRateAction
} from '../apis/currencyApi';

export const getCurrencyRate = createAsyncThunk('app/getCurrencyRate', getCurrencyRateAction);
export const appSlice = createSlice({
    name: 'app',
    initialState: {
        currentCurrency: 'USD',
        usdToCurrentCurrencyRate: 1,

    },
    reducers: {
        setCurrency: (state, action) => {
            state.currentCurrency = action.payload;
        }
    },
    extraReducers: {
        [getCurrencyRate.fulfilled]: (state, action) => {
            if (state.currentCurrency === 'EUR') {
                state.usdToCurrentCurrencyRate = action.payload?.['EUR'];
            } else {
                state.usdToCurrentCurrencyRate = 1;

            }
        },
    }
});

export const { setCurrency } = appSlice.actions;
export default appSlice.reducer;