import Image from "next/image";
import { Inter } from "next/font/google";
import TradingViewWidget from "@/components/Widgets/TradingViewWidget";
import { Box, Grid, Paper } from "@mui/material";
import ChartSection from "@/components/Trading/ChartSection";
import TradeDataSection from "@/components/Trading/TradeDataSection";
import TableSection from "@/components/Trading/TableSection";
import BuySellSection from "@/components/Trading/BuySellSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box sx={{ color: "primary.text", bgcolor: 'primary.main' }}>
      {/* <div className="flex gap-4"> */}
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <ChartSection />
            </Grid>
            <Grid item xs={3}>
              <TradeDataSection />
            </Grid>
            <Grid item xs={12}>
              <TableSection />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <BuySellSection />
        </Grid>
      </Grid>

      {/* </div> */}
    </Box>
  );
}
