import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

export const ListProjects = ({ proyects, projects }) => {
    console.log(projects)
    return (
        <>
            <List sx={{ maxHeight: 440, overflow: 'auto' }}>
                {projects?.map(({ title, likes_count, id_project }) => (
                    <ListItem key={id_project}>
                        <ListItemButton>
                            <ListItemText primary={title} secondary={likes_count} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </>
    )
}