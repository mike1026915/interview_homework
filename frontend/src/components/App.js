import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles';

import { fetchCampaigns } from '../features/campaignSlice';
import { fetchLineItems } from '../features/lineItemSlice';

import theme from '../theme/Theme';
import Header from './Header.react'

function App() {
    const dispatch = useDispatch()
    const campaigns = useSelector(state => state.campaign.campaigns)

    useEffect(() => {
        dispatch(fetchCampaigns());
        dispatch(fetchLineItems());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}r>
            <Header />
            {String(campaigns)}
        </ThemeProvider>
    );
}

export default App;
