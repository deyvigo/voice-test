import React, { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const DropPay = ({ openPay, setOpenPay }) => {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        if (value === '' || (Number(value) > 0 && !value.includes('-'))) {
            setAmount(value);
            setError('');
        } else {
            setError('Por favor, ingresa un número válido y positivo.');
        }
    };

    const handleContribute = () => {
        const amountValue = parseFloat(amount);

        if (!amount || isNaN(amountValue) || amountValue <= 0) {
            setError('Por favor, ingresa un número válido y positivo.');
        } else {
            setError('');
            // Aquí puedes agregar la lógica para contribuir con el monto especificado
            console.log("Contribución exitosa:", amountValue);
            setOpenPay(false); // Cerrar el modal después de contribuir
        }
    };

    return (
        <Modal open={openPay} onClose={() => setOpenPay(false)}>
            <ModalDialog>
                <DialogContent>
                    <DialogTitle>Apoya al proyecto</DialogTitle>
                    <DialogContent>
                        <p>Digita la cantidad que quieres contribuir</p>
                        <TextField 
                            value={amount} 
                            sx={{ mb: 2 }} 
                            onChange={handleChange} 
                            type='number' 
                            error={!!error}
                            helperText={error}
                        />
                        <Button variant="contained" onClick={handleContribute}>Contribuir</Button>
                    </DialogContent>
                </DialogContent>
            </ModalDialog>
        </Modal>
    );
};
