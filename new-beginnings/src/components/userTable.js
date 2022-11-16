import React from 'react';

import { TableContainer, Table, TableBody, TableHead, TableRow, Paper, Modal, Box } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import SearchComponent from "react-material-ui-searchbar";
import { styled } from '@mui/material/styles';
import { Edit, Delete } from '@mui/icons-material';

import { EditModal } from './editModal';

const tableHeaders = ["Reference Number", "Name", "Date of Birth", "Phone Number", "Address", "Trial Status", ""];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function UserTable(props) {
    const [rows, setRows] = React.useState(props.users);
    const [searched, setSearched] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [editUser, setEditUser] = React.useState({});
    const handleOpen = (user) => {
        setOpen(true)
        setEditUser(user);
    };
    const handleClose = () => setOpen(false);
  
    const requestSearch = (searchedVal) => {
      const filteredRows = props.users.filter((row) => {
        return row.id.toLowerCase().includes(searchedVal.toLowerCase());
      });
      setRows(filteredRows);
    };

    React.useEffect(() => { setRows(props.users) }, [props.users]);
  
    
    return (
        <div>
            <Paper>
                <SearchComponent
                    placeholder='Search by Reference Number'
                    value={searched}
                    onChangeHandle={(searchVal) => requestSearch(searchVal)}
                    />
                <TableContainer>
                    <Table sx={{ minWidth: 250 }}>
                        <TableHead>
                            <TableRow>
                                { tableHeaders.map((tableHeader) => {
                                    return (
                                        <StyledTableCell align="left">{tableHeader}</StyledTableCell>
                                    );
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { rows.map((user) => {
                                return(
                                    <TableRow
                                        key={user.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="left">
                                            {user.id}
                                        </TableCell>
                                        <TableCell key={user.name} align="left">{user.name}</TableCell>
                                        <TableCell key={user.dob} align="left">{user.dob}</TableCell>
                                        <TableCell key={user.phoneNumber} align="left">{user.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}</TableCell>
                                        <TableCell key={user.address} align="left">{user.address}</TableCell>
                                        <TableCell key={user.trialStatus} align="left">{user.trialStatus}</TableCell>
                                        <TableCell align="left">
                                            <Edit className="edit-icon" onClick={(e) => handleOpen(user)}/> 
                                            <Delete className="delete-icon" onClick={(e) => props.deleteUser(user.id)}/>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={style}>
                    <EditModal user={editUser} saveEdit={props.updateUser} closeModal={handleClose}/>
                </Box>
            </Modal>
        </div>
    );
}