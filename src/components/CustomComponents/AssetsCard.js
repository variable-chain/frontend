import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

function AssetsCard({ show }) {
  return (
    <Box>
      <Divider
        sx={{ mt: 1 }}
        orientation="horizontal"
        flexItem
        className="bg-[#78797B]"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mx: 1,
          alignItems: "center",
          mt: 1,
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "#D9D9D9", fontSize: 14, fontWeight: 500, mr: 1 }}
        >
          Assets
        </Typography>
        <Box sx={{ display: "flex", flex: 1 }}>
          <Image src="/eye.svg" height={9} width={13} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0.2rem",
              textTransform: "none",
              height: 30,
              // backgroundColor: "#2C3138",
              color: "#fff",
              // "&:hover": {
              //   backgroundColor: "#4069FF",
              // },
              mr: 1,
            }}
          >
            Deposit
          </Button>
          <Button
            variant="contained"
            sx={{
              borderRadius: "0.2rem",
              height: 30,
              textTransform: "none",
              backgroundColor: "#2C3138",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#4069FF",
              },
            }}
          >
            Withdraw
          </Button>
        </Box>
      </Box>
      {show && (
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mx: 1,
              mt: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "#78797B", fontSize: 13, fontWeight: 600 }}
            >
              Available Margin
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#78797B", fontSize: 13, fontWeight: 600 }}
            >
              -USDT
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              mx: 1,
              mt: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "#78797B", fontSize: 13, fontWeight: 600 }}
            >
              Total Equity
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#78797B", fontSize: 13, fontWeight: 600 }}
            >
              -USDT
            </Typography>
          </Box>
        </Box>
      )}

      <Divider
        sx={{ mt: 1 }}
        orientation="horizontal"
        flexItem
        className="bg-[#78797B]"
      />
      {show && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            mx: 1,
            mt: 1,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#78797B", fontSize: 13, fontWeight: 600 }}
          >
            Contract Details
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#78797B", fontSize: 13, fontWeight: 600 }}
          >
            BTCUSDT
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default AssetsCard;
