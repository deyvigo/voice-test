import MenuItem from '@mui/material/MenuItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PaidIcon from '@mui/icons-material/Paid';
import Home from '@mui/icons-material/Home';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';

export const DropMenu = ({ anchorEl, open, handleMenuClose }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
        >
            <MenuItem onClick={handleMenuClose} component={Link} to="/main/inicio">
                <Home /> Inicio
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/main/crear">
                <AddCircleIcon /> Crear proyecto
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/main/buscar">
                <SearchIcon /> Buscar proyecto
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/main/inicio">
                <FavoriteIcon /> Favoritos
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/main/inicio">
                <PaidIcon /> Recargar
            </MenuItem>
        </Menu>
    )
}