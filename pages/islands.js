import React from "react";
import styles from "../styles/Islands.module.css";
import Image from "next/image";
import Footer from "../components/Footer";
import Head from "next/head";

import img01 from "../public/islands/01.webp";
import img02 from "../public/islands/02.webp";
import img03 from "../public/islands/03.webp";
import img04 from "../public/islands/04.webp";
import img05 from "../public/islands/05.gif";
import img06 from "../public/islands/06.webp";
import img07 from "../public/islands/07.webp";
import img08 from "../public/islands/08.webp";
import img09 from "../public/islands/09.webp";
import img10 from "../public/islands/10.jpeg";
import img11 from "../public/islands/11.webp";
import img12 from "../public/islands/12.webp";

export default function islands() {
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
          <h3 className={styles.title}>ISLANDS</h3>
          <p className={styles.text}>
            Visual Identity, Packaging, Digital and Print Collateral
          </p>
          <p className={styles.text}>
            Islands is a conceptual CBD skincare line. It lives in Pacific
            Northwest, it stands close to nature both in visual style and the
            formulas, leaving out synthetic ingredients, parabens and other
            harmful substances.
          </p>
          <p className={styles.text}>
            The colour scheme of black, muddy greens and gold accents in
            combination was used to create a boutique and natural feel.
          </p>
        </div>
        <div className='twoimages'>
          <div className='wrapper '>
            <Image
              src={img02}
              alt='Picture of the author'
              objectFit='cover'
              height='1300'
              width='1000'
              placeholder='blur'
            />
          </div>
          <div className='wrapper '>
            <Image
              src={img03}
              alt='Picture of the author'
              objectFit='cover'
              height='1300'
              width='1000'
              placeholder='blur'
            />
          </div>
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src={img04}
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
              src={img05}
              alt='Picture of the author'
              objectFit='cover'
              height='1300'
              width='1000'
            />
          </div>
          <div className='wrapper '>
            <Image
              src={img06}
              alt='Picture of the author'
              objectFit='cover'
              height='1300'
              width='1000'
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
            height='938'
            width='2000'
            placeholder='blur'
          />
        </div>
        <div className='twoimages'>
          <div className='wrapper '>
            <Image
              src={img08}
              alt='Picture of the author'
              objectFit='cover'
              height='1300'
              width='1000'
              placeholder='blur'
            />
          </div>
          <div className='wrapper '>
            <Image
              src={img09}
              alt='Picture of the author'
              objectFit='cover'
              height='1300'
              width='1000'
              placeholder='blur'
            />
          </div>
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src={img10}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='938'
            width='2000'
            placeholder='blur'
          />
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src={img11}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='938'
            width='2000'
            placeholder='blur'
          />
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src={img12}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='938'
            width='2000'
            placeholder='blur'
          />
        </div>
      </div>
      <Footer mode='whitefooter' />
    </>
  );
}
