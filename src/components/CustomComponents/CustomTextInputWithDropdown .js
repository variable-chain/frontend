import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { Typography, Button, Box } from "@mui/material";

const CustomTextInputWithDropdown = ({ placeholder, dropdownLabel }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textBtnClass = {
    textTransform: "none",
    color: "primary.text",
  };

  return (
    <Box
      style={{
        backgroundColor: "primary.main",
        borderRadius: 3,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 2,
        marginTop: 10,
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: "primary.text", fontSize: 13, fontWeight: 400, flex: 1, ml: 1 }}
      >
        {placeholder}
      </Typography>
      <Button variant="text" sx={textBtnClass}>
        {dropdownLabel}
      </Button>
      <Box sx={{ display: "flex", mr: 1 }}>
        <img
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          src="/arrow_down.svg"
          alt="Your Image"
          style={{
            filter: isHovered ? "grayscale(100%)" : "grayscale(100%)",
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomTextInputWithDropdown;
