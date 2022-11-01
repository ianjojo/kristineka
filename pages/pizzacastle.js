import React from "react";
import styles from "../styles/Pizza.module.css";
import Image from "next/legacy/image";
import Footer from "../components/Footer";
import img01 from "../public/pizza/01.jpeg";
import img02 from "../public/pizza/02.jpeg";
import img03 from "../public/pizza/03.jpeg";
import img04 from "../public/pizza/04.gif";
import img05 from "../public/pizza/05.jpeg";
import img06 from "../public/pizza/06.gif";
import img07 from "../public/pizza/07.jpeg";
import img08 from "../public/pizza/08.jpeg";
import img09 from "../public/pizza/09.jpeg";
import img10 from "../public/pizza/10.jpeg";

export default function pizzacastle() {
  return (
    <>
      <div className={styles.container}>
        <div className='wrapper imagewrapper'>
          <Image
            src={img01}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='938'
            width='2000'
          />
        </div>
        <div className={styles.textbox}>
          <h3 className={styles.title}>Pizza Castle</h3>
          <p className={styles.text}>
            Visual Identity, Illustrations, Digital and Print Collateral
          </p>
          <p className={styles.text}>
            The Pizza Castle is a vegan restaurant on Commercial Drive in
            Vancouver, BC. Besides plant-based pizzas it also serves Indian
            food.
          </p>
          <p className={styles.text}>
            The aim was to illustrate the variety of the menu and make a point
            of the fact that it is a 100% plant-based restaurant. Bright
            colours, inspired by India, and the eclectic set of supporting
            elements make sure that the restaurant fits right in with the
            vibrant culture of Commercial Drive.
          </p>
        </div>
        <div className='wrapper '>
          <Image
            src={img02}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='938'
            width='2000'
            placeholder='blur'
          />
        </div>
        <div className='twoimages'>
          <div className='wrapper '>
            <Image
              src={img03}
              alt='Picture of the author'
              objectFit='cover'
              height='1120'
              width='1000'
              placeholder='blur'
              className='imgfix'
              layout='responsive'
            />
          </div>
          <div className='wrapper '>
            <Image
              className='imgfix'
              layout='responsive'
              src={img04}
              alt='Picture of the author'
              objectFit='cover'
              height='1120'
              width='1000'
            />
          </div>
        </div>
        <div className='wrapper '>
          <Image
            src={img05}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='938'
            width='2000'
            placeholder='blur'
          />
        </div>
        <div className='twoimages'>
          <div className='wrapper '>
            <Image
              src={img06}
              alt='Picture of the author'
              objectFit='cover'
              height='1350'
              width='1000'
            />
          </div>
          <div className='wrapper '>
            <Image
              src={img07}
              alt='Picture of the author'
              objectFit='cover'
              height='1350'
              width='1000'
              placeholder='blur'
            />
          </div>
        </div>
        <div className='wrapper '>
          <Image
            src={img08}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='938'
            width='2000'
            placeholder='blur'
          />
        </div>
        <div className='twoimages'>
          <div className='wrapper '>
            <Image
              src={img09}
              alt='Picture of the author'
              objectFit='cover'
              height='1380'
              width='1000'
              placeholder='blur'
            />
          </div>
          <div className='wrapper '>
            <Image
              src={img10}
              alt='Picture of the author'
              objectFit='cover'
              height='1380'
              width='1000'
              placeholder='blur'
            />
          </div>
        </div>
      </div>
      <Footer mode='whitefooter' />
    </>
  );
}
