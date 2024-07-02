import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export const GenericInfo = ({ title, description, goal, facebook, instagram, category  }) => {
    return (
        <>
            <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: 3, justifyContent: 'center' }}>
                <Box sx={{ textAlign: 'center', borderRadius: 2, bgcolor: 'lightgreen', py: 1 }}>
                    <Typography variant="h4" component="h1">
                        {title} 
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
                        { description}
                    </Typography>
                    <Box sx={{ borderRadius: 2, bgcolor: 'lightgreen', py: 1, mt: 2, display: 'flex', flexDirection: 'column', alignContent: 'center', gap: 1 }}>
                        <Typography variant="h5" component="h1" sx={{ textAlign: 'center' }}>
                            Monto necesario:
                        </Typography>
                        <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                            { '$' +  goal }
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid mt={4} item xs={12} md={6}>
                <Typography variant="h4" component="h1" sx={{ textAlign: 'center' }}>
                    Redes sociales
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
                    <a href={ instagram } target="_blank" rel="noopener noreferrer">
                        <InstagramIcon sx={{ fontSize: 100, color: '#E1306C' }} />
                    </a>
                    <a href={ facebook } target="_blank" rel="noopener noreferrer">
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
                        <strong>{ category?.name }</strong>
                    </Typography>
                </Box>
            </Grid>
        </>
    )
}