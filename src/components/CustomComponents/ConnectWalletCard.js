import React from "react";
import Image from "next/image";
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
const ConnectWalletCard = () => {
  return (
    <Box
      flexDirection="column"
      display="flex"
      alignItems="center"
      justifyContent={"center"}
      sx={{ p: 2, color: "primary.text", backgroundColor: "inherit", bgcolor: 'primary.main' }}
    >
      <Image src="/logo-VE-full.svg" height={30} width={139} />
      <Typography
        textAlign={"center"}
        variant="body1"
        sx={{ color: "primary.text", backgroundColor: "inherit", bgcolor: 'primary.main', mt: 3 }}
      >
        Connect your wallet to start trading cryptocurrency.
      </Typography>
      <Box sx={{ width: 277, display: "flex", flexDirection: "column" }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0.5rem",
            textTransform: "none",
            mt: 4,
            color: "#333", bgcolor: 'primary.text'
            // "&:hover": {
            //   backgroundColor: "#4069FF",
            // },
          }}
        >
          Connect Wallet
        </Button>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0.5rem",
            textTransform: "none",
            mt: 2,
            color: "#333", bgcolor: 'primary.text',
            "&:hover": {
              backgroundColor: "#4069FF",
            },
          }}
        >
          Mock Trading
        </Button>
      </Box>
    </Box>
  );
};

export default ConnectWalletCard;
