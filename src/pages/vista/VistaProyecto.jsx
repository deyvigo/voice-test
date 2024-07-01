import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { GenericInfo } from '../../components/GenericInfo';
import { SpecificInfo } from '../../components/SpecificInfo/SpecificInfo';

export const VistaProyecto = () => {
    return (
        <Container maxWidth="md" sx={{ my: 5 }}>
            <Grid container>
                <GenericInfo />
                <SpecificInfo />
            </Grid>
        </Container>
    )
}