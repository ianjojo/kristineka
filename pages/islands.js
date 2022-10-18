import React from "react";
import styles from "../styles/Islands.module.css";
import Image from "next/image";
export default function islands() {
  return (
    <div className={styles.container}>
      <div className='wrapper imagewrapper'>
        <Image
          src='/islands/01.jpeg'
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
            src='/islands/02.jpeg'
            alt='Picture of the author'
            objectFit='cover'
            height='1300'
            width='1000'
          />
        </div>
        <div className='wrapper '>
          <Image
            src='/islands/03.jpeg'
            alt='Picture of the author'
            objectFit='cover'
            height='1300'
            width='1000'
          />
        </div>
      </div>
      <div className='wrapper imagewrapper'>
        <Image
          src='/islands/04.jpeg'
          alt='Picture of the author'
          layout='responsive'
          objectFit='cover'
          height='938'
          width='2000'
        />
      </div>
      <div className='twoimages'>
        <div className='wrapper '>
          <Image
            src='/islands/05.gif'
            alt='Picture of the author'
            objectFit='cover'
            height='1300'
            width='1000'
          />
        </div>
        <div className='wrapper '>
          <Image
            src='/islands/06.jpeg'
            alt='Picture of the author'
            objectFit='cover'
            height='1300'
            width='1000'
          />
        </div>
      </div>
      <div className='wrapper imagewrapper'>
        <Image
          src='/islands/07.jpeg'
          alt='Picture of the author'
          layout='responsive'
          objectFit='cover'
          height='938'
          width='2000'
        />
      </div>
      <div className='twoimages'>
        <div className='wrapper '>
          <Image
            src='/islands/08.jpeg'
            alt='Picture of the author'
            objectFit='cover'
            height='1300'
            width='1000'
          />
        </div>
        <div className='wrapper '>
          <Image
            src='/islands/09.jpeg'
            alt='Picture of the author'
            objectFit='cover'
            height='1300'
            width='1000'
          />
        </div>
      </div>
      <div className='wrapper imagewrapper'>
        <Image
          src='/islands/10.jpeg'
          alt='Picture of the author'
          layout='responsive'
          objectFit='cover'
          height='938'
          width='2000'
        />
      </div>
      <div className='wrapper imagewrapper'>
        <Image
          src='/islands/11.jpeg'
          alt='Picture of the author'
          layout='responsive'
          objectFit='cover'
          height='938'
          width='2000'
        />
      </div>
      <div className='wrapper imagewrapper'>
        <Image
          src='/islands/12.jpeg'
          alt='Picture of the author'
          layout='responsive'
          objectFit='cover'
          height='938'
          width='2000'
        />
      </div>
    </div>
  );
}
