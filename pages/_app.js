import React from "react";
import "../styles/global.css";
import { AppWrapper } from "./appContext";

function FairSquareApp({ Component, pageProps }) {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}

export default FairSquareApp;
