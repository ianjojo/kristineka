import React, { useState } from "react";
import Image from "next/legacy/image";
import styles from "../styles/Gaan.module.css";
import Footer from "../components/Footer";
import img01 from "../public/gaan/01.webp";
import img02 from "../public/gaan/02.webp";
import img03 from "../public/gaan/03.gif";
import img04 from "../public/gaan/04.webp";
import img05 from "../public/gaan/05.webp";
import img06 from "../public/gaan/06.webp";
import img07 from "../public/gaan/07.webp";
import img08 from "../public/gaan/08.webp";
import img09 from "../public/gaan/09.webp";
import img10 from "../public/gaan/10.webp";
import img11 from "../public/gaan/11.gif";
import img12 from "../public/gaan/12.webp";
import img13 from "../public/gaan/13.webp";
import img14 from "../public/gaan/14.gif";
import img15 from "../public/gaan/15.webp";

function Gaan() {
  return (
    <>
      <div className='blackbg'>
        <div className='container'>
          <div className='wrapper'>
            <Image
              src={img01}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='wrapper'>
            <Image
              src={img02}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='560'
              width='1750'
              placeholder='blur'
            />
          </div>
          <div className='wrapper'>
            <Image
              src={img03}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img04}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='twoimages'>
            <div className='wrapper imagewrapper'>
              <Image
                src={img05}
                alt='Picture of the author'
                objectFit='cover'
                height='770'
                width='1000'
                placeholder='blur'
              />
            </div>
            <div className='wrapper imagewrapper'>
              <Image
                src={img06}
                alt='Picture of the author'
                objectFit='cover'
                height='770'
                width='750'
                placeholder='blur'
              />
            </div>
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img07}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img08}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img09}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='twoimages'>
            <div className='wrapper imagewrapper'>
              <Image
                src={img10}
                alt='Picture of the author'
                objectFit='cover'
                height='1100'
                width='1000'
                placeholder='blur'
              />
            </div>
            <div className='wrapper imagewrapper'>
              <Image
                src={img11}
                alt='Picture of the author'
                objectFit='cover'
                height='1100'
                width='1000'
              />
            </div>
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img12}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img13}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='twoimages'>
            <div className='wrapper imagewrapper'>
              <Image
                src={img14}
                alt='Picture of the author'
                objectFit='cover'
                height='872'
                width='800'
              />
            </div>
            <div className='wrapper imagewrapper'>
              <Image
                src={img15}
                alt='Picture of the author'
                objectFit='cover'
                height='872'
                width='1000'
                placeholder='blur'
              />
            </div>
          </div>
          <div className={styles.textbox}>
            <h3 className={styles.title}>gaan + co</h3>
            <p className={styles.text}>
              Visual Identity, packaging, print design. Photography by Kristine
              Kalva and Jillian Mundy
            </p>
            <p className={styles.text}>
              gaan + co makes eco friendly pre-moisturized wellness wipes. They
              offer on-the-go solution for travelers, festival goers, hikers,
              gym go-ers, and everyone in between. Gaan means “to go” in
              Afrikaans and Dutch.
            </p>
            <p className={styles.text}>
              Extending on the story and philosophy a set of colourful patterns
              was created to go with the logo, inspired by nature and the
              on-the-go adventurous feel.
            </p>
          </div>
        </div>
      </div>
      <Footer mode='blackfooter' />
    </>
  );
}

export default Gaan;
