import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
export default function skbrochure() {
  return (
    <>
      <div className='container'>
        <div className='wrapper imagewrapper'>
          <Image
            src='/skbrochure/01.jpeg'
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
            src='/skbrochure/02.jpeg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
          />
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src='/skbrochure/03.jpeg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
          />
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src='/skbrochure/04.jpeg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
          />
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src='/skbrochure/05.jpeg'
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='873'
            width='1500'
          />
        </div>
        <div className='twoimages smallgap'>
          <div className='wrapper imagewrapper'>
            <Image
              src='/skbrochure/06.gif'
              alt='Picture of the author'
              objectFit='cover'
              height='873'
              width='1000'
            />
          </div>
          <div className='wrapper imagewrapper'>
            <Image
              src='/skbrochure/07.jpeg'
              alt='Picture of the author'
              objectFit='cover'
              height='873'
              width='1000'
            />
          </div>
        </div>
      </div>
      <Footer mode='whitefooter' />
    </>
  );
}
