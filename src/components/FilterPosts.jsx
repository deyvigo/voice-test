import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useForm } from 'react-hook-form';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export const FilterPosts = () => {

    const { register, handleSubmit } = useForm();

    const handleFilter = handleSubmit ((data) => {
        console.log(data);
    });

    return (
        <Box sx={{ display: 'flex', gap: 2, width: '100%', justifyContent: 'center'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '70%'}} component={'form'} onSubmit={handleFilter}>
                <FormControl>
                    <InputLabel>Categoria</InputLabel>
                    <Select {...register('category')} defaultValue={''} label="Categoria">
                        <MenuItem value={'tecnologia'}>Tecnologia</MenuItem>
                        <MenuItem value={'arte-y-cultura'}>Arte y cultura</MenuItem>
                        <MenuItem value={'emprendimiento'}>Emprendimiento</MenuItem>
                        <MenuItem value={'ayuda-social'}>Ayuda social</MenuItem>
                        <MenuItem value={'otro'}>Otros</MenuItem>
                    </Select>
                </FormControl>
                <TextField label="Nombre de proyecto" {...register('name')}/>
                <Button variant="contained" type="submit">Buscar</Button>
            </Box>
        </Box>
    )
}