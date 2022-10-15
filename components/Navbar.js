import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul className='navbar'>
          <Link href='/'>
            <li className='navbar__link'>
              <a>Kristine Kalva</a>
            </li>
          </Link>
          <Link href='/about'>
            <li className='navbar__link'>
              <a>About</a>
            </li>
          </Link>
          <Link href='/contact'>
            <li className='navbar__link'>
              <a>Contact me</a>
            </li>
          </Link>
        </ul>
      </nav>
      ;
    </div>
  );
}
