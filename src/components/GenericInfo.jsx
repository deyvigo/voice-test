import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const GenericInfo = () => {
    return (
        <>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center' }}>
                <Box sx={{ textAlign: 'center', borderRadius: 2, bgcolor: 'lightgreen', py: 1 }}>
                    <Typography variant="h4" component="h1">
                        Nombre de proyecto 
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} mt={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{borderRadius: 5, overflow: 'hidden'}}>
                    <img src="https://via.placeholder.com/400" alt="imagen_prueba"/>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} mt={4} sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{borderRadius: 2, width: '95%'}}>
                    <Typography variant="h5" component="h1" borderBottom={1} mb={2}>
                        Descripción
                    </Typography>
                    <Typography variant="h6" component="h1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Vero deleniti optio odio eveniet quam corrupti, dolorum nisi 
                        asperiores nulla ipsam adipisci tempore distinctio! Est expedita 
                        explicabo accusantium dicta fuga rem.
                    </Typography>
                    <Box sx={{ borderRadius: 2, bgcolor: 'lightgreen', py: 1, mt: 2, display: 'flex', flexDirection: 'column', alignContent: 'center', gap: 1 }}>
                        <Typography variant="h5" component="h1" sx={{ textAlign: 'center' }}>
                            Monto necesario:
                        </Typography>
                        <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                            $100.000
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid mt={4} item xs={12} md={6}>
                <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                    Redes sociales
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon sx={{ fontSize: 100, color: '#E1306C' }} />
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon sx={{ fontSize: 100, color: '#3b5998' }} />
                    </a>
                </Box>
            </Grid>
            <Grid mt={4} item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                    Categoría
                </Typography>
                <Box sx={{ borderRadius: 2, bgcolor: 'lightgreen', p: 2, display: 'flex', flexDirection: 'column', alignContent: 'center', gap: 1 }}>
                    <Typography variant="h5" component="h1">
                        <strong>Tecnologia</strong>
                    </Typography>
                </Box>
            </Grid>
        </>
    )
}