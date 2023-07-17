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
  
  function createData(id, markets, qty, value, entryPrice,oraclePrice, liqPrice,unrealizedPL,tpSL, closeBy) {
    return { id, markets, qty, value, entryPrice,oraclePrice, liqPrice,unrealizedPL,tpSL, closeBy};
  }
  
  const rows = [
    createData(0, "23,000.5", 10.896, "05:32:27", 123, 122,11,456,2343, 45789),
   
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
  
  function PositionsData() {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={rowClass}>
                Markets
              </TableCell>
              <TableCell align="left" sx={rowClass}>
               Qty
              </TableCell>
              <TableCell align="left" sx={rowClass}>
               Value
              </TableCell>
              <TableCell align="left" sx={rowClass}>
              Entry Price
              </TableCell>
              <TableCell align="left" sx={rowClass}>
             Oracle Price
              </TableCell>
              <TableCell align="left" sx={rowClass}>
             Liq. Price
              </TableCell>
              <TableCell align="left" sx={rowClass}>
           UnrealiZed P&L(%)
              </TableCell>
              <TableCell align="left" sx={rowClass}>
          TP/SL
              </TableCell>
              <TableCell align="right" sx={rowClass}>
             Close By
              </TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row) => (
              <TableRow key={row?.id} sx={{ border: 0 }}>
                <TableCell align="left" sx={columnClass}>
                  {row?.markets}
                </TableCell>
                <TableCell align="left" sx={columnClass}>
                  {row?.qty}
                </TableCell>
                <TableCell align="left" sx={columnClass}>
                  {row?.value}
                </TableCell>
                <TableCell align="left" sx={columnClass}>
                  {row?.entryPrice}
                </TableCell>
                <TableCell align="left" sx={columnClass}>
                  {row?.oraclePrice}
                </TableCell>
                <TableCell align="left" sx={columnClass}>
                  {row?.liqPrice}
                </TableCell>
                <TableCell align="left" sx={columnClass}>
                  {row?.unrealizedPL}
                </TableCell>
                <TableCell align="left" sx={columnClass}>
                  {row?.tpSL}
                </TableCell>
                <TableCell align="right" sx={columnClass}>
                  {row?.closeBy}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
  
  export default PositionsData;
  