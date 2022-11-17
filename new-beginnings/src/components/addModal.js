import './components.css';

import React from 'react';

import { Typography, Button, FormControl, MenuItem, TextField } from '@mui/material';

export function AddModal(props) { 
    const [userId, setUserId] = React.useState(null);
    const [name, setName] = React.useState(" ");
    const [dob, setDOB] = React.useState(" ");
    const [phoneNumber, setPhoneNumber] = React.useState(" ");
    const [address, setAddress] = React.useState(" ");
    const [trialStatus, setTrialStatus] = React.useState(" ");

    const saveUserAdd = (event) => {
        let newUser = {
            id: userId,
            name,
            dob,
            phoneNumber,
            address,
            trialStatus
        };
        props.addUser(newUser);
        props.closeModal();
    };

    return (
        <div className="add-modal">
            <Typography id="modal-title" className="edit-modal-title" variant="h6" component="h2">
                Add User
            </Typography>
            <FormControl fullWidth>
                <div className="modal-element">
                    <TextField 
                        id="outlined-basic" 
                        className='modal-select-textfield'
                        label="Reference Number" 
                        variant="outlined" 
                        defaultValue={userId}
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>
                <div className="modal-element">
                    <TextField 
                        id="outlined-basic" 
                        className='modal-select-textfield'
                        label="Name" 
                        variant="outlined" 
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="modal-element">
                    <TextField 
                        id="outlined-basic" 
                        className='modal-select-textfield'
                        label="Date of Birth" 
                        variant="outlined" 
                        defaultValue={dob}
                        onChange={(e) => setDOB(e.target.value)}
                    />
                </div>
                <div className="modal-element">
                    <TextField 
                        id="outlined-basic" 
                        className='modal-select-textfield'
                        label="Phone Number" 
                        variant="outlined" 
                        defaultValue={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="modal-element">
                    <TextField 
                        id="outlined-basic" 
                        className='modal-select-textfield'
                        label="Address" 
                        variant="outlined" 
                        defaultValue={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className='modal-element'>
                    <TextField
                        id="status-select"
                        className='modal-select-textfield'
                        select
                        label="Trial Status"
                        value={trialStatus}
                        onChange={(e) => setTrialStatus(e.target.value)}
                        >
                            <MenuItem value="Active">Active</MenuItem>
                            <MenuItem value="Withdrawn">Withdrawn</MenuItem>
                            <MenuItem value="Finished">Finished</MenuItem>
                            <MenuItem value="Error">Error</MenuItem>
                    </TextField>
                </div>
            </FormControl>
            <div className="modal-buttons">
                <Button variant="outlined" align="right" color="error" onClick={props.closeModal}>Cancel</Button>
                <Button variant="outlined" align="right" color="success" onClick={saveUserAdd}>Save</Button>
            </div>
        </div>
    );
};