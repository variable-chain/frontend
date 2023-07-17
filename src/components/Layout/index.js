import React from "react";
import CryptoDetails from "../CryptoDetails.js";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <CryptoDetails />
      <main className="p-3 bg-black min-h-screen">{children}</main>
    </div>
  );
}

export default Layout;
