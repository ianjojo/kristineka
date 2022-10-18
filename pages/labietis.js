import React from "react";
import Image from "next/image";
import styles from "../styles/Labietis.module.css";
export default function labietis() {
  return (
    <div className='blackbg'>
      <div className='container'>
        <div className='wrapper imagewrapper'>
          <Image
            src='/labietis/01.jpg'
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
            creating and serving artisanal beers with flavour profiles that are
            inspired by Latvian nature.
          </p>
          <p className={styles.text}>
            The logo character - Labietis itself - was based on a leader of a
            Baltic tribe from the 13th century. It needed to convey the
            strength, seriousness and authority of a 13th century tribe leader,
            but also appear contemporary.
          </p>
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src='/labietis/02.png'
            alt='Picture of the author'
            layout='responsive'
            objectFit='contain'
            height='600'
            width='1500'
          />
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src='/labietis/03.jpg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='973'
            width='1500'
          />
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src='/labietis/04.jpg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='973'
            width='1500'
          />
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src='/labietis/05.jpg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='973'
            width='1500'
          />
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src='/labietis/06.jpg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='973'
            width='1500'
          />
        </div>
        <div className='twoimages'>
          <div className='wrapper imagewrapper'>
            <Image
              src='/labietis/07.jpg'
              alt='Picture of the author'
              objectFit='cover'
              height='1073'
              width='1000'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src='/labietis/08.jpg'
              alt='Picture of the author'
              objectFit='cover'
              height='1073'
              width='1000'
            />
          </div>
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src='/labietis/09.jpg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='973'
            width='1500'
          />
        </div>
      </div>
    </div>
  );
}
