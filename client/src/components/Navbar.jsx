import React, { useState } from 'react'
import { DarkModeOutlined, LightModeOutlined, Menu as MenuIcon, SettingsOutlined, Search, ArrowDropDownOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import FlexBetween from 'components/FlexBetween'
import { setMode } from 'state'
import profileImage from 'assets/profileImage.jpg'
import { Box, Typography, AppBar, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, useTheme } from '@mui/material'

const Navbar = ({ isSideBarOpen, setIsSideBarOpen, user }) => {

    const dispatch = useDispatch();
    const theme = useTheme();

    const [ anchorEl, setAnchorEl ] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = ( event ) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

  return (
    <AppBar sx={{ position:"static", boxShadow: "none", background: "none"}}>
        <Toolbar sx={{ justifyContent: "space-between"}}>
            {/* LEFT SIDE */}
            <FlexBetween>
                <IconButton onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                    <MenuIcon/>
                </IconButton>
                <FlexBetween backgroundColor={theme.palette.background.alt} borderRadius="9px" gap="3rem" p="0.1rem 1.5rem">
                    <InputBase placeholder='Search...'/>
                    <IconButton>
                        <Search />
                    </IconButton>
                </FlexBetween>
            </FlexBetween>
            {/* RIGHT SIDE */}
            <FlexBetween gap="1.5rem">
                <IconButton onClick={() => dispatch(setMode())}>
                    {theme.palette.mode === 'dark' ?
                    ( <DarkModeOutlined sx={{ fontSize: '25px'}}/>) :
                    ( <LightModeOutlined sx={{ fontSize: '25px'}}/>)}
                </IconButton>
                <IconButton>
                    <SettingsOutlined />
                </IconButton>

                <FlexBetween>
                    <Button 
                        onClick={handleClick} 
                        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textTransform: "none", gap: "1rem"}}
                    >
                        <Box
                            component="img"
                            alt="profile"
                            src={profileImage}
                            height="32px"
                            width="32px"
                            borderRadius="50%"
                            sx={{ objectFit: "cover" }}
                        />
                        <Box textAlign="left" >
                            <Typography
                                fontWeight="bold"
                                fontSize="0.85rem"
                                sx={{ color: theme.palette.secondary[100]}}
                            > 
                            {user.name} 
                            </Typography>
                            <Typography
                                fontSize="0.75rem"
                                sx={{ color: theme.palette.secondary[200]}}
                            > 
                            {user.occupation} 
                            </Typography>
                        </Box>
                        <ArrowDropDownOutlined sx={{ color: theme.palette.secondary[300], fontSize: "25px"}}/>
                    </Button>
                    <Menu anchorEl={anchorEl} isOpen={isOpen} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
                        <MenuItem onClick={handleClose}>Log Out</MenuItem>
                    </Menu>
                </FlexBetween>

            </FlexBetween>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar