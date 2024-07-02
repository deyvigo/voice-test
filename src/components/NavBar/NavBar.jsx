import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { DropMenu } from "./DropMenu";
import LogoutIcon from '@mui/icons-material/Logout';

export const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const name = localStorage.getItem('name');
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleMenuOpen}
                >
                    <MenuIcon />
                </IconButton>
                <Typography 
                    variant="h6" 
                    component="span" 
                    sx={{ 
                        flexGrow: 1, 
                        fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } 
                    }}
                >
                    CROWDFUNDING
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography 
                        variant="h6" 
                        component="span" 
                        sx={{ 
                            mr: 3, 
                            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } 
                        }}
                    >
                        { name ? name : '' }
                    </Typography>
                    <Button 
                        color="inherit" 
                        startIcon={<LogoutIcon />} 
                        sx={{ 
                            mb: 0.2, 
                            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' }, 
                            width: { xs: '5rem', sm: '12rem'}
                        }}
                    >
                        Cerrar sesión
                    </Button>
                </Box>
                <DropMenu anchorEl={anchorEl} open={open} handleMenuClose={handleMenuClose} />
            </Toolbar>
        </AppBar>
    );
}
