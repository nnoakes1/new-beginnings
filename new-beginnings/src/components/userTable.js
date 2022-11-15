import { TableContainer, Table, TableBody, TableHead, TableRow, Paper } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const tableHeaders = ["ID", "Name", "Date of Birth", "Phone Number", "Address", "Trial Status"];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

export function UserTable(props) {
    return (
        <TableContainer component={Paper}>
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
                    { props.users.map((user) => {
                        console.log(user.name);
                        return(
                            <TableRow
                                key={user.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" align="left">
                                    {user.id}
                                </TableCell>
                                <TableCell align="left">{user.name}</TableCell>
                                <TableCell align="left">{user.dob}</TableCell>
                                <TableCell align="left">{user.phoneNumber}</TableCell>
                                <TableCell align="left">{user.address}</TableCell>
                                <TableCell align="left">{user.trialStatus}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}