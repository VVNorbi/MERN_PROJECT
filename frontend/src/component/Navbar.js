import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogoutAction } from '../redux/actions/userAction';


const Navbar = () => {

    const { userInfo } = useSelector(state => state.signIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOutUser = () => {
        dispatch(userLogoutAction());
        window.location.reload(true);
        setTimeout(() => {
            navigate('/');
        }, 500)
    }



    return (
        <AppBar position="static" sx={{ backgroundColor: 'orange' }}>
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 5,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        PROJECTS IT
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                            <Button>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none", color: 'white' }} to="/admin/jobs">Dashboard</Link></Typography>
                            </Button>
                            {
                                !userInfo ?

                                    <Button>
                                        <Typography textAlign="center"><Link style={{ textDecoration: "none", color:'white' }} to="/login">Log In</Link></Typography>
                                    </Button> :

                                    <Button onClick={logOutUser}>
                                        <Typography style={{ textDecoration: "none", color: 'white' }} textAlign="center">Log Out</Typography>
                                    </Button>
                            }

                            <Button>
                                <Typography textAlign="center"><Link style={{ textDecoration: "none", color:'white' }} to="/register">Register</Link></Typography>
                            </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;
