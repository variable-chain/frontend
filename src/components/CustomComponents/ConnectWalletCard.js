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
      sx={{ p: 2 }}
    >
      <Image src="/logo-VE-full.svg" height={30} width={139} />
      <Typography
        textAlign={"center"}
        variant="body1"
        sx={{ color: "#fff", mt: 3 }}
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

            // backgroundColor: "#2C3138",
            color: "#fff",
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
            backgroundColor: "#2C3138",
            color: "#fff",
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
