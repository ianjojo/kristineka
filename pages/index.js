import Head from "next/head";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import gaan from "../public/gaan.webp";
import cannabis from "../public/cannabis.webp";
import islands from "../public/islands.webp";
import issa from "../public/issa.webp";
import spreademweb from "../public/spreademweb.webp";
import pizzacastle from "../public/pizzacastle.webp";
import spreadembrochure from "../public/spreadembrochure.webp";
import labietis from "../public/labietis.webp";
import Footer from "../components/Footer";
export default function Home() {
  return <>
    <section className='maincontainer'>
      <Head>
        <title>Kristine Kalva</title>
        <meta property='og:title' content='Kristine Kalva' key='title' />
      </Head>
      <Link href='/issa'>

        <div className='wrapper'>
          <p className='project1'>ISSA | Visual Identity & Packaging</p>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='cover'
            src={issa}
            placeholder='blur'
            height='1080'
            width='1920'
          />
        </div>

      </Link>
      <Link href='/gaan'>

        <div className='wrapper'>
          <p className='project2'>gaan co | Visual Identity & Packaging</p>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='cover'
            src={gaan}
            placeholder='blur'
            height='1080'
            width='1920'
          />
        </div>

      </Link>
      <Link href='/pizzacastle'>

        <div className='wrapper'>
          <p className='project3'>
            Pizza Castle | Visual Identity & Packaging
          </p>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='cover'
            src={pizzacastle}
            placeholder='blur'
            height='1080'
            width='1920'
          />
        </div>

      </Link>
      <Link href='/sk-brochure'>

        <div className='wrapper'>
          <p className='project4'>Spread&apos;em Kitchen | Brochure</p>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='cover'
            src={spreadembrochure}
            placeholder='blur'
            height='1080'
            width='1920'
          />
        </div>

      </Link>
      <Link href='/islands'>

        <div className='wrapper'>
          <p className='project5'>ISLANDS | Visual Identity & Packaging</p>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='cover'
            src={islands}
            placeholder='blur'
            height='1080'
            width='1920'
          />
        </div>

      </Link>
      <Link href='/labietis'>

        <div className='wrapper'>
          <p className='project6'>Labietis | Logo & Labels</p>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='cover'
            src={labietis}
            placeholder='blur'
            height='1080'
            width='1920'
          />
        </div>

      </Link>
      <Link href='/cannabis-potcast'>

        <div className='wrapper'>
          <p className='project7'>Cannabis Potcast | Visual Identity</p>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='cover'
            src={cannabis}
            placeholder='blur'
            height='1080'
            width='1920'
          />
        </div>

      </Link>
      <Link href='/sk-web'>

        <div className='wrapper'>
          <p className='project8'>Spread&apos;em Kitchen | Web & social</p>
          <Image
            alt='yes'
            className='imglink'
            layout='responsive'
            objectFit='cover'
            src={spreademweb}
            placeholder='blur'
            height='1080'
            width='1920'
          />
        </div>

      </Link>
    </section>
    <Footer mode='whitefooter' />
  </>;
}
