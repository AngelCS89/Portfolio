import React, { useState} from 'react';
import styled from '@emotion/styled'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function Card ({ car }) {
    const carImage = car.makeAndModel.replace(/\s/g, '-').toLowerCase() +'.webp'
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <CardStyled>
            <div className='card'>
                <div className="poster">
                    <img src={`/assets/cars/${carImage}`} alt="carImage" onClick={() => handleOpen() }/>
                    <Modal
                        hideBackdrop
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                    >
                    <Box sx={{ width: 400 }}>
                        <h2 id="child-modal-title">{car.makeAndModel}</h2>
                        <h2 id="child-modal-title">{car.version}</h2>
                        <p id="child-modal-description">
                            {car.price} 
                        </p>
                        <Button onClick={handleClose}>Close Modal</Button>
                        <Button >Comprar</Button>
                    </Box>
                    </Modal>
                </div>
                <div className="body">
                    <div >
                        <h2>{ car.price } €</h2>
                        <h3>{ car.makeAndModel} </h3>
                        <p>{ car.version} </p>
                    </div>
                    <div className="description">
                        <ul>
                            <li>
                                { car.location}
                            </li>
                            <li>
                            { car.year}
                            </li>
                            <li>
                                { car.km } KM
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`
    border: 1px solid #cccccc;
    margin-top: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0, 0.2);
    display: flex;
    margin-bottom: 5px;
    margin-right: 0;
    justify-content: flex-start;
    
    .body {
        padding: 20px;
        display: flex;
        flex-direction: column;
        
        .description {
            display: flex;
            flex-direction: row;
        }

        h2 {
            margin-bottom: 10px;
        }

        h3 {

        }
        
        p {
            color: #666666;
            line-height: 1.5;
            padding> 
        }
        
        a {
            display: inline-block;
            margin: 20px 0;
        }

        ul {
            display: flex;
            padding: 0;
        }

        li {
            list-style-type: "";
            border-left: 0;
            padding-left: 0;
            color: #606f80;
            padding: 0 8px;
            font-size: 12px;
        }
       
    }
`

export default Card
