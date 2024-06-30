import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

export const ListProjects = ({ proyects }) => {
    return (
        <>
            <List sx={{ maxHeight: 440, overflow: 'auto' }}>
                {proyects.map((proyect) => (
                    <ListItem>
                        <ListItemButton>
                            <ListItemText primary={proyect.name} secondary={proyect.likes} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}