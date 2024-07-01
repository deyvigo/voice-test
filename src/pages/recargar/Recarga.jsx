import Container from '@mui/material/Container';
import { RPay } from '../../components/RPay/RPay';
import { PayStepper } from '../../components/PayStepper';

export const Recarga = () => {
    return ( 
        <Container maxWidth="md" sx={{ my: 5 }}>
            <RPay/>
            <PayStepper/>
        </Container>
    )
}