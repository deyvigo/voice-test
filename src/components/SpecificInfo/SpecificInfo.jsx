import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DropPay } from './DropPay';
import { useState } from 'react';
import { DropPerfil } from './DropPerfil';

export const SpecificInfo = () => {

    const [openPerfil, setOpenPerfil] = useState(false)
    const [openPay , setOpenPay] = useState(false)

    return (
        <>
            <Grid mt={4} item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                    Progreso de recaudación
                </Typography>
                <CircularProgress variant='determinate' value={80} size={200}/>
                <Box sx={{ borderRadius: 2, bgcolor: 'lightgreen', p: 2, display: 'flex', flexDirection: 'column', alignContent: 'center', gap: 1 }}>
                    <Typography variant="h5" component="h1">
                        <strong>80%</strong>
                    </Typography>
                </Box>
            </Grid>
            <Grid mt={4} item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ borderRadius: 2, p: 2, display: 'flex', flexDirection: 'column', alignContent: 'center', gap: 1 }}>
                    <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }} mb={2}>
                        Dueño del proyecto
                    </Typography>
                    <Button variant="contained" 
                        onClick={() => setOpenPerfil(true)} 
                        sx={{ borderRadius: 2, bgcolor: 'lightgreen', p: 2, display: 'flex', flexDirection: 'column', alignContent: 'center', gap: 1 }}>
                        <Typography variant="h5" component="h1">
                            <strong>Conocelo</strong>
                        </Typography>
                    </Button>
                </Box>
                <Box sx={{ borderRadius: 2, p: 2, display: 'flex', flexDirection: 'column', alignContent: 'center', gap: 1 }}>
                    <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                        Dinero recaudado
                    </Typography>
                    <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                        <strong>$80.000</strong>
                    </Typography>
                    <Button variant="contained" 
                        onClick={() => setOpenPay(true)} 
                        sx={{ borderRadius: 2, bgcolor: 'lightgreen', p: 2, display: 'flex', flexDirection: 'column', alignContent: 'center', gap: 1 }}>
                        <Typography variant="h5" component="h1">
                            <strong>Contribuye</strong>
                        </Typography>
                    </Button>
                </Box>
            </Grid> 
            <DropPay openPay={openPay} setOpenPay={setOpenPay} />
            <DropPerfil openPerfil={openPerfil} setOpenPerfil={setOpenPerfil} />
        </>
    )
}