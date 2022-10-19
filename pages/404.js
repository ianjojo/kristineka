import React, { useEffect } from "react";
import Router from "next/router";
function NotFound() {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 3000);
  }, []);
  return (
    <div className='container'>
      <h1 className=''>404 - page not found</h1>
      <h3>👻</h3>
    </div>
  );
}

export default NotFound;
