import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/skweb.module.css";
/* import LightGallery from "lightgallery/react";
import Lightbox from "../components/Lightbox";
// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom"; */
function skWeb() {
  return (
    <div className='container'>
      <div className='vidwrapper '>
        <video width='100%' className='videoi' loop autoPlay='true' playsInline>
          <source src='/skweb/01.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='twoimages '>
        <div className='vidwrapperhalf'>
          <video width='100%' className='videoi' loop autoPlay='true'>
            <source src='/skweb/03.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='wrapper specialimagewrapper imagewrapper'>
          <Image
            src='/skweb/04.jpg'
            alt='Picture of the author'
            objectFit='cover'
            height='640'
            width='1000'
          />
        </div>
      </div>
      <div className='wrapper imagewrapper'>
        <Image
          src='/skweb/05.jpg'
          alt='Picture of the author'
          layout='responsive'
          objectFit='cover'
          height='873'
          width='1500'
        />
      </div>
    </div>
  );
}

export default skWeb;
