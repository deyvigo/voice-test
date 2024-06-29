import { useState } from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from "react-router";
import Typography from '@mui/material/Typography';
import {DropMenu} from "./DropMenu";

export const NavBar = () => {

    const location = useLocation();
    const actualLocation = location.pathname;
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const name = () => {
        switch (actualLocation) {
            case '/main/buscar':
                return 'Busqueda de proyecto';
            case '/main/crear':
                return 'Crea un proyecto';
            default:
                return 'Inicio';
        }
    }

    return (
        <AppBar position="fixed">
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
                <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
                    CROWDFUNDING
                </Typography>
                <Typography variant="h6" component="span">
                    {name()}
                </Typography>
                <DropMenu anchorEl={anchorEl} open={open} handleMenuClose={handleMenuClose}/>
            </Toolbar>
        </AppBar>
    )
}