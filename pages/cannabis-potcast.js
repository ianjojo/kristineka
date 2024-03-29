import React from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Cannabis.module.css";
import Footer from "../components/Footer";
import img01 from "../public/cannabis/01.gif";
import img02 from "../public/cannabis/02.jpg";
import img03 from "../public/cannabis/03.gif";
import img04 from "../public/cannabis/04.jpg";
import img05 from "../public/cannabis/05.jpg";
import img06 from "../public/cannabis/06.jpg";
import img07 from "../public/cannabis/07.jpg";
import img08 from "../public/cannabis/08.jpg";
import img09 from "../public/cannabis/09.gif";

export default function labietis() {
  return (
    <>
      <Head>
        <title>Kristine Kalva | Cannabis Potcast</title>
        <meta property='og:title' content='Cannabis Potcast' key='title' />
      </Head>
      <div className='blackbg'>
        <div className={styles.container}>
          <div className='wrapper imagewrapper'>
            <Image
              src={img01}
              alt='Picture of the author'
              layout='responsive'
              className='image'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img02}
              alt='Picture of the author'
              layout='responsive'
              className='image'
            />
          </div>
          <div className={styles.textbox}>
            <h3 className={styles.title}>The Cannabis Potcast</h3>
            <p className={styles.text}>
              Visual Identity, Digital and Print Collateral
            </p>
            <p className={styles.text}>
              The Cannabis Potcast is a podcast about the ever-changing
              landscape of Canadian cannabis culture, one toke at a time. It
              explores Canada&apos;s journey thorough the legalization of weed,
              features interviews with field experts and professionals, talks
              about the science and composition of weed and reviews different
              cultivars.
            </p>
            <p className={styles.text}>
              The aim of the rebranding was to simplify the existing logo and
              create a visual identity that reflects the serious and thorough
              nature of the podcast. It was important to create templates and
              define style guidelines that are easy to follow closely, but also
              allow space for creativity.
            </p>
          </div>
          <div className='twoimages smallgap'>
            <div className='wrapper imagewrapper'>
              <Image
                src={img03}
                alt='Picture of the author'
                className='image-portrait'
              />
            </div>
            <div className='wrapper imagewrapper'>
              <Image
                src={img04}
                alt='Picture of the author'
                className='image-portrait'
                placeholder='blur'
              />
            </div>
          </div>{" "}
          <div className='wrapper imagewrapper'>
            <Image
              src={img05}
              alt='Picture of the author'
              className='image'
              placeholder='blur'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img06}
              alt='Picture of the author'
              className='image'
              placeholder='blur'
            />
          </div>
          <div className='twoimages smallgap'>
            <div className='wrapper imagewrapper'>
              <Image
                src={img07}
                alt='Picture of the author'
                className='image'
                placeholder='blur'
              />
            </div>
            <div className='wrapper imagewrapper'>
              <Image
                src={img08}
                alt='Picture of the author'
                className='image'
                placeholder='blur'
              />
            </div>
          </div>{" "}
          <div className='wrapper imagewrapper'>
            <Image src={img09} alt='Picture of the author' className='image' />
          </div>
        </div>
      </div>
      <Footer mode='blackfooter' />
    </>
  );
}
