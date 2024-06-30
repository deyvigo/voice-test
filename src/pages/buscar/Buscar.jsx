import Container from '@mui/material/Container';
import { PaginatedPosts } from '../../components/PaginatedPosts';
import { FilterPosts } from '../../components/FilterPosts';

export const Buscar = () => {
  return (
    <Container sx={{ my: 5, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 'lg' }}>
        <FilterPosts />
        <PaginatedPosts />
    </Container>
  )
}