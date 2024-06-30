import { PersonalInfo } from "../../components/PersonalInfo"
import Container from '@mui/material/Container';
import { ActualCoins } from "../../components/ActualCoins"
import Grid from '@mui/material/Grid';
import { PopularAndMyPosts } from "../../components/PopularAndMyPosts/PopularAndMyPosts";

export const Home = () => {
  return (
    <Container sx={{ mt: 5, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 'lg' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center' }}>
            <PersonalInfo />
            <ActualCoins />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 3, my: { xs: 2, md: 0 }, alignItems: 'center', justifyContent: 'center'}}>
            <PopularAndMyPosts />
          </Grid>
        </Grid>
    </Container>
  )
}