import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import { API_URL } from '../constants/api';
import { useFetch } from '../hooks/useFetch';
import { set } from 'react-hook-form';

export const Likes = ({ isLiked = false, idProject }) => {
  const token = localStorage.getItem('token');
  const [like, setLike] = useState(isLiked);
  const [apiLike, setApiLike] = useState(null);

  const { data: dataLike } = useFetch(apiLike?.url, apiLike?.options)

  useEffect(() => {
    setLike(isLiked)
  }, [isLiked])

  useEffect(() => {
    if (apiLike) {
      setApiLike(null)
    }
  }, [dataLike])

  const handleClickLike = () => {
    const mehod = like ? 'DELETE' : 'POST'
    setApiLike({
      url: like ? `${API_URL}/user/unlike/project` : `${API_URL}/user/like/project`,
      options: {
        method: mehod,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          id_project: idProject
        })
      }
    })
    setLike(prev => !prev)
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, bgcolor: 'lightgreen', p: 2, mt: 3, borderRadius: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'lightgreen', p: 2 }}>
        <Typography variant="h5" component="h1" flexGrow={1}>
          Sección de comentarios
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ mr: 1 }} variant="h6" component="h1">
            ¿Te gustó el post?
          </Typography>
          <Checkbox
            checked={like}
            icon={<ThumbUpOffAltIcon />}
            onChange={ handleClickLike }
            checkedIcon={<ThumbUpAltIcon />}
            sx={{ '& .MuiSvgIcon-root': { fontSize: '2.5rem' } }}
          />
        </Box>
      </Box>
    </Box>
  )
}