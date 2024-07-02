import Container from '@mui/material/Container';
import { PaginatedPosts } from '../../components/PaginatedPosts';
import { FilterPosts } from '../../components/FilterPosts';
import { useEffect, useMemo, useState } from 'react';
import { API_URL } from '../../constants/api';
import { useSearcher } from '../../hooks/useSearcher';

export const Buscar = () => {
  const token = localStorage.getItem('token')
  const [posts, setPosts] = useState([]);
  const [keys, setKeys] = useState({ id_category: '', prefix: ''})
  const [apiSearcher, setApiSearcher] = useState(null)

  const options = useMemo(() => ({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(keys)
  }), [keys, token]);

  const { data: dataProjects } = useSearcher(apiSearcher, options)

  const handleFilter = (data) => {
    setKeys(data)
    setApiSearcher(`${API_URL}/search`)
  }

  useEffect(() => {
    if (dataProjects) {
      setPosts(dataProjects)
    }
  }, [dataProjects])

  return (
    <Container sx={{ my: 5, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 'lg' }}>
        <FilterPosts onFilter={handleFilter} />
        <PaginatedPosts resultados={posts ? posts : []} />
    </Container>
  )
}