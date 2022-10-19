import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
    });
    console.log("go to top");
  };
  return (
    <div>
      <Navbar goToTop={goToTop} />
      {children}
    </div>
  );
}
