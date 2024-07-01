import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PlinQr from '../../assets/PlinQr.png';
import YapeQr from '../../assets/YapeQr.png';
import Button from '@mui/material/Button';

export const DropPayMethods = ({openPayMethods, setOpenPayMethods, setAmount}) => {

    const handlePay = () => {
        setAmount('');
        setOpenPayMethods(false);
    }

    return (
        <Modal open={openPayMethods} onClose={() => setOpenPayMethods(false)}>
            <ModalDialog>
                <DialogTitle sx={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>Metodos de pago</DialogTitle>
                <DialogContent>
                    <Stack
                        direction="row"
                        spacing={2}
                        divider={<Divider orientation="vertical" flexItem />}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h6" component="h1">
                                YAPE
                            </Typography>
                            <img src={YapeQr} alt="yape" style={{width: 200, height: 300}}/>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h6" component="h1">
                               PLIN
                            </Typography>
                            <img src={PlinQr} alt="yape" style={{width: 200, height: 300}}/>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant="h6" component="h1" sx={{ textAlign: 'center' }}>
                                Deposito a la siguiente cuenta BCP
                            </Typography>
                            <Typography variant="h6" component="h1">
                                Cuenta: 0123456789
                            </Typography>
                            <Typography variant="h6" component="h1">
                                Titular: Jose Parrales
                            </Typography>
                        </Box>
                    </Stack>
                    <Button sx={{ m: 2 }} variant="contained" onClick={handlePay}>CONFIRMAR TRANSACCION</Button>
                </DialogContent>
            </ModalDialog>
        </Modal>
    )
}