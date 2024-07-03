import Paper from '@mui/material/Paper';
import { ListProjects } from './ListProjects';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { API_URL } from '../../constants/api';
import { useFetch } from '../../hooks/useFetch';

export const PopularAndMyPosts = ({ personalProjects }) => {
  const token = localStorage.getItem('token')
  const [value, setValue] = useState(1);
  const [apiPopular, setApiPopular] = useState(null);
  const [projects, setProjects] = useState(personalProjects)

  const { data: dataPopular } = useFetch(apiPopular?.url, apiPopular?.options)

  const handleSwitchProjects = (key) => {
    setValue(key)
    if (key === 0) {
      setApiPopular({
        url: `${API_URL}/project/popular`,
        options: {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      })
    } else {
      setProjects(personalProjects)
      setApiPopular(null)
    }
  }

  useEffect(() => {
    if (dataPopular) {
      setProjects(dataPopular.data)
    }
  }, [dataPopular])

  return (
    <Paper sx={{ p: 3, width: { xs: '100%', sm: '70%' } }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} aria-label="basic tabs example">
          <Tab label="Proyectos Populares" onClick={() => handleSwitchProjects(0) } />
          <Tab label="Mis Proyectos" onClick={() => handleSwitchProjects(1) } />
        </Tabs>
      </Box>
      <ListProjects projects={ projects } />
    </Paper>
  )
}