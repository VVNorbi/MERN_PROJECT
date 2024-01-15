import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import LoginIcon from '@mui/icons-material/Login';
import { useDispatch } from 'react-redux';
import { userLogoutAction, userProfileAction } from '../../redux/actions/userAction';

const SidebarAdm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(userProfileAction());
  }, []);

  const logOut = () => {
    dispatch(userLogoutAction());
    window.location.reload(true);
    setTimeout(() => {
      navigate('/');
    }, 500);
  };

  return (
    <AppBar position="fixed" sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Toolbar sx={{ width: '240px', flexShrink: 0 }}>
        <Button component={Link} to="/admin/jobs" sx={{ color: 'white' }} startIcon={<WorkIcon />}>
          Jobs
        </Button>
        <Button component={Link} to="/admin/category" sx={{ color: 'white' }} startIcon={<CategoryIcon />}>
          Category
        </Button>
      </Toolbar>
      <Toolbar>
        <Button component={Link} to="/" sx={{ color: 'white' }}>
          Home
        </Button>
      </Toolbar>
      <Toolbar sx={{ display: 'flex', flexDirection: 'row' }}>
        <Button onClick={logOut} sx={{ color: 'white' }} startIcon={<LoginIcon />}>
          Log out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default SidebarAdm;