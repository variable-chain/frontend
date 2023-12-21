import { Box, Button, ButtonBase, Divider } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";
import { Typography, Checkbox } from "@mui/material";
import CustomTextInputWithDropdown from "../CustomComponents/CustomTextInputWithDropdown ";
import AssetsCard from "../CustomComponents/AssetsCard";
import BuySellSectionButtonView from "../CustomComponents/BuySellSectionButtonView";
import BuySellSectionCheckboxView from "../CustomComponents/BuySellSectionCheckboxView";
import { styled } from "@mui/system";
import RangeBarWithBreakPoints from "../CustomComponents/RangeBarWithBreakPoints";
import ConnectWalletCard from "../CustomComponents/ConnectWalletCard";

const btnClass = {
  borderRadius: "0.5rem",
  textTransform: "none",
  width: "100%",
};
const textBtnClass = {
  textTransform: "none",
  color: "primary.text",
  "&:hover": {
    color: "primary.main",
  },
};

function OpenSection() {
  const [checked, setChecked] = useState(false);
  const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
    // color: "primary.main",
    "&.Mui-checked": {
      // color: "#78797B",
    },
  }));
  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  const [isHovered, setIsHovered] = useState(false);
  const [button1, setButton1] = useState(false);
  const [button2, setbutton2] = useState(false);
  const [button3, setbutton3] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Box sx={{ color: "primary.text", bgcolor: 'primary.main' }}>
      <div className="flex gap-2 mb-2">
        <Button variant="contained" sx={btnClass}>
          Cross
        </Button>
        <Button variant="contained" sx={btnClass}>
          20x
        </Button>
      </div>
      <Divider flexItem />
      <Box sx={{ display: "flex" }}>
        <Button
          onClick={() => setButton1(true)}
          variant="contained"
          sx={textBtnClass}
        >
          Limit
        </Button>
        <Button variant="contained" sx={textBtnClass}>
          Market
        </Button>
        <Button variant="contained" sx={textBtnClass}>
          Stop Limit
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

        <Image
          src="/info.svg"
          height={15}
          width={15}
          style={{ marginRight: 11 }}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", mx: 1.5 }}>
        <Typography
          variant="body1"
          sx={{ color: "primary.text", fontSize: 13, fontWeight: 600 }}
        >
          Avbl
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: "primary.text", fontSize: 13, fontWeight: 400, ml: 1 }}
        >
          2344.54 USD
        </Typography>
        {button1 && (
          <Box sx={{ flex: 1, alignSelf: "center", ml: 1 }}>
            <Image src="/shuffle.svg" height={15} width={11} />
          </Box>
        )}

        <Image src="/balanceIcon.svg" height={15} width={11} />
      </Box>
      <CustomTextInputWithDropdown
        placeholder={"Price"}
        dropdownLabel={"I23379.0 USDT"}
      />
      <CustomTextInputWithDropdown
        placeholder={"Size "}
        dropdownLabel={"USDT"}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mx: 1.5,
          mt: 2,
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            variant="body1"
            sx={{ color: "primary.text", fontSize: 13, fontWeight: 600 }}
          >
            Buy
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "primary.text", fontSize: 13, fontWeight: 400, ml: 1 }}
          >
            2344.54 USD
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            variant="body1"
            sx={{ color: "primary.text", fontSize: 13, fontWeight: 600 }}
          >
            Sell
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "primary.text", fontSize: 13, fontWeight: 400, ml: 1 }}
          >
            2344.54 USD
          </Typography>
        </Box>
      </Box>
      <BuySellSectionCheckboxView showCheckbox1={true} showCheckbox2={true} />
      {button2 && (
        <CustomTextInputWithDropdown
          placeholder={"Take Profit"}
          dropdownLabel={"Index"}
        />
      )}
      {button2 && (
        <CustomTextInputWithDropdown
          placeholder={"Stop loss "}
          dropdownLabel={"Index"}
        />
      )}

      <BuySellSectionButtonView
        greenButtonText={"Buy/Long"}
        redButtonText={"Sell/Short"}
        show={true}
      />

      <AssetsCard />
      <Box sx={{ mt: 2, width: "80%" }}>
        <RangeBarWithBreakPoints />
      </Box>

      <ConnectWalletCard />
      <Box
        sx={{
          width: "90%",
          alignSelf: "center",
        }}
      ></Box>
    </Box>
  );
}

export default OpenSection;
