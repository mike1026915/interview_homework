import React from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};

export default function Header(props) {

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Typography variant="h5">
                            Campaign Invoice System
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Box
                sx={{
                    minHeight: (theme) => ({ ...theme.mixins.toolbar }),
                }}
            />
        </>
    )
}