import React from "react";
import styles from "../styles/Islands.module.css";
import Image from "next/image";
import Footer from "../components/Footer";
import Head from "next/head";

import img01 from "../public/islands/01.jpeg";
import img02 from "../public/islands/02.jpeg";
import img03 from "../public/islands/03.jpeg";
import img04 from "../public/islands/04.jpeg";
import img05 from "../public/islands/05.gif";
import img06 from "../public/islands/06.jpeg";
import img07 from "../public/islands/07.jpeg";
import img08 from "../public/islands/08.jpeg";
import img09 from "../public/islands/09.jpeg";
import img10 from "../public/islands/10.jpeg";
import img11 from "../public/islands/11.jpeg";
import img12 from "../public/islands/12.jpeg";

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
            height='1040'
            width='2500'
            priority={true}
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
        <div className='twoimages margin-bottom'>
          <div className='wrapper '>
            <Image
              src={img02}
              alt='Picture of the author'
              objectFit='contain'
              height='1875'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='wrapper '>
            <Image
              src={img03}
              alt='Picture of the author'
              objectFit='contain'
              height='1875'
              width='1500'
              placeholder='blur'
            />
          </div>
        </div>
        <div className='pad'>
          <div className='wrapper imagewrapper margin-bottom'>
            <Image
              src={img04}
              alt='Picture of the author'
              objectFit='contain'
              height='1389'
              width='2500'
              placeholder='blur'
            />
          </div>
        </div>
        <div className='twoimages margin-bottom'>
          <div className='wrapper '>
            <Image
              src={img05}
              alt='Picture of the author'
              objectFit='cover'
              height='1875'
              width='1500'
            />
          </div>
          <div className='wrapper '>
            <Image
              src={img06}
              alt='Picture of the author'
              objectFit='cover'
              height='1875'
              width='1500'
              placeholder='blur'
            />
          </div>
        </div>

        <div className='margin-bottom'>
          <div className='wrapper imagewrapper '>
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
        </div>
        <div className='twoimages margin-bottom'>
          <div className='wrapper '>
            <Image
              src={img08}
              alt='Picture of the author'
              objectFit='cover'
              height='1875'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='wrapper '>
            <Image
              src={img09}
              alt='Picture of the author'
              objectFit='cover'
              height='1875'
              width='1500'
              placeholder='blur'
            />
          </div>
        </div>
        <div className='margin-bottom'>
          <div className='wrapper imagewrapper'>
            <Image
              src={img10}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='1667'
              width='2500'
              placeholder='blur'
            />
          </div>
        </div>
        <div className='margin-bottom'>
          <div className='wrapper imagewrapper'>
            <Image
              src={img11}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='1665'
              width='2500'
              placeholder='blur'
            />
          </div>
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src={img12}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='1667'
            width='2500'
            placeholder='blur'
          />
        </div>
      </div>
      <Footer mode='whitefooter' />
    </>
  );
}
