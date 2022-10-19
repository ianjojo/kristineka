import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Gaan.module.css";
import Footer from "../components/Footer";
function Gaan() {
  return (
    <>
      <div className='blackbg'>
        <div className='container'>
          <div className='wrapper'>
            {/*         <LightGallery speed={200} plugins={[lgZoom]}>
            <a href='/gaan/01.webp'> */}
            <Image
              src='/gaan/01.webp'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
            />
            {/*        </a>
          </LightGallery> */}
          </div>
          <div className='wrapper'>
            {/*           <LightGallery speed={200} plugins={[lgZoom]}>
            <a href='/gaan/02.webp'> */}
            <Image
              src='/gaan/02.webp'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='560'
              width='1750'
            />
            {/*     </a>
          </LightGallery> */}
          </div>
          <div className='wrapper'>
            {/*    <LightGallery speed={200} plugins={[lgZoom]}>
            <a href='/gaan/03.gif'> */}
            <Image
              src='/gaan/03.gif'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
            />
            {/*         </a>
          </LightGallery> */}
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src='/gaan/04.webp'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
            />
          </div>
          <div className='twoimages'>
            <div className='wrapper imagewrapper'>
              <Image
                src='/gaan/05.webp'
                alt='Picture of the author'
                objectFit='cover'
                height='770'
                width='1000'
              />
            </div>
            <div className='wrapper imagewrapper'>
              <Image
                src='/gaan/06.webp'
                alt='Picture of the author'
                objectFit='cover'
                height='770'
                width='750'
              />
            </div>
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src='/gaan/07.webp'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src='/gaan/08.webp'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src='/gaan/09.webp'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
            />
          </div>
          <div className='twoimages'>
            <div className='wrapper imagewrapper'>
              <Image
                src='/gaan/10.webp'
                alt='Picture of the author'
                objectFit='cover'
                height='1100'
                width='1000'
              />
            </div>
            <div className='wrapper imagewrapper'>
              <Image
                src='/gaan/11.gif'
                alt='Picture of the author'
                objectFit='cover'
                height='1100'
                width='1000'
              />
            </div>
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src='/gaan/12.webp'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src='/gaan/13.webp'
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
            />
          </div>
          <div className='twoimages'>
            <div className='wrapper imagewrapper'>
              <Image
                src='/gaan/14.gif'
                alt='Picture of the author'
                objectFit='cover'
                height='872'
                width='800'
              />
            </div>
            <div className='wrapper imagewrapper'>
              <Image
                src='/gaan/15.webp'
                alt='Picture of the author'
                objectFit='cover'
                height='872'
                width='1000'
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
