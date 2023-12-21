import { Paper } from "@mui/material";
import React, { useState } from "react";
import TradingViewWidget from "../Widgets/TradingViewWidget";
import TradingDepthChartWidget from "../Widgets/TradingDepthChardWidget";
import ProfileWidget from "../Widgets/ProfileWidget";

function ChartSection() {
  const [selected, setSelected] = useState("Price");

  const handleSelected = (e) => {
    console.log(e, "opopo");
    if (e.target.localName !== "li") {
      return;
    }
    setSelected(e.target.innerHTML);
  };
  console.log(selected);
  return (
    <Paper elevation={1} sx={{ color: "primary.text", backgroundColor: "inherit", bgcolor: 'primary.main', height: "91%" }} className="w-full">
      <ul
        className="flex gap-6 items-center py-3 px-4 border-b border-gray-400"
        onClick={handleSelected}
      >
        <li className="cursor-pointer hover:text-[#4069FF]">Price</li>
        <li className="cursor-pointer hover:text-[#4069FF]">Depth</li>
        <li className="cursor-pointer hover:text-[#4069FF]">Funding Rate</li>
        <li className="cursor-pointer hover:text-[#4069FF]">Details</li>
        <li className="cursor-pointer hover:text-[#4069FF]">Risk Limit</li>
      </ul>
      <div className="w-full h-full">
        {selected === "Price" && <TradingViewWidget />}
        {selected === "Depth" && <TradingDepthChartWidget />}
        {selected === "Details" && <ProfileWidget />}
      </div>
    </Paper>
  );
}

export default ChartSection;
