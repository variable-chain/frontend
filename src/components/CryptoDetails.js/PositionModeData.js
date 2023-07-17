import React, { useState } from "react";
import CustomRadioButton from "../CustomComponents/CustomRadioButton";

const PositionModeData = () => {
  const [selectedValue, setSelectedValue] = useState("selected");

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div style={{ padding: 20 }}>
      <CustomRadioButton
        label="One Way Mode"
        value="selected"
        checked={selectedValue === "selected"}
        onChange={handleChange}
        description={
          "In One-Way Mode, a symbol only supports holding a position in one position"
        }
      />
      <CustomRadioButton
        label="Hedge Mode"
        value="option2"
        checked={selectedValue === "option2"}
        onChange={handleChange}
        description={
          "In One-Way Mode, a symbol only supports holding a position in one position"
        }
      />
    </div>
  );
};

export default PositionModeData;
