import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Divider from "@mui/material/Divider";
import SettingsIcon from "@mui/icons-material/Settings";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton, Paper, Slide, styled, Tab, Tabs } from "@mui/material";
import { coinData } from "@/utils/coinData";
import { Box } from "@mui/system";
import { Modal } from "@mui/material";
import PropTypes from "prop-types";
import PositionModeData from "./PositionModeData";

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
function CryptoDetails() {
  const [valuee, setValue] = useState(0);
  const [selected, setSelected] = useState(0);
  const [checked, setChecked] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex justify-between items-center h-16 p-4 bg-[#171A1E] border-t border-gray-400 text-white">
      <div className="flex gap-4 items-center">
        <div
          className="flex gap-4 items-center cursor-pointer relative"
          onClick={() => setChecked(!checked)}
        >
          <img src={coinData[0]?.img} alt="btcusd" />
          <p className="text-lg">{coinData[0]?.title}</p>
          <KeyboardArrowDownIcon />
          <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                position: "absolute",
                top: "152%",
                "& > :not(style)": {
                  width: 220,
                  height: 150,
                  borderRadius: "0.5rem",
                },
                borderRadius: "0.5rem",
              }}
              className="bg-[#171A1E] z-50"
            >
              <Paper elevation={3} sx={{ background: "#171A1E" }}>
                <div className="py-2 px-3 bg-gray-800 text-white text-sm">
                  Select Market
                </div>
                <ul className="bg-[#171A1E] text-white p-2">
                  <li className="flex justify-between text-xs items-center hover:bg-gray-800 p-2">
                    <span className="flex items-center gap-2">
                      <img src={coinData[0]?.img} alt="btcusd" />
                      {coinData[0]?.title}
                    </span>
                    <span className="flex flex-col gap-1">
                      <span>{coinData[0]?.marketData?.price}</span>
                      <span>{coinData[0]?.marketData?.current}</span>
                    </span>
                  </li>
                </ul>
              </Paper>
            </Box>
          </Slide>
        </div>
        <Divider orientation="vertical" flexItem className="bg-[#78797B]" />
        <p className="text-lg">{coinData[0]?.indexPrice}</p>
        <Divider orientation="vertical" flexItem className="bg-[#78797B]" />
        <div className="text-center">
          <p className="text-xs text-[#78797B]">Index Price</p>
          <p className="text-xs mt-1">{coinData[0]?.indexPrice}</p>
        </div>
        <Divider orientation="vertical" flexItem className="bg-[#78797B]" />
        <div className="text-center">
          <p className="text-xs text-[#78797B]">Oracle Price</p>
          <p className="text-xs mt-1">{coinData[0]?.oraclePrice}</p>
        </div>
        <Divider orientation="vertical" flexItem className="bg-[#78797B]" />
        <div className="text-center">
          <p className="text-xs text-[#78797B]">24H Change</p>
          <p className="text-xs mt-1">{coinData[0]?.h_Change}</p>
        </div>
        <Divider orientation="vertical" flexItem className="bg-[#78797B]" />
        <div className="text-center">
          <p className="text-xs text-[#78797B]">24H High</p>
          <p className="text-xs mt-1">{coinData[0]?.h_High}</p>
        </div>
        <Divider orientation="vertical" flexItem className="bg-[#78797B]" />
        <div className="text-center">
          <p className="text-xs text-[#78797B]">24H Low</p>
          <p className="text-xs mt-1">{coinData[0]?.h_Low}</p>
        </div>
        <Divider orientation="vertical" flexItem className="bg-[#78797B]" />
        <div className="text-center">
          <p className="text-xs text-[#78797B]">Funding/Countdown</p>
          <p className="text-xs mt-1  flex gap-3 items-center">
            <span className="text-[#EBBC2E]">{coinData[0]?.funding}</span>
            <span>{coinData[0]?.countdown}</span>
          </p>
        </div>
      </div>

      <IconButton
        size="large"
        edge="end"
        aria-label="settings"
        aria-haspopup="true"
        color="primary"
        className="ml-auto"
        onClick={handleOpenModal}
      >
        <SettingsIcon />
      </IconButton>
      <Modal
        sx={{
          bgcolor: (theme) => theme.palette.background.paper,
          backdropFilter: "blur(4px)", // Apply backdrop filter for the translucent effect
          backgroundColor: (theme) => `${theme.palette.common.black}80`, // Set the translucent background color
        }}
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#171A1E",
            border: "1px solid #232529",
            boxShadow: 24,
            borderRadius: 2,
          }}
        >
          <Box class="flex text-[#B9B9B999] items-center bg-[#171A1E] py-4 px-4 border-b border-gray-500">
            <h2 id="modal-title" style={{ display: "flex", flex: 1 }}>
              Preference
            </h2>
            <CloseRoundedIcon onClick={handleCloseModal} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              height: 468,
              width: 584,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flex: 0.3,
                borderRightWidth: 1,
                borderColor: "#B9B9B999",
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Box>
                  <Tabs
                    value={valuee}
                    onChange={handleChange}
                    // textColor="#fff"
                    indicatorColor="secondary"
                    orientation="vertical"
                    visibleScrollbar={true}
                  >
                    <Tab
                      label="Order Confirmation"
                      sx={{
                        textTransform: "none",
                        color: "#78797B",
                        alignSelf: "flex-start",
                        textAlign: "left",
                      }}
                      {...a11yProps(0)}
                    />
                    <Tab
                      label="Position Mode"
                      sx={{
                        textTransform: "none",
                        color: "#78797B",
                        alignSelf: "flex-start",
                        textAlign: "left",
                      }}
                      {...a11yProps(1)}
                    />
                    <Tab
                      label="Price Protection"
                      sx={{
                        textTransform: "none",
                        color: "#78797B",
                        alignSelf: "flex-start",
                        textAlign: "left",
                      }}
                      {...a11yProps(2)}
                    />
                    <Tab
                      label="Notification"
                      sx={{
                        textTransform: "none",
                        color: "#78797B",
                        alignSelf: "flex-start",
                        textAlign: "left",
                      }}
                      {...a11yProps(3)}
                    />
                    <Tab
                      label="Asset Mode"
                      sx={{
                        textTransform: "none",
                        color: "#78797B",
                        alignSelf: "flex-start",
                        textAlign: "left",
                      }}
                      {...a11yProps(4)}
                    />
                  </Tabs>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "row", flex: 0.7 }}>
              <TabPanel value={valuee} index={1}>
                <PositionModeData />
              </TabPanel>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default CryptoDetails;
