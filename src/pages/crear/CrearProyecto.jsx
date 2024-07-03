import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Select, MenuItem, Box, FormControl, InputLabel } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';
import { set, useForm } from 'react-hook-form';
import { API_URL } from '../../constants/api';
import { useFetch } from '../../hooks/useFetch';

export const CrearProyecto = () => {
  const location = useLocation()
  const { title, description, goal } = location.state || {};

  const [qr, setQr] = useState(null);
  const [qrPreview, setQrPreview] = useState(null);
  const [apiCreate, setApiCreate] = useState(null);
  const token = localStorage.getItem('token');
  const { data: dataCreate } = useFetch(apiCreate?.url, apiCreate?.options);
  const navigate = useNavigate()

  const [categories, setCategories] = useState([])

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    setValue('title', title)
    setValue('description', description)
    setValue('goal', goal)
  }, [title, description, goal, setValue])

  useEffect(() => {
    fetch(`${API_URL}/get/all/category`)
      .then((response) => response.json())
      .then(({ data }) => {
        setCategories(data)
      })
  }, [])

  useEffect(() => {
    if (dataCreate) {
      alert('Proyecto creado con éxito')
      navigate('/main/inicio')
    }
    setApiCreate(null)
  }, [dataCreate])

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setQr(file)
    setQrPreview(URL.createObjectURL(file))
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  console.log(title, description, goal)

  

  

  const handleCreate = handleSubmit((data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('id_category', data.id_category);
    formData.append('description', data.description);
    formData.append('goal', data.goal);
    formData.append('facebook', data.facebook);
    formData.append('instagram', data.instagram);
    formData.append('phone', data.phone);
    if (qr) {
      formData.append('img', qr, `${uuidv4()}.png`);
    }
    setApiCreate({
      url: `${API_URL}/create/project`, 
      options: {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      }
    })
  })


  return (
    <Container sx={{ my: 5, px: { xs: 2, sm: 3, md: 4 }, maxWidth: 'lg' }}>
      <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '70%' }} component={'form'} onSubmit={ handleCreate }>
        <TextField label="Nombre de proyecto" {...register('title')} />
        <FormControl>
          <InputLabel>Categoria</InputLabel>
          <Select {...register('id_category')} defaultValue={''} label="Categoria">
            {
              categories && categories.map((category) => (
                <MenuItem key={category.id_category} value={category.id_category}>{category.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <TextField label="Descripción" {...register('description', { required: true })} />
        <TextField type="number" label="Meta" {...register('goal', { required: true })} />
        <TextField label="Facebook" {...register('facebook', { required: true })} />
        <TextField label="Instagram" {...register('instagram', { required: true })} />
        <TextField label="Teléfono" {...register('phone', { required: true })} />
        <FormControl>
        <div {...getRootProps()}>
          <input {...getInputProps()}/>
          <p>Arrastra y suelta una imagen para el QR aquí, o haz clic para seleccionar una imagen</p>
        </div>
        {qrPreview && <img src={qrPreview} alt="QR" style={{ maxWidth: '100%', marginTop: '10px' }} />}
        </FormControl>
        <Button variant="contained" type="submit">Guardar proyecto</Button>
      </Box>
    </Box>
    </Container>
  );
};

export default CrearProyecto
