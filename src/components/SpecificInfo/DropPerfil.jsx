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

export const DropPerfil = ({ openPerfil, setOpenPerfil, fullName, bio, linkedin }) => {
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
                { fullName }
              </Typography>
              <Avatar src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 100, height: 100 }} />
            </Box>
            <Box>
              <Typography variant="h6" component="h1">
                { bio }
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon sx={{ fontSize: 100, color: '#0e76a8' }} />
              </a>
            </Box>
          </Stack>
        </DialogContent>
      </ModalDialog>
    </Modal>
  )
}