import { Badge } from "@mui/base";
import { Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import HelpIcon from "@mui/icons-material/Help";

import { Web3NetworkSwitch } from "@web3modal/react";

function Header() {
  const [isSigningRequired, setIsSigningRequired] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState(null);

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
    <div className="flex justify-between h-16 p-4 bg-[#171A1E]">
      <div className="flex">
        <Image src="/logo-VE.svg" height={30} width={30} />
        <ul className="flex text-[#B9B9B999] gap-4 ml-10 items-center">
          <li className="p-2 cursor-pointer hover:border-b-2 hover:text-[#4069FF] hover:border-[#4069FF]">
            Trade
          </li>
          <li className="p-2 cursor-pointer hover:border-b-2 hover:text-[#4069FF] hover:border-[#4069FF]">
            Profile
          </li>
          <li className="p-2 cursor-pointer hover:border-b-2 hover:text-[#4069FF] hover:border-[#4069FF]">
            Rewards
          </li>
          <li className="p-2 cursor-pointer hover:border-b-2 hover:text-[#4069FF] hover:border-[#4069FF]">
            Governance
          </li>
          <li className="p-2 cursor-pointer hover:border-b-2 hover:text-[#4069FF] hover:border-[#4069FF]">
            More
          </li>
        </ul>
      </div>
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
        <IconButton size="large" aria-label="show 4 new mails" color="primary">
          <Badge
            //   badgeContent={0}
            color="error"
          >
            <WbSunnyIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="primary"
        >
          <Badge
            //   badgeContent={0}
            color="error"
          >
            <HelpIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          //   aria-controls={menuId}
          aria-haspopup="true"
          //   onClick={handleProfileMenuOpen}
          color="primary"
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
      </Box>
    </div>
  );
}

export default Header;
