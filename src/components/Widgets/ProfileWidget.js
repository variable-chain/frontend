import React, { useEffect, useRef } from "react";

function ProfileWidget() {
  const container = useRef();
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
            "width": "100%",
            "height": "100%",
            "colorTheme": "dark",
            "isTransparent": false,
            "symbol": "COINBASE:BTCUSD",
            "locale": "in"
        }`;
    container.current.appendChild(script);
    return () => {
      container?.current?.removeChild(script);
    };
  }, []);
  return (
    <div class="tradingview-widget-container" ref={container}>
      <div class="tradingview-widget-container__widget"></div>
      {/* <div class="tradingview-widget-copyright">
        <a
          href="https://in.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span class="blue-text">Track all markets on TradingView</span>
        </a>
      </div> */}
    </div>
  );
}

export default ProfileWidget;
