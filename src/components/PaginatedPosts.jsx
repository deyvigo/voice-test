import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import { PostCard } from './PostCard';
import Box from '@mui/material/Box';
import { API_URL } from '../constants/api';


//datos falsos
const postsFake = [
  { title: 'Post 1', description: 'Description 1', image: 'https://via.placeholder.com/150' },
  { title: 'Post 2', description: 'Description 2', image: 'https://via.placeholder.com/150' },
  { title: 'Post 3', description: 'Description 3', image: 'https://via.placeholder.com/150' },
  { title: 'Post 4', description: 'Description 4', image: 'https://via.placeholder.com/150' },
  { title: 'Post 5', description: 'Description 5', image: 'https://via.placeholder.com/150' },
  { title: 'Post 6', description: 'Description 6', image: 'https://via.placeholder.com/150' },
  { title: 'Post 7', description: 'Description 7', image: 'https://via.placeholder.com/150' },
  { title: 'Post 8', description: 'Description 8', image: 'https://via.placeholder.com/150' },
  { title: 'Post 9', description: 'Description 9', image: 'https://via.placeholder.com/150' },
  { title: 'Post 10', description: 'Description 10', image: 'https://via.placeholder.com/150' },
];

const POSTS_PER_PAGE = 6;

export const PaginatedPosts = ({ posts = [], resultados }) => {
  const [page, setPage] = useState(1);
  const count = Math.ceil(posts.length / POSTS_PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const selectedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {
          resultados && resultados.map(({ id_project, title, description, img_project }, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <PostCard idProject={id_project} title={title} description={description} image={img_project ? `${API_URL}/img/project/${img_project}` : 'https://via.placeholder.com/150'} />
            </Grid>  
          ))
        }
        {/* {selectedPosts.map((post, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PostCard title={post.title} description={post.description} image={post.image} />
          </Grid>
        ))} */}
      </Grid>
      <Pagination
        count={count}
        page={page}
        onChange={handleChange}
        sx={{ mt: 4 }}
      />
    </Box>
  );
}
