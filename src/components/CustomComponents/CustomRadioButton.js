import React from "react";

const CustomRadioButton = ({
  label,
  value,
  checked,
  onChange,
  description,
}) => {
  return (
    <div>
      <div
        className={`custom-radio-button ${checked ? "checked" : ""}`}
        onClick={() => onChange(value)}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        {checked ? (
          <div
            className="radio-button"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "6px solid #4069FF",
              marginRight: "8px",
              backgroundColor: "#fff",
            }}
          ></div>
        ) : (
          <div
            className="radio-button"
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border: "1px solid #78797B",
              marginRight: "8px",
            }}
          ></div>
        )}

        <span style={{ fontSize: 12, color: "#fff", fontWeight: 600 }}>
          {label}
        </span>
      </div>
      <div style={{ marginRight: 25, marginLeft: 25 }}>
        <span
          style={{
            fontSize: 11,
            color: "#78797B",
            fontWeight: 500,
          }}
        >
          {description}
        </span>
      </div>
    </div>
  );
};

export default CustomRadioButton;
