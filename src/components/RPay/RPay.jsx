import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DropPayMethods } from './DropPayMethods';

export const RPay = () => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const [openPayMethods, setOpenPayMethods] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        if (value === '' || (Number(value) > 0 && !value.includes('-'))) {
            setAmount(value);
            setError('');
        } else {
            setError('Por favor, ingresa un número válido y positivo.');
        }
    };

    const handleRecharge = () => {
        const amountValue = parseFloat(amount);

        if (!amount || isNaN(amountValue) || amountValue <= 0) {
            setError('Ingresa un número válido');
        } else {
            setError('');
            setOpenPayMethods(true);
        }
    };

    return (
        <>
            <Paper sx={{ p: 3, width:'80%', maxWidth: 500, mx: 'auto', my: 8}}>
                <Box sx={{ display:'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', borderBottom: '1px solid black', width: '70%'}}>
                        Recarga tu saldo
                    </Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', mt: 2}}>
                        <label>Ingresa la cantidad a recargar:</label>
                        <TextField 
                            type='number' 
                            value={amount}
                            onChange={handleChange}
                            error={!!error}
                            helperText={error}
                            sx={{
                                width: '30%',
                                '& .MuiInputBase-input': {
                                    height: 'auto',
                                    padding: '15px 10px'
                                },
                                ml: 2
                            }}
                            label="S/" 
                            outlined
                        />
                    </Box>
                    <Button variant="contained" sx={{ mt: 3 }} onClick={handleRecharge}>Recargar</Button>
                </Box>
            </Paper>
            <DropPayMethods openPayMethods={openPayMethods} setOpenPayMethods={setOpenPayMethods} setAmount={setAmount}/>
        </>
    );
};
