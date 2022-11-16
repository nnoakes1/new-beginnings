import './components.css';

import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

export function Header() { 

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignContent: "left" }}>
                        New Beginnings
                    </Typography>
                    <div className="account-header">
                        <AccountCircle className="account-circle"/>
                        <Typography>
                            Hello, Admin!
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
      </Box>
    );
};