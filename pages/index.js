import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import pic1 from "./architecture.webp";
import pic2 from "./images.jpeg";

export default function Home() {
  return (
    <>
      <section className='maincontainer'>
        <div className='wrapper'>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='contain'
            src={pic1}
            height='1080'
            width='1920'
          />
        </div>
        <div className='wrapper'>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='cover'
            src={pic2}
            height='1080'
            width='1920'
          />
        </div>
        <div className='wrapper'>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='contain'
            src={pic1}
            height='1080'
            width='1920'
          />
        </div>
        <div className='wrapper'>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='cover'
            src={pic2}
            height='1080'
            width='1920'
          />
        </div>
        <div className='wrapper'>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='contain'
            src={pic1}
            height='1080'
            width='1920'
          />
        </div>
        <div className='wrapper'>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='cover'
            src={pic2}
            height='1080'
            width='1920'
          />
        </div>
      </section>
    </>
  );
}
