import React, { useEffect, useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { API_URL } from '../../constants/api';
import { useFetch } from '../../hooks/useFetch';

export const DropPay = ({ openPay, setOpenPay, idProject, onContribute }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [apiPay, setApiPay] = useState(null);

  const token = localStorage.getItem('token');

  const { data: dataPay, error: errorPay } = useFetch(apiPay, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      amount: amount,
      id_project: idProject
    })
  })

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === '' || (Number(value) > 0 && !value.includes('-'))) {
      setAmount(value);
      setError('');
    } else {
      setError('Por favor, ingresa un número válido y positivo.');
    }
  };

  useEffect(() => {
    if (dataPay) {
      onContribute(dataPay?.current_money);
      alert('¡Gracias por tu contribución!');
    }
    if (errorPay) {
      alert('No tienes dinero suficiente para contribuir a este proyecto.')
    }
  }, [dataPay, errorPay])

  const handleContribute = () => {
    const amountValue = parseInt(amount);

    if (!amount || isNaN(amountValue) || amountValue <= 0) {
      setError('Por favor, ingresa un número válido y positivo.');
    } else {
      setError('');
      setApiPay(`${API_URL}/project/contribute`);
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
