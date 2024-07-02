import Container from '@mui/material/Container';
import { PaginatedPosts } from '../../components/PaginatedPosts';
import React, { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { API_URL } from '../../constants/api';

export const Favoritos = () => {
  const [resultados, setResultados] = useState([]);
  const token = localStorage.getItem('token');
  const apiFavorites = `${API_URL}/project/recommended`;
  const { data: dataFavorites } = useFetch(apiFavorites, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  });

  useEffect(() => {
    if (dataFavorites) {
      setResultados(dataFavorites);
    }
  }, [dataFavorites])
  return (
    <Container sx={{ my: 5, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 'lg' }}>
      <PaginatedPosts resultados={resultados} />
    </Container>
  );
};

export default Favoritos;