import React from "react";
import Image from "next/image";
import styles from "../styles/Issa.module.css";
import Footer from "../components/Footer";
function issa() {
  return (
    <>
      <div className={styles.container}>
        <div className='wrapper'>
          <Image
            src='/issa/01.jpeg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
          />
        </div>
        <div className={styles.textbox}>
          <h3 className={styles.title}>I S S A</h3>
          <p className={styles.text}>
            Visual Identity, Packaging, Illustrations, Digital and Print
            Collateral
          </p>
          <p className={styles.text}>
            I S S A is dedicated to the sesame seed - from the seeds themselves
            to products like halva and tahini. The aim of the project was to
            create a visual identity that tells the whole story of the sesame
            seed - from the plant to the end product.{" "}
          </p>
          <p className={styles.text}>
            The purpose of pairing sesame seeds with cobalt blue and bright
            orange was to steer away from the conventional colours and imagery
            that is associated with sesame seeds and sesame seed products.
          </p>
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src='/issa/02.gif'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
          />
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src='/issa/03.jpeg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
            className={styles.image}
          />
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src='/issa/04.jpeg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
            className={styles.image}
          />
        </div>
        <div className='twoimages'>
          <div className={styles.imagewrapper}>
            <Image
              src='/issa/05.jpeg'
              alt='Picture of the author'
              objectFit='cover'
              height='992'
              width='800'
              className={styles.image}
            />
          </div>
          <div className={styles.imagewrapper}>
            <Image
              src='/issa/06.jpeg'
              alt='Picture of the author'
              objectFit='cover'
              height='992'
              width='800'
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src='/issa/07.jpeg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
          />
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src='/issa/08.jpeg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
          />
        </div>
        <div className='twoimages'>
          <div className={styles.imagewrapper}>
            <Image
              src='/issa/09.jpeg'
              alt='Picture of the author'
              objectFit='cover'
              height='992'
              width='800'
              className={styles.image}
            />
          </div>
          <div className={styles.imagewrapper}>
            <Image
              src='/issa/10.jpeg'
              alt='Picture of the author'
              objectFit='cover'
              height='992'
              width='800'
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src='/issa/11.jpeg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
          />
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src='/issa/12.jpeg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='464'
            width='1500'
          />
        </div>
      </div>
      <Footer mode='whitefooter' />
    </>
  );
}

export default issa;
