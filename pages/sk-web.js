import React, { useState } from "react";
import Image from "next/legacy/image";
import styles from "../styles/skweb.module.css";
import Footer from "../components/Footer";
import img02 from "../public/skweb/02.jpg";

import img04 from "../public/skweb/04.jpg";
import img05 from "../public/skweb/05.jpg";

function skWeb() {
  return (
    <>
      <div className='container'>
        <div className='vidwrapper '>
          <video
            width='100%'
            className='videoi'
            loop
            autoPlay='true'
            playsInline
          >
            <source src='/skweb/01.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='wrapper imagewrapper'>
          <Image
            src={img02}
            alt='Picture of the author'
            layout='responsive'
            objectFit='cover'
            height='3530'
            width='2500'
            placeholder='blur'
          />
        </div>
        <div className='twoimages '>
          <div className='vidwrapperhalf'>
            <video width='100%' className='videoi' loop autoPlay='true'>
              <source src='/skweb/03.mp4' type='video/mp4' />
            </video>
          </div>
          <div className='wrapper specialimagewrapper imagewrapper'>
            <Image
              src={img04}
              alt='Picture of the author'
              objectFit='cover'
              height='640'
              width='1000'
              placeholder='blur'
            />
          </div>
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
      </div>
      <Footer mode='whitefooter' />
    </>
  );
}

export default skWeb;
