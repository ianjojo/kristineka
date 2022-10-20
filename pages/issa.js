import React from "react";
import Image from "next/image";
import styles from "../styles/Issa.module.css";
import Footer from "../components/Footer";
import img01 from "../public/issa/01.jpeg";
import img02 from "../public/issa/02.gif";
import img03 from "../public/issa/03.jpeg";
import img04 from "../public/issa/04.jpeg";
import img05 from "../public/issa/05.jpeg";
import img06 from "../public/issa/06.jpeg";
import img07 from "../public/issa/07.jpeg";
import img08 from "../public/issa/08.jpeg";
import img09 from "../public/issa/09.jpeg";
import img10 from "../public/issa/10.jpeg";
import img11 from "../public/issa/11.jpeg";
import img12 from "../public/issa/12.jpeg";

function issa() {
  return (
    <>
      <div className={styles.container}>
        <div className='wrapper'>
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
            src={img02}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
          />
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src={img03}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
            placeholder='blur'
            className={styles.image}
          />
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src={img04}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
            placeholder='blur'
            className={styles.image}
          />
        </div>
        <div className='twoimages'>
          <div className={styles.imagewrapper}>
            <Image
              src={img05}
              alt='Picture of the author'
              objectFit='cover'
              height='992'
              width='800'
              placeholder='blur'
              className={styles.image}
            />
          </div>
          <div className={styles.imagewrapper}>
            <Image
              src={img06}
              alt='Picture of the author'
              objectFit='cover'
              height='992'
              width='800'
              placeholder='blur'
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src={img07}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
            placeholder='blur'
          />
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src={img08}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
            placeholder='blur'
          />
        </div>
        <div className='twoimages'>
          <div className={styles.imagewrapper}>
            <Image
              src={img09}
              alt='Picture of the author'
              objectFit='cover'
              height='992'
              width='800'
              placeholder='blur'
              className={styles.image}
            />
          </div>
          <div className={styles.imagewrapper}>
            <Image
              src={img10}
              alt='Picture of the author'
              objectFit='cover'
              height='992'
              width='800'
              placeholder='blur'
              className={styles.image}
            />
          </div>
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src={img11}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
            placeholder='blur'
          />
        </div>
        <div className={styles.imagewrapper}>
          <Image
            src={img12}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='464'
            width='1500'
            placeholder='blur'
          />
        </div>
      </div>
      <Footer mode='whitefooter' />
    </>
  );
}

export default issa;
