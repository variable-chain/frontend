import {
  Box,
  Collapse,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import OrderBook from "./OrderBook";
import RecentTrades from "./RcentTrades";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FlagIcon from "@mui/icons-material/Flag";

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

function TradeDataSection() {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(0.5);
  const [view, setView] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper
      elevation={1}
      className="p-2 rounded-none h-full"
      sx={{ background: "#171A1E" }}
    >
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab
              label="Order Book"
              {...a11yProps(0)}
              sx={{ textTransform: "none", color: "#78797B" }}
            />
            <Tab
              label="Recent Trades"
              {...a11yProps(1)}
              sx={{ textTransform: "none", color: "#78797B" }}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="flex justify-between mt-2 mb-2 items-center">
            <div className="flex gap-2 items-center">
              <IconButton
                size="large"
                edge="end"
                aria-haspopup="true"
                color="primary"
                onClick={() => setView(0)}
              >
                <img src="/dashboard-one.svg" alt="dashboard-one" />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-haspopup="true"
                color="primary"
                onClick={() => setView(1)}
              >
                <img src="/dashboard-two.svg" alt="dashboard-two" />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-haspopup="true"
                color="primary"
                onClick={() => setView(2)}
              >
                <img src="/dashboard-three.svg" alt="dashboard-three" />
              </IconButton>
            </div>
            <Select
              value={selected}
              label="Age"
              onChange={(e) => setSelected(e.target.value)}
              displayEmpty
              sx={{
                width: "70px",
                height: "30px",
                color: "#78797B",
                fontSize: "11px",
                borderColor: "#78797B",
                outline: "none",
              }}
            >
              <MenuItem value={0.5}>0.5</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </div>
          <Collapse in={view === 0 || view === 2}>
            <OrderBook color="#F55A5A" />
          </Collapse>
          <div className="flex justify-between mt-3 mb-3">
            <div className="flex gap-1 text-[#33B469]">
              <ArrowUpwardIcon />
              <p>25,747.5</p>
            </div>
            <div className="flex gap-1 text-[#4069FF]">
              <FlagIcon />
              <p>25,747.5</p>
            </div>
          </div>
          <Collapse in={view === 0 || view === 1}>
            <OrderBook color="#33B469" />
          </Collapse>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RecentTrades />
        </TabPanel>
      </Box>
    </Paper>
  );
}

export default TradeDataSection;
