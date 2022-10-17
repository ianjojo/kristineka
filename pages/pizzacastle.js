import React from "react";
import styles from "../styles/Pizza.module.css";
import Image from "next/image";
export default function pizzacastle() {
  return (
    <div className={styles.container}>
      <div className='wrapper imagewrapper'>
        <Image
          src='/pizza/01.jpeg'
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
          Vancouver, BC. Besides plant-based pizzas it also serves Indian food.
        </p>
        <p className={styles.text}>
          The aim was to illustrate the variety of the menu and make a point of
          the fact that it is a 100% plant-based restaurant. Bright colours,
          inspired by India, and the eclectic set of supporting elements make
          sure that the restaurant fits right in with the vibrant culture of
          Commercial Drive.
        </p>
      </div>
      <div className='wrapper '>
        <Image
          src='/pizza/02.jpeg'
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
            src='/pizza/03.jpeg'
            alt='Picture of the author'
            objectFit='cover'
            height='1300'
            width='1000'
          />
        </div>
        <div className='wrapper '>
          <Image
            src='/pizza/04.gif'
            alt='Picture of the author'
            objectFit='cover'
            height='1300'
            width='1000'
          />
        </div>
      </div>
      <div className='wrapper '>
        <Image
          src='/pizza/05.jpeg'
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
            src='/pizza/06.gif'
            alt='Picture of the author'
            objectFit='cover'
            height='1350'
            width='1000'
          />
        </div>
        <div className='wrapper '>
          <Image
            src='/pizza/07.jpeg'
            alt='Picture of the author'
            objectFit='cover'
            height='1350'
            width='1000'
          />
        </div>
      </div>
      <div className='wrapper '>
        <Image
          src='/pizza/08.jpeg'
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
            src='/pizza/09.jpeg'
            alt='Picture of the author'
            objectFit='cover'
            height='1380'
            width='1000'
          />
        </div>
        <div className='wrapper '>
          <Image
            src='/pizza/10.jpeg'
            alt='Picture of the author'
            objectFit='cover'
            height='1380'
            width='1000'
          />
        </div>
      </div>
    </div>
  );
}
