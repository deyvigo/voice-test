import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const DropPerfil = ({openPerfil, setOpenPerfil}) => {
    return (
        <Modal open={openPerfil} onClose={() => setOpenPerfil(false)}>
            <ModalDialog>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>Dueño del proyecto</DialogTitle>
                <DialogContent>
                    <Stack
                        direction="row"
                        spacing={2}
                        divider={<Divider orientation="vertical" flexItem />}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h6" component="h1">
                                Username
                            </Typography>
                            <Avatar src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }}/>
                        </Box>
                        <Box>
                            <Typography variant="h6" component="h1">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                                Quibusdam quis est voluptatem voluptate tempore odio soluta, 
                                aspernatur quas natus eveniet quam, iure consequatur laboriosam 
                                ipsa nostrum nulla reiciendis, saepe eos.
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon sx={{ fontSize: 100, color: '#0e76a8' }}/>
                            </a>
                        </Box>
                    </Stack>
                </DialogContent>
            </ModalDialog>
        </Modal>
    )
}