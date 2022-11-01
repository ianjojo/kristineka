import React from "react";
import Image from "next/legacy/image";
import styles from "../styles/Labietis.module.css";
import Footer from "../components/Footer";
import img01 from "../public/labietis/01.jpg";
import img02 from "../public/labietis/02.png";
import img03 from "../public/labietis/03.jpg";
import img04 from "../public/labietis/04.jpg";
import img05 from "../public/labietis/05.jpg";
import img06 from "../public/labietis/06.jpg";
import img07 from "../public/labietis/07.jpg";
import img08 from "../public/labietis/08.jpg";
import img09 from "../public/labietis/09.jpg";

export default function labietis() {
  return (
    <>
      <div className='blackbg'>
        <div className='container'>
          <div className='wrapper imagewrapper'>
            <Image
              src={img01}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='873'
              width='1500'
            />
          </div>
          <div className={styles.textbox}>
            <h3 className={styles.title}>Labietis</h3>
            <p className={styles.text}>Logo, packaging</p>
            <p className={styles.text}>
              Labietis is an experimental craft brewery based in Riga, Latvia,
              creating and serving artisanal beers with flavour profiles that
              are inspired by Latvian nature.
            </p>
            <p className={styles.text}>
              The logo character - Labietis itself - was based on a leader of a
              Baltic tribe from the 13th century. It needed to convey the
              strength, seriousness and authority of a 13th century tribe
              leader, but also appear contemporary.
            </p>
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img02}
              alt='Picture of the author'
              layout='responsive'
              objectFit='contain'
              height='600'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img03}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='973'
              placeholder='blur'
              width='1500'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img04}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='973'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img05}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='973'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img06}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='973'
              width='1500'
              placeholder='blur'
            />
          </div>
          <div className='twoimages'>
            <div className='wrapper imagewrapper'>
              <Image
                src={img07}
                alt='Picture of the author'
                objectFit='cover'
                height='1073'
                width='1000'
                placeholder='blur'
              />
            </div>
            <div className='wrapper imagewrapper'>
              <Image
                src={img08}
                alt='Picture of the author'
                objectFit='cover'
                height='1073'
                width='1000'
                placeholder='blur'
              />
            </div>
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img09}
              alt='Picture of the author'
              layout='responsive'
              objectFit='cover'
              height='973'
              width='1500'
              placeholder='blur'
            />
          </div>
        </div>
      </div>
      <Footer mode='blackfooter' />
    </>
  );
}
