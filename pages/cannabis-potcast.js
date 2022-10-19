import React from "react";
import Image from "next/image";
import styles from "../styles/Cannabis.module.css";
import Footer from "../components/Footer";
export default function labietis() {
  return (
    <>
      <div className='blackbg'>
        <div className={styles.container}>
          <div className='wrapper imagewrapper'>
            <Image
              src='/cannabis/01.gif'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='678'
              width='2000'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src='/cannabis/02.jpg'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='688'
              width='2000'
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
                src='/cannabis/03.gif'
                alt='Picture of the author'
                objectFit='cover'
                height='1073'
                width='1000'
              />
            </div>
            <div className='wrapper imagewrapper'>
              <Image
                src='/cannabis/04.jpg'
                alt='Picture of the author'
                objectFit='cover'
                height='1073'
                width='1000'
              />
            </div>
          </div>{" "}
          <div className='wrapper imagewrapper'>
            <Image
              src='/cannabis/05.jpg'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='988'
              width='1500'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src='/cannabis/06.jpg'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='1188'
              width='1500'
            />
          </div>
          <div className='twoimages smallgap'>
            <div className='wrapper imagewrapper'>
              <Image
                src='/cannabis/07.jpg'
                alt='Picture of the author'
                objectFit='cover'
                height='600'
                width='1000'
              />
            </div>
            <div className='wrapper imagewrapper'>
              <Image
                src='/cannabis/08.jpg'
                alt='Picture of the author'
                objectFit='cover'
                height='600'
                width='1000'
              />
            </div>
          </div>{" "}
          <div className='wrapper imagewrapper'>
            <Image
              src='/cannabis/09.gif'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='988'
              width='1500'
            />
          </div>
        </div>
      </div>
      <Footer mode='blackfooter' />
    </>
  );
}
