import { Box, Paper, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import PositionsData from "./PositionsData";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/system";
import { Check } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function TableSection(props) {
  const [checked, setChecked] = useState(false);

  const [selected, setSelected] = useState("Price");
  const { children, value, index, ...other } = props;
  const [valuee, setValue] = useState(0);

  const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    color: "#78797B",
    "&.Mui-checked": {
      color: "#78797B",
    },
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleSelected = (e) => {
    console.log(e, "opopo");
    if (e.target.localName !== "li") {
      return;
    }
    setSelected(e.target.innerHTML);
  };
  console.log(selected);
  return (
    <Paper elevation={1} className="w-full" sx={{ color: "primary.text", backgroundColor: "inherit", bgcolor: 'primary.main' }}>
      <Box
        className="flex gap-6 items-center py-3  mt-4 px-4"
        onClick={handleSelected}
      >
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 0.5, borderColor: '#78797B"' }}>
            <Tabs
              value={valuee}
              onChange={handleChange}
              textColor="primary.text"
              indicatorColor="secondary"
            >
              <Tab
                label="Positions"
                sx={{ textTransform: "none", }}
                {...a11yProps(0)}
              />
              <Tab
                label="Closed P&L"
                sx={{ textTransform: "none", }}
                {...a11yProps(1)}
              />
              <Tab
                label="Active"
                sx={{ textTransform: "none", }}
                {...a11yProps(2)}
              />
              <Tab
                label="Conditional"
                sx={{ textTransform: "none", }}
                {...a11yProps(3)}
              />
              <Tab
                label="Filled"
                sx={{ textTransform: "none", }}
                {...a11yProps(4)}
              />
              <Tab
                label="Order History"
                sx={{ textTransform: "none", }}
                {...a11yProps(5)}
              />
              <FormControlLabel
                control={
                  <CustomCheckbox
                    checked={checked}
                    onChange={handleCheckboxChange}
                  />
                }
                label="Show All Positions"
                sx={{ marginLeft: "auto" }}
              />
            </Tabs>
          </Box>

          <TabPanel value={valuee} index={0}>
            <PositionsData />
          </TabPanel>
        </Box>
      </Box>
    </Paper>
  );
}

export default TableSection;
