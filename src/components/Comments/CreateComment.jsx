import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useFetch } from '../../hooks/useFetch';
import { API_URL } from '../../constants/api';

export const CreateComment = ({ name, idProject, onComment }) => {
  const token = localStorage.getItem('token');
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);
  const [apiComment, setApiComment] = useState(null);
  const { data: dataComment } = useFetch(apiComment?.url, apiComment?.options)

  useEffect(() => {
    setApiComment(null)
    onComment(dataComment)
  },  [dataComment])

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    if (error && event.target.value.trim() !== '') {
      setError(false);
    }
  };

  const handlePublish = () => {
    if (comment.trim() === '') {
      setError(true);
    } else {
      // Aquí podrías manejar la lógica para publicar el comentario
      setApiComment({
        url: `${API_URL}/create/comment`,
        options: {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            id_project: idProject,
            comment: comment
          })
        }
      })
      // Limpia el campo de comentario después de publicar
      setComment('');
      setError(false); // Reinicia el estado de error
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src="https://mui.com/static/images/avatar/3.jpg" sx={{ width: 50, height: 50 }} />
        <Box sx={{ width: '100%' }}>
          <Typography variant="body1">{name}</Typography>
          <TextField
            sx={{ width: '100%' }}
            label="Escribe tu comentario"
            variant="outlined"
            multiline
            rows={4}
            value={comment}
            onChange={handleCommentChange}
            error={error}
            helperText={error ? 'El comentario no puede estar vacío' : ''}
          />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant="contained" sx={{ px: 5 }} onClick={handlePublish}>
          Publicar
        </Button>
      </Box>
    </Box>
  );
};
