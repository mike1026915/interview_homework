import React, { useState, useCallback } from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

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

const pages = ['Campaigns', 'Invoices'];

export default function Header(props) {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = useCallback((event) => {
        setAnchorElNav(event.currentTarget);
    }, []);

    const handleCloseNavMenu = useCallback(() => {
        setAnchorElNav(null);
    }, []);

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Typography
                            variant="h5"
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                letterSpacing: ".05rem",
                                color: "inherit",
                                textDecoration: "none"
                            }}
                        >
                            Campaign Invoice System
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                            <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left"
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left"
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" }
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">
                                            {page}
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h5"
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: "flex", md: "none" },
                                flexGrow: 1,
                                letterSpacing: ".05rem",
                                color: "inherit",
                                textDecoration: "none"
                            }}
                        >
                            Campaign Invoice System
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {page}
                            </Button>
                            ))}
                        </Box>
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