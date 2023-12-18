import React, { useEffect, useRef, memo } from "react";

function AnalysisWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
            "interval": "5m",
            "width": "100%",
            "isTransparent": false,
            "height": "100%",
            "symbol": "BITSTAMP:BTCUSD",
            "showIntervalTabs": true,
            "displayMode": "multiple",
            "locale": "in",
            "colorTheme": "dark"
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

export default memo(AnalysisWidget);
