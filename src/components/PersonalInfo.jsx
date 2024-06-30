import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';

export const PersonalInfo = ({ name, lastName, username, createdDate, linkedin, description }) => {

    const [saved , setSaved] = useState(false)

    const saveChanges = () => {
        setSaved(!saved)
    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }

    return (
        <Paper sx={{ p: 3, maxWidth: 500, mx: 'auto'}}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h5" component="h1" gutterBottom sx={{ textAlign: 'center'}}>Información personal</Typography>
                </Grid>
                <Grid item xs={6} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={2} >
                    <Box>
                        <Typography variant="body1" component="p"><strong>NOMBRE: </strong></Typography>
                        <Typography variant="body2" component="p">{ name }</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" component="p"><strong>APELLIDOS: </strong></Typography>
                        <Typography variant="body2" component="p">{ lastName }</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" component="p"><strong>USERNAME: </strong></Typography>
                        <Typography variant="body2" component="p">{ username }</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" component="p" sx={{ pr:{xs: 2, sm: 0}}}><strong>FECHA DE REGISTRO: </strong></Typography>
                        <Typography variant="body2" component="p">{ formatDate(createdDate) }</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" component="p"><strong>LINKEDIN: </strong></Typography>
                        <Typography variant="body2" component="p">{ linkedin }</Typography>
                    </Box>
                </Grid>
                <Grid item xs={6} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignContent={'center'}>
                    <Avatar sx={{ width: 150, height: 150, alignSelf: 'center' }} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                    <Typography variant="body2" component="p">Descripción:</Typography>
                    <TextField value={ description ? description : '' } sx={{ width: '100%'}} multiline rows={3} disabled={!saved}/>
                    <Button variant="contained" sx={{ width: '100%', mt: 2}}
                        onClick={saveChanges}>
                        {saved? 'Guardar' : 'Actualizar'}
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}