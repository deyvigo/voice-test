import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';

export const CrearProyecto = () => {
  const [nombreProyecto, setNombreProyecto] = useState('');
  const [informacionBancaria, setInformacionBancaria] = useState('');
  const [sector, setSector] = useState('');
  const [qr, setQr] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [meta, setMeta] = useState('');
  const [redes, setRedes] = useState('');
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setQr(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Resto de la lógica de guardado del proyecto
  };

  return (
    <Container sx={{ my: 5, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 'lg' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre proyecto"
          value={nombreProyecto}
          onChange={(event) => setNombreProyecto(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Información bancaria"
          value={informacionBancaria}
          onChange={(event) => setInformacionBancaria(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Sector"
          value={sector}
          onChange={(event) => setSector(event.target.value)}
          fullWidth
          margin="normal"
        />
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Arrastra y suelta una imagen para el QR aquí, o haz clic para seleccionar una imagen</p>
        </div>
        {qr && <img src={qr} alt="QR" style={{ maxWidth: '100%', marginTop: '10px' }} />}
        <TextField
          label="Descripción"
          value={descripcion}
          onChange={(event) => setDescripcion(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Meta"
          value={meta}
          onChange={(event) => setMeta(event.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Redes"
          value={redes}
          onChange={(event) => setRedes(event.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" fullWidth margin="normal">
          Guardar proyecto
        </Button>
      </form>
    </Container>
  );
};

export default CrearProyecto;