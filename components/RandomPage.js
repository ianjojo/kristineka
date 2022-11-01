import React, { useState, useEffect } from "react";
import Link from "next/link";
export default function RandomPage(props) {
  const [random, setRandom] = React.useState("");
  const [pagesName, setPagesName] = React.useState(0);
  const [next, setNext] = React.useState("");
  const [prev, setPrev] = React.useState("");
  useEffect(() => {
    randomPage();
    getPageNameNext();
    getPageNamePrev();
    console.log(next);
  }, [next]);

  const getPageNameNext = () => {
    const pageName = window.location.pathname;
    if (pageName === "/") {
      setNext("issa");
    } else if (pageName === "/issa") {
      setNext("gaan");
    } else if (pageName === "/gaan") {
      setNext("pizzacastle");
    } else if (pageName === "/pizzacastle") {
      setNext("sk-brochure");
    } else if (pageName === "/sk-brochure") {
      setNext("islands");
    } else if (pageName === "/islands") {
      setNext("labietis");
    } else if (pageName === "/labietis") {
      setNext("cannabis-potcast");
    } else if (pageName === "/cannabis-potcast") {
      setNext("sk-web");
    } else if (pageName === "/sk-web") {
      setNext("");
    }
  };

  const getPageNamePrev = () => {
    const pageName = window.location.pathname;
    if (pageName === "/") {
      setPrev("sk-web");
    } else if (pageName === "/sk-web") {
      setPrev("cannabis-potcast");
    } else if (pageName === "/cannabis-potcast") {
      setPrev("labietis");
    } else if (pageName === "/labietis") {
      setPrev("islands");
    } else if (pageName === "/islands") {
      setPrev("sk-brochure");
    } else if (pageName === "/sk-brochure") {
      setPrev("pizzacastle");
    } else if (pageName === "/pizzacastle") {
      setPrev("gaan");
    } else if (pageName === "/gaan") {
      setPrev("issa");
    } else if (pageName === "/issa") {
      setPrev("");
    }
  };
  const randomPage = () => {
    const pages = [
      "issa",
      "gaan",
      "pizzacastle",
      "sk-brochure",
      "islands",
      "labietis",
      "cannabis-potcast",
      "sk-web",
    ];
    const random = Math.floor(Math.random() * pages.length);
    let newUrl = pages[random];
    setRandom(newUrl);
  };
  return (
    <div className='random'>
      <Link href={`/${random}`} className={`randomlink ${props.mode}`}>
        Random
      </Link>
      {prev === "sk-web" ? (
        ""
      ) : (
        <Link href={`/${prev}`} className={`randomlink ${props.mode}`}>
          Previous
        </Link>
      )}
      <Link href={`/${next}`} className={`randomlink ${props.mode}`}>
        Next
      </Link>
    </div>
  );
}
