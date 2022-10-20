import React from "react";

export default function Footer(props) {
  console.log(props);
  return (
    <div className='center footer'>
      <p className={props.mode}>© 2022 Kristine Kalva</p>
    </div>
  );
}
