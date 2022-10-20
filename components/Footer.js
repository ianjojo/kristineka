import React, { useState, useEffect } from "react";
import RandomPage from "./RandomPage";

export default function Footer(props) {
  return (
    <div className='footer-wrapper'>
      <RandomPage mode={props.mode} />
      <div className='center footer'>
        <p className={props.mode}>© 2022 Kristine Kalva</p>
      </div>
    </div>
  );
}
