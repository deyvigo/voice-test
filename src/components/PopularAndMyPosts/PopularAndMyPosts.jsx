import Paper from '@mui/material/Paper';
import { ListProjects } from './ListProjects';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

//datos falsos
const pp = [
    {
        name: 'Proyecto 1',
        likes: 'XXX',
    },
    {
        name: 'Proyecto 2',
        likes: 'XXX',
    },
    {
        name: 'Proyecto 3',
        likes: 'XXX',
    },
    {
        name: 'Proyecto 4',
        likes: 'XXX',
    },
    {
        name: 'Proyecto 5',
        likes: 'XXX',
    }
]

const mp = [
    {
        name: 'Mi Proyecto 1',
        likes: 'XXX',
    },
    {
        name: 'Mi Proyecto 2',
        likes: 'XXX',
    }
]

export const PopularAndMyPosts = ({ projects }) => {
    const [value, setValue] = useState(0);

    return (
        <Paper sx={{ p: 3, width: { xs: '100%', sm: '70%' }}}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} aria-label="basic tabs example">
                    <Tab label="Proyectos Populares" onClick={() => setValue(0)}/>
                    <Tab label="Mis Proyectos" onClick={() => setValue(1)}/>
                </Tabs>
            </Box>
            <ListProjects proyects={value === 0 ? pp : mp} projects={ projects }/>
        </Paper>
    )
}