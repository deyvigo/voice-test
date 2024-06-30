import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export const PersonalInfo = () => {

    const [saved , setSaved] = useState(true)

    const saveChanges = () => {
        setSaved(!saved)
    }

    return (
        <Paper sx={{ p: 3, maxWidth: 600, mx: 'auto'}}>
            <Grid container>
                <Grid item xs={12}>
                    <Typography variant="h5" component="h1" gutterBottom sx={{ textAlign: 'center'}}>Información personal</Typography>
                </Grid>
                <Grid item xs={6} display={'flex'} flexDirection={'column'} justifyContent={'center'} gap={3} >
                    <Typography variant="body2" component="p"><strong>NOMBRE: </strong>XXXXXXXXXXX</Typography>
                    <Typography variant="body2" component="p"><strong>APELLIDOS: </strong>XXXXXXXXX</Typography>
                    <Typography variant="body2" component="p"><strong>USERNAME: </strong>XXXXXXXXXX</Typography>
                    <Typography variant="body2" component="p"><strong>FECHA DE REGISTRO: </strong>XX/XX/XX</Typography>
                    <Typography variant="body2" component="p"><strong>PAYPAL: </strong>XXXXXXXXXXX</Typography>
                    <Typography variant="body2" component="p"><strong>LINKEDIN: </strong>XXXXXXXXXXX</Typography>
                </Grid>
                <Grid item xs={6} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignContent={'center'}>
                    <Avatar sx={{ width: 100, height: 100, alignSelf: 'center' }} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
                    <Typography variant="body2" component="p">Descripción:</Typography>
                    <TextField sx={{ width: '100%' }} multiline rows={3} disabled={!saved}/>
                    <Button variant="contained" sx={{ width: '100%', mt: 2 }}
                        onClick={saveChanges}>
                        {saved? 'Actualizar' : 'Guardar'}
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}