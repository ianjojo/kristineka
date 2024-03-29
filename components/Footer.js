import React, { useState, useEffect } from "react";
import RandomPage from "./RandomPage";

export default function Footer(props) {
  return (
    <div className={`footer-wrapper ${props.mode}`}>
      <RandomPage mode={props.mode} nolinks={props.nolinks} />
      <div className={`center footer ${props.mode}`}>
        <p className={props.mode}>© 2022 Kristine Kalva</p>
      </div>
    </div>
  );
}
