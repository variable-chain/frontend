import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function createData(id, price, amount, time) {
  return { id, price, amount, time };
}

const rows = [
  createData(0, "23,000.5", 10.896, "05:32:27"),
  createData(1, "23,000.5", 10.896, "05:32:27"),
  createData(2, "23,000.5", 10.896, "05:32:27"),
  createData(3, "23,000.5", 10.896, "05:32:27"),
  createData(4, "23,000.5", 10.896, "05:32:27"),
  createData(5, "23,000.5", 10.896, "05:32:27"),
  createData(5, "23,000.5", 10.896, "05:32:27"),
  createData(5, "23,000.5", 10.896, "05:32:27"),
  createData(5, "23,000.5", 10.896, "05:32:27"),
  createData(5, "23,000.5", 10.896, "05:32:27"),
  createData(5, "23,000.5", 10.896, "05:32:27"),
  createData(5, "23,000.5", 10.896, "05:32:27"),
  createData(5, "23,000.5", 10.896, "05:32:27"),
  createData(5, "23,000.5", 10.896, "05:32:27"),
];

const rowClass = {
  fontSize: "11px",
  padding: "4px",
  border: "none",
  color: "#78797B",
};

const columnClass = {
  fontSize: "11px",
  padding: "4px",
  border: "none",
  color: "#78797B",
};

function RecentTrades() {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={rowClass}>
              Price(USDT)
            </TableCell>
            <TableCell align="left" sx={rowClass}>
              Amount(BTC)
            </TableCell>
            <TableCell align="right" sx={rowClass}>
              Time
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow key={row?.id} sx={{ border: 0 }}>
              <TableCell align="left" sx={columnClass}>
                {row?.price}
              </TableCell>
              <TableCell align="left" sx={columnClass}>
                {row?.amount}
              </TableCell>
              <TableCell align="right" sx={columnClass}>
                {row?.time}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RecentTrades;
