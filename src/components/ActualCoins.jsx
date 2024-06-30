import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export const ActualCoins = () => {
    return (
        <Paper sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 3}}>
            <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center', mr: 3}}>Monedas disponibles: </Typography>
            <Typography variant="h2" component="h1">XXX</Typography>
        </Paper>
    )
}