import Container from '@mui/material/Container';
import { PaginatedPosts } from '../../components/PaginatedPosts';
import React, { useState } from 'react';

export const Favoritos = () => {
  const [filtros, setFiltros] = useState({});
  const [resultados, setResultados] = useState([]);

  return (
    <Container sx={{ my: 5, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 'lg' }}>
      <PaginatedPosts resultados={resultados} />
    </Container>
  );
};

export default Favoritos;