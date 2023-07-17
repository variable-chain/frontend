import { Box, Button, Divider, Typography, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";

function BuySellSectionButtonView({
  greenButtonText,
  redButtonText,
  show,
  showDropdown,
}) {
  const [checked, setChecked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };
  const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: "#78797B",
    "&.Mui-checked": {
      color: "#78797B",
    },
  }));
  const textBtnClass = {
    fontSize: 12,
    textTransform: "none",
    color: "#78797B",
    "&:hover": {
      color: "#4069FF",
    },
  };
  return (
    <Box>
      <Divider
        sx={{ my: 2 }}
        orientation="horizontal"
        flexItem
        className="bg-[#78797B]"
      />
      {showDropdown && (
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Button variant="text" sx={textBtnClass}>
            Good-Till-Cancelled
          </Button>

          <Box sx={{ display: "flex", flex: 1 }}>
            <img
              src="/arrow_down.svg"
              alt="Your Image"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                filter: isHovered ? "none" : "grayscale(100%)",
              }}
            />
          </Box>
        </Box>
      )}

      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 1,
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "0.2rem",
              textTransform: "none",
              height: 40,
              color: "#fff",
              mr: 1,
              flex: 0.45,
              backgroundColor: "#33B469",
              "&:hover": {
                backgroundColor: "#33B469",
              },
            }}
          >
            {greenButtonText}
          </Button>
          <Button
            variant="contained"
            sx={{
              flex: 0.45,
              borderRadius: "0.2rem",
              height: 40,
              textTransform: "none",
              backgroundColor: "#F55A5A",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#F55A5A",
              },
            }}
          >
            {redButtonText}
          </Button>
        </Box>
      </Box>
      {showDropdown && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mt: 1,
          }}
        >
          <CustomCheckbox
            style={{
              transform: "scale(0.7)",
            }}
            checked={checked}
            onChange={handleCheckboxChange}
            label="Show All Positions"
          />
          <Typography
            variant="body1"
            sx={{ color: "#78797B", fontSize: 13, fontWeight: 600 }}
          >
            Reduce-only
          </Typography>
        </Box>
      )}

      {show && (
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
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
                sx={{ color: "#78797B", fontSize: 13, fontWeight: 600, mr: 1 }}
              >
                Cost
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontSize: 13, fontWeight: 500 }}
              >
                0.00 USDT
              </Typography>
            </Box>
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
                sx={{ color: "#78797B", fontSize: 13, fontWeight: 600, mr: 1 }}
              >
                Cost
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontSize: 13, fontWeight: 500 }}
              >
                0.00 USDT
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
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
                sx={{ color: "#78797B", fontSize: 13, fontWeight: 600, mr: 1 }}
              >
                Max
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontSize: 13, fontWeight: 500 }}
              >
                0.0 USDT
              </Typography>
            </Box>
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
                sx={{ color: "#78797B", fontSize: 13, fontWeight: 600, mr: 1 }}
              >
                Max
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#fff", fontSize: 13, fontWeight: 500 }}
              >
                0.0 USDT
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default BuySellSectionButtonView;
