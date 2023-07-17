import { Paper } from "@mui/material";
import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import OpenSection from "./OpenSection";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      className="bg-[#1F2328]"
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function BuySellSection() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Paper elevation={1} className="h-96" sx={{ background: "#1F2328" }}>
      <Box sx={{ bgcolor: "background.paper" }}>
        <AppBar position="static" sx={{ background: "#171A1E" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
          >
            <Tab
              label="Open"
              {...a11yProps(0)}
              sx={{ textTransform: "none" }}
            />
            <Tab
              label="Close"
              {...a11yProps(1)}
              sx={{ textTransform: "none" }}
            />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <OpenSection />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
      </Box>
    </Paper>
  );
}

export default BuySellSection;
