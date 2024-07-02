import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { DropPayMethods } from './DropPayMethods';

const coinData = [
    { amount: 500, price: 550 },
    { amount: 100, price: 110 },
    { amount: 20, price: 22 },
    { amount: 200, price: 220 },
    { amount: 50, price: 55 },
    { amount: 10, price: 11 }
];

export const RPay = () => {
    const [openPayMethods, setOpenPayMethods] = useState(false);

    return (
        <>
            <Paper sx={{ p: 3, width: '80%', maxWidth: 500, mx: 'auto', my: 8 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                            Elije cuantas monedas recargar
                        </Typography>
                    </Grid>
                    {coinData.map((coin, index) => (
                        <Grid item xs={6} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    bgcolor: 'lightgreen',
                                    justifyContent: 'center',
                                    p: 2,
                                    mt: 3,
                                    borderRadius: 4
                                }}
                            >
                                <Box>
                                    <Typography variant="h5" component="h1" sx={{ textAlign: 'center', height: 25 }}>
                                        {coin.amount}
                                    </Typography>
                                    <Typography variant="body2" component="h1" sx={{ textAlign: 'center' }}>
                                        monedas
                                    </Typography>
                                </Box>
                                <Button variant="contained" onClick={() => setOpenPayMethods(true)}>
                                    S/{coin.price}
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
            <DropPayMethods openPayMethods={openPayMethods} setOpenPayMethods={setOpenPayMethods} />
        </>
    );
};
