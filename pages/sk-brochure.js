import React from "react";
import Image from "next/legacy/image";
import Footer from "../components/Footer";
import img01 from "../public/skbrochure/01.webp";
import img02 from "../public/skbrochure/02.webp";
import img03 from "../public/skbrochure/03.webp";
import img04 from "../public/skbrochure/04.webp";
import img05 from "../public/skbrochure/05.webp";
import img06 from "../public/skbrochure/06.gif";
import img07 from "../public/skbrochure/07.webp";
export default function skbrochure() {
  return (
    <>
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
        <div className='textbox'>
          <h3 className='title'>Spread&apos;em Kitchen | Brochure</h3>
          <p className='text'>
            Created for the CHFA West event, this brochure covers everything
            from how the company got and how it is doing, to the processes of
            traditional cheese-making that Spread&apos;em Kitchen use to create
            their unbelievably delicious cashew cheese products. It includes
            recipes and the whole product sortiment.
          </p>
          <p className='text'>
            The brochure comes with a green sleeve, inspired by the packaging
            where you have to slide the sleeve off the tub before you can open
            the tub and dig in.{" "}
          </p>
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src={img02}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
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
            height='873'
            width='1500'
            placeholder='blur'
          />
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src={img04}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
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
            height='873'
            width='1500'
            placeholder='blur'
          />
        </div>
        <div className='twoimages smallgap'>
          <div className='wrapper imagewrapper'>
            <Image
              src={img06}
              alt='Picture of the author'
              objectFit='cover'
              height='873'
              width='1000'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src={img07}
              alt='Picture of the author'
              objectFit='cover'
              height='873'
              width='1000'
              placeholder='blur'
            />
          </div>
        </div>
      </div>
      <Footer mode='whitefooter' />
    </>
  );
}
