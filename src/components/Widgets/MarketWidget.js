import React, { useEffect, useRef, memo } from "react";

function MarketWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
            "width": "100%",
            "height": "100%",
            "defaultColumn": "overview",
            "screener_type": "crypto_mkt",
            "displayCurrency": "USD",
            "colorTheme": "dark",
            "locale": "in"
        }`;
    container.current.appendChild(script);
    return () => {
      container?.current?.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(MarketWidget);
