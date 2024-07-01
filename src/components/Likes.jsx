import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import Checkbox from '@mui/material/Checkbox';

export const Likes = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, bgcolor: 'lightgreen', p: 2, mt: 3, borderRadius: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: 'lightgreen', p: 2 }}>
                <Typography variant="h5" component="h1" flexGrow={1}>
                    Sección de comentarios
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ mr: 1 }} variant="h6" component="h1">
                        ¿Te gustó el post?
                    </Typography>
                    <Checkbox icon={<ThumbUpOffAltIcon />} checkedIcon={<ThumbUpAltIcon />} sx={{ '& .MuiSvgIcon-root': { fontSize: '2.5rem' }}}/>
                </Box>
            </Box>
        </Box>
    )
}