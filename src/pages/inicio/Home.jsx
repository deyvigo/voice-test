import { PersonalInfo } from "../../components/PersonalInfo"
import Container from '@mui/material/Container';
import { ActualCoins } from "../../components/ActualCoins"
import Grid from '@mui/material/Grid';
import { PopularAndMyPosts } from "../../components/PopularAndMyPosts/PopularAndMyPosts";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const Home = () => {
  const [token, setToken] = useState(null)
  const API_URL = 'http://127.0.0.1:5000/user/get/profile'
  const { data: userData, loading, error } = useFetch(token ? API_URL : null, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  useEffect(() => {
    const tok = localStorage.getItem('token')
    setToken(tok)
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  const { first_name, last_name, username, created, linkedin, quantity, biography, projects } = userData?.data || {};

  return (
    <Container sx={{ mt: 5, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 'lg' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center' }}>
            <PersonalInfo
              name={ first_name }
              lastName={ last_name }
              username={ username }
              createdDate={ created }
              linkedin={ linkedin }
              description={ biography }
            />
            <ActualCoins quantity={ quantity } />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 3, my: { xs: 2, md: 0 }, alignItems: 'center', justifyContent: 'center'}}>
            <PopularAndMyPosts personalProjects={ projects } />
          </Grid>
        </Grid>
    </Container>
  )
}