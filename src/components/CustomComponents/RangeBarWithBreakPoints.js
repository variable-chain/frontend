import React from "react";
import { Box, Slider } from "@mui/material";
import { styled } from "@mui/system";

const theme = { palette: { primary: { main: "#ffffff" } } };
const breakpoints = [
  // { value: 0, disabled: false },
  { value: 25, disabled: true },
  { value: 50, disabled: false },
  { value: 75, disabled: true },
  { value: 100, disabled: false },
];

const StyledSlider = styled(Slider)(({}) => ({
  height: 8,
  "& .MuiSlider-mark": {
    width: 15,
    height: 15,

    background: `url('./diamond-solid.svg')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  "& .MuiSlider-thumb": {
    width: 15,
    height: 15,

    background: `url('./diamond-dark.svg')`,
    backgroundSize: "cover",
    backgroundPosition: "center center",

    "&:before": {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
    "&.Mui-focusVisible": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-rail": {
    height: 4,
    color: "#393d40",
  },
  "& .MuiSlider-track": {
    height: 4,
    color: "#d9d9d9",
  },
  "& .MuiSlider-markLabel[data-index]": {
    height: 4,
    "&:disabled": {
      backgroundColor: "#ccc",
    },
  },
}));

function RangeBarWithBreakPoints() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleStepStyle = (index) => {
    if (breakpoints[index]?.disabled) {
      return {
        backgroundColor: "transparent",
      };
    }
    return {};
  };

  return (
    <StyledSlider
      value={value}
      onChange={handleChange}
      marks={breakpoints.map((breakpoint) => ({
        value: breakpoint.value,
        label: "",
      }))}
      min={0}
      max={100}
      step={1}
      // valueLabelDisplay="on"
      style={handleStepStyle(value)}
    />
  );
}

export default RangeBarWithBreakPoints;
