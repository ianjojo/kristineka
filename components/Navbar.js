import React from "react";
import Link from "next/link";
import { useState } from "react";
import Mail from "../components/Mail";
export default function Navbar(props) {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <nav>
      <ul className='navbar'>
        <Link href='/' legacyBehavior>
          <li className='navbar__link'>
            <a>Kristine Kalva</a>
          </li>
        </Link>
        <Link href='/about' legacyBehavior>
          <li className='navbar__link'>
            <a>About</a>
          </li>
        </Link>

        <Mail goToTop={props.goToTop} />
      </ul>
    </nav>
  );
}
