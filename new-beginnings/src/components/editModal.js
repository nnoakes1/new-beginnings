import './components.css';

import React from 'react';

import { Typography, Button, FormControl, MenuItem, TextField } from '@mui/material';

export function EditModal(props) { 
    const [name, setName] = React.useState(props.user.name);
    const [dob, setDOB] = React.useState(props.user.dob);
    const [phoneNumber, setPhoneNumber] = React.useState(props.user.phoneNumber);
    const [address, setAddress] = React.useState(props.user.address);
    const [trialStatus, setTrialStatus] = React.useState(props.user.trialStatus);

    const saveUserEdit = (event) => {
        let editedUser = {
            id: props.user.id,
            name,
            dob,
            phoneNumber,
            address,
            trialStatus
        };
        props.saveEdit(props.user.id, editedUser);
        props.closeModal();
    };

    return (
        <div className="edit-modal">
            <Typography id="modal-title" className="edit-modal-title" variant="h6" component="h2">
                Edit User
            </Typography>
            <FormControl fullWidth>
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
                <Button variant="outlined" align="right" color="success" onClick={saveUserEdit}>Save</Button>
            </div>
        </div>
    );
};