import { Badge } from "@mui/base";
import { Avatar, Button, Container, IconButton, Switch, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HelpIcon from "@mui/icons-material/Help";


import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import MoreIcon from '@mui/icons-material/MoreVert';


import { Web3NetworkSwitch } from "@web3modal/react";
import { useTheme } from "../../utils/themeContext";

function Header() {
  const [isSigningRequired, setIsSigningRequired] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState(null);
  const { isDarkMode, toggleTheme } = useTheme();

  const pages = ["Trade", "Profile", "Rewards", "Governance", "More"];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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

  const handleConnect = async (provider) => {
    // Request signature permission here
    try {
      const accounts = await provider.request({
        method: "eth_requestAccounts",
      });
      const address = accounts[0];

      const signature = await provider.request({
        method: "personal_sign",
        params: ["Signature request message", address],
      });

      // Handle the signature response here
      console.log("Signature:", signature);

      // Set the connected wallet after successful signature
      setConnectedWallet(address);
    } catch (error) {
      // Handle any errors during the signature process
      console.error("Signature error:", error);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Image src="/logo-VE.svg" height={30} width={30} />

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              color="inherit"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
                color="inherit"
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label=""
              color="inherit"
            >
              <Badge color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton size="large" aria-label="show 4 new mails" color="inherit" onClick={toggleTheme}>
              <Badge
              >
                <WbSunnyIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              //   aria-controls={menuId}
              aria-haspopup="true"
              //   onClick={handleProfileMenuOpen}
              color="inherit"

            >
              <NotificationsIcon />
            </IconButton>

            <Web3NetworkSwitch onConnect={handleConnect} />

            {/* Render based on connected wallet */}

            {/* <Button
                  variant="contained"
                  sx={{
                    marginLeft: "20px",
                    borderRadius: "0.5rem",
                    textTransform: "none",
                  }}
                  onClick={() => onSignIn()}
                >
                  Connect Wallet
                </Button> */}
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
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
              {pages.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu}
      {renderMenu} */}
    </Box>
    // <div className="flex justify-between h-16 p-4 bg-[#333]">
    //   <div className="flex">
    //     <Image src="/logo-VE.svg" height={30} width={30} />
    //     <ul className="flex text-[#B9B9B999] gap-4 ml-10 items-center">
    //       <li className="p-2 cursor-pointer hover:border-b-2 hover:text-[#4069FF] hover:border-[#4069FF]">
    //         Trade
    //       </li>
    //       <li className="p-2 cursor-pointer hover:border-b-2 hover:text-[#4069FF] hover:border-[#4069FF]">
    //         Profile
    //       </li>
    //       <li className="p-2 cursor-pointer hover:border-b-2 hover:text-[#4069FF] hover:border-[#4069FF]">
    //         Rewards
    //       </li>
    //       <li className="p-2 cursor-pointer hover:border-b-2 hover:text-[#4069FF] hover:border-[#4069FF]">
    //         Governance
    //       </li>
    //       <li className="p-2 cursor-pointer hover:border-b-2 hover:text-[#4069FF] hover:border-[#4069FF]">
    //         More
    //       </li>
    //       <li>
    //         <Switch checked={isDarkMode} onChange={toggleTheme} />
    //       </li>
    //     </ul>
    //   </div>
    //   <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
    //     <IconButton size="large" aria-label="show 4 new mails" color="primary">
    //       <Badge
    //         //   badgeContent={0}
    //         color="error"
    //       >
    //         <WbSunnyIcon />
    //       </Badge>
    //     </IconButton>
    //     <IconButton
    //       size="large"
    //       aria-label="show 17 new notifications"
    //       color="primary"
    //     >
    //       <Badge
    //         //   badgeContent={0}
    //         color="error"
    //       >
    //         <HelpIcon />
    //       </Badge>
    //     </IconButton>
    //     <IconButton
    //       size="large"
    //       edge="end"
    //       aria-label="account of current user"
    //       //   aria-controls={menuId}
    //       aria-haspopup="true"
    //       //   onClick={handleProfileMenuOpen}
    //       color="primary"
    //     >
    //       <NotificationsIcon />
    //     </IconButton>

    //     <Web3NetworkSwitch onConnect={handleConnect} />

    //     {/* Render based on connected wallet */}

    //     {/* <Button
    //       variant="contained"
    //       sx={{
    //         marginLeft: "20px",
    //         borderRadius: "0.5rem",
    //         textTransform: "none",
    //       }}
    //       onClick={() => onSignIn()}
    //     >
    //       Connect Wallet
    //     </Button> */}
    //   </Box>
    // </div>
  );
}

export default Header;

