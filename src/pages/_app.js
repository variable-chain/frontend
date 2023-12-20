import Layout from "@/components/Layout";
import "@/styles/globals.css";
import * as React from "react";
// import PropTypes from "prop-types";
import Head from "next/head";
// import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, ThemeContext } from "@emotion/react";
import theme from "@/components/Layout/theme";
import createEmotionCache from "@/components/Layout/createEmotionCache";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { useEffect, useState } from "react";

import { configureChains, createConfig, WagmiConfig } from "wagmi";

import {
  mainnet,
  optimism,
  polygon,
  avalanche,
  bsc,
  arbitrum,
} from "wagmi/chains";
import { ThemeProvider } from "@/utils/themeContext";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

//1. Get projectID at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}

// 2. Configure wagmi client
const chains = [mainnet, polygon, optimism, avalanche, bsc, arbitrum];

const { publicClient } = configureChains(chains, [
  w3mProvider({
    projectId,
  }),
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({
    version: 1,
    chains,
    projectId,
  }),
  publicClient,
});

// 3. Configure modal ethereum client
const ethereumClient = new EthereumClient(wagmiConfig, chains);

// 4. Wrap your app with WagmiProvider and add <Web3Modal /> component

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [ready, setReady] = useState(false);
  const customTheme = {
    background: "linear-gradient(to right, #ff6b6b, #556270)", // Example background gradient
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Example box shadow
    // Customize other theme properties as needed
  };

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            {ready ? (
              <WagmiConfig config={wagmiConfig}>
                <Component {...pageProps} />
              </WagmiConfig>
            ) : null}
            <Web3Modal
              theme={customTheme}
              projectId={projectId}
              ethereumClient={ethereumClient}
            />
          </Layout>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
