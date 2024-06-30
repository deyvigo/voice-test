import { PersonalInfo } from "../../components/PersonalInfo"
import Container from '@mui/material/Container';
import { ActualCoins } from "../../components/ActualCoins"
import Grid from '@mui/material/Grid';
import { PopularAndMyPosts } from "../../components/PopularAndMyPosts/PopularAndMyPosts";

export const Home = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
        <Grid container>      
          <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <PersonalInfo />
            <ActualCoins />
          </Grid>
          <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <PopularAndMyPosts />
          </Grid>
        </Grid>
    </Container>
  )
}