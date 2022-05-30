import React, {useState} from 'react';
import {Modal as MaterialModal} from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

function Modal ({ car }) {
    const carImage = car.makeAndModel.replace(/\s/g, '-').toLowerCase() +'.webp'
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };  

    return (
        <ModalStyled> 
            <img src={`/assets/cars/${carImage}`} alt="carImage" onClick={() => handleOpen() }/>      
            <MaterialModal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ width: 200 }}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description">
                        {car.version}
                    </p>
                    <Button onClick={handleClose}>Close</Button>
                </Box>
            </MaterialModal>
        </ModalStyled>
    )

}
    const ModalStyled = styled.div`

    `    

export default Modal;