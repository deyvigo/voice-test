import Container from '@mui/material/Container';
import { PaginatedPosts } from '../../components/PaginatedPosts';
import { FilterPosts } from '../../components/FilterPosts';
import React, { useState } from 'react';

export const Favoritos = () => {
  const [filtros, setFiltros] = useState({});
  const [resultados, setResultados] = useState([]);

  // Aquí puedes agregar la lógica para buscar y filtrar tus proyectos favoritos

  return (
    <Container sx={{ my: 5, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 'lg' }}>
      <FilterPosts filtros={filtros} setFiltros={setFiltros} />
      <PaginatedPosts resultados={resultados} />
    </Container>
  );
};

export default Favoritos;