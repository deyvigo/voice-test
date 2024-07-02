import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useEffect, useState } from 'react';
import { API_URL } from '../constants/api';

export const FilterPosts = ({ onFilter }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/get/all/category`)
      .then((response) => response.json())
      .then(({ data }) => {
        setCategories(data)
      })
  }, [])

  const { register, handleSubmit } = useForm();

  const handleFilter = handleSubmit((data) => {
    const { id_category, prefix } = data
    if (id_category === '' || prefix === '') {
      return
    }
    onFilter(data)
  });

  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '70%' }} component={'form'} onSubmit={handleFilter}>
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
        <TextField label="Nombre de proyecto" {...register('prefix')} />
        <Button variant="contained" type="submit">Buscar</Button>
      </Box>
    </Box>
  )
}