import { Box, Button, Divider, Typography, Checkbox } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/system";
import Image from "next/image";

function BuySellSectionCheckboxView({ showCheckbox1, showCheckbox2 }) {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    setChecked2(event.target.checked2);
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
        sx={{ mt: 1, mb: 1 }}
        orientation="horizontal"
        flexItem
        className="bg-[#78797B]"
      />
      {showCheckbox1 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 20,
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
            sx={{ color: "#78797B", fontSize: 12, fontWeight: 600 }}
          >
            Take Profit/Stop Loss
          </Typography>
          <Image
            src="/info.svg"
            height={15}
            width={15}
            style={{ marginLeft: 4 }}
          />
        </Box>
      )}
      {showCheckbox2 && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 20,
          }}
        >
          <CustomCheckbox
            style={{
              transform: "scale(0.7)",
            }}
            checked={checked2}
            onChange={handleCheckboxChange}
            label="Show All Positions"
          />
          <Typography
            variant="body1"
            sx={{ color: "#78797B", fontSize: 12, fontWeight: 600 }}
          >
            Reduce-only
          </Typography>
        </Box>
      )}
    </Box>
  );
}

export default BuySellSectionCheckboxView;
