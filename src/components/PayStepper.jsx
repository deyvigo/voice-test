import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

export const PayStepper = () => {
    return (
        <Paper sx={{ p: 3, width:'80%', maxWidth: 500, mx: 'auto', mt: 5 }}>
            <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                Completa el proceso de pago
            </Typography>
            <Stepper alternativeLabel sx={{ mt: 4 }}>
                <Step>
                    <StepLabel>
                        Elije una cantidad a pagar
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Presiona el boton con el precio de la moneda
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Paga por cualquiera de los metodos de pago
                    </StepLabel>
                </Step>
                <Step>
                    <StepLabel>
                        Confirma el pago
                    </StepLabel>
                </Step>
            </Stepper>
        </Paper>
    )
}