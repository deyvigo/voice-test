import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const DropPay = ({openPay, setOpenPay}) => {
    return (
        <Modal open={openPay} onClose={() => setOpenPay(false)}>
            <ModalDialog>
                <DialogContent>
                    <DialogTitle>Apoya al proyecto</DialogTitle>
                    <DialogContent>
                        <p>Digita la cantidad que quieres contribuir</p>
                        <TextField sx={{mb: 2}} type='number'/>
                        <Button variant="contained">Contribuir</Button>
                    </DialogContent>
                </DialogContent>
            </ModalDialog>
        </Modal>
    )
}