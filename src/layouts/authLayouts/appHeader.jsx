import React, { Fragment, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DialogBox from '../../helpers/dialogBox';
import logo from '../../../src/assets/images/frlogo.1.jpg';
import { useSelector } from 'react-redux';
import { Badge } from '@mui/material';



const AppHeader = () => {
    const navigate = useNavigate();
    // const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    // const { cartItems } = useContext(CartContext);
    const cartItems = useSelector((state) => state.cart.cartItems);
    // console.log(cartItems)

    const list = [
        { name: "Home", link: "/home" },
        { name: "Shop", link: "/shop" },
        { name: "About", link: "/about" },
        { name: "Service", link: "/service" },
        { name: "Contact", link: "/contact" },
    ];

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        handleCloseUserMenu();
        setUsername('');
        localStorage.removeItem('username');
        navigate('/home');
    };

    const handleLogin = (username) => {
        setIsLoggedIn(true);
        setUsername(username);


    };


    // const isShopcartPage = location.pathname.includes('/shopcart');






    return (
        <Fragment>
            <div className="header">
                <AppBar position="static" className="nav-header" sx={{ backgroundColor: '#A7ABB1' }}>
                    <Toolbar disableGutters>
                        <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.5rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                            <Avatar src={logo} sx={{ width: 86, height: 86 }} />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton size="large" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {list.map((item, index) => (
                                    <MenuItem key={index} onClick={handleCloseNavMenu}>
                                        <Link to={item.link} className="navbar-link">
                                            {item.name}
                                        </Link>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            <Avatar src={logo} sx={{ width: 86, height: 86 }} />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {list.map((item, index) => (
                                <Button
                                    key={index}
                                    sx={{ my: 2, color: 'white', display: 'block', textTransform: "none" }}
                                >
                                    <Link to={item.link} className="navbar-link">
                                        {item.name}
                                    </Link>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                            {isLoggedIn ? (
                                <Fragment>

                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, mx: 1 }}>
                                        <AccountCircleIcon sx={{ width: 35, height: 35, color: "white" }} />
                                    </IconButton>
                                    <p className='navbar-link'>{username}</p>
                                    <Menu
                                        id="menu-appbar-user"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {/* <MenuItem >
                                        <AccountCircleIcon sx={{ width: 30, height: 30 }} />
                                            <p>{username}</p>
                                        </MenuItem> */}
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Link to="/profile" className="navbar-link">
                                                <AccountCircleIcon sx={{ width: 30, height: 30 }} />
                                                My Profile
                                            </Link>
                                        </MenuItem>
                                        <MenuItem onClick={handleLogout} >
                                            <LogoutIcon sx={{ mr: 1 }} /> Logout
                                        </MenuItem>

                                    </Menu>
                                </Fragment>
                            ) : (
                                <DialogBox onLogin={handleLogin} />
                            )}
                            <IconButton sx={{ p: 0, mx: 1 }}>
                                <Badge badgeContent={cartItems.length} color='error' onClick={() => navigate('/your-cart')}>
                                    <ShoppingCartOutlinedIcon  sx={{ width: 35, height: 35 ,}}/>
                                </Badge>
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </div>
        </Fragment>
    );
};

export default AppHeader;
