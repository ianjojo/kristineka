import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import pic1 from "./architecture.webp";
import pic2 from "./images.jpeg";

export default function Home() {
  return (
    <>
      <section className='maincontainer'>
        <Link href='/issa'>
          <a>
            <div className='wrapper'>
              <p className='project1'>ISSA | Visual Identity & Packaging</p>
              <Image
                alt='yes'
                className='imglink'
                layout='responsive'
                objectFit='cover'
                src='/issa.jpeg'
                height='1080'
                width='1920'
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>
          </a>
        </Link>
        <Link href='/gaan'>
          <a>
            <div className='wrapper'>
              <p className='project2'>gaan co | Visual Identity & Packaging</p>
              <Image
                alt='yes'
                className='imglink'
                layout='responsive'
                objectFit='cover'
                src='/gaan.jpeg'
                height='1080'
                width='1920'
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>
          </a>
        </Link>
        <Link href='/pizzacastle'>
          <a>
            <div className='wrapper'>
              <p className='project3'>
                Pizza Castle | Visual Identity & Packaging
              </p>
              <Image
                alt='yes'
                className='imglink'
                layout='responsive'
                objectFit='cover'
                src='/pizzacastle.jpeg'
                height='1080'
                width='1920'
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>
          </a>
        </Link>
        <Link href='/sk-brochure'>
          <a>
            <div className='wrapper'>
              <p className='project4'>Spread&apos;em Kitchen | Brochure</p>
              <Image
                alt='yes'
                className='imglink'
                layout='responsive'
                objectFit='cover'
                src='/spreadembrochure.jpeg'
                height='1080'
                width='1920'
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>
          </a>
        </Link>
        <Link href='/islands'>
          <a>
            <div className='wrapper'>
              <p className='project5'>ISLANDS | Visual Identity & Packaging</p>
              <Image
                alt='yes'
                className='imglink'
                layout='responsive'
                objectFit='cover'
                src='/islands.jpeg'
                height='1080'
                width='1920'
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>
          </a>
        </Link>
        <Link href='/labietis'>
          <a>
            <div className='wrapper'>
              <p className='project6'>Labietis | Logo & Labels</p>
              <Image
                alt='yes'
                className='imglink'
                layout='responsive'
                objectFit='cover'
                src='/labietis.jpeg'
                height='1080'
                width='1920'
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>
          </a>
        </Link>
        <Link href='/cannabis-potcast'>
          <a>
            <div className='wrapper'>
              <p className='project7'>Cannabis Potcast | Visual Identity</p>
              <Image
                alt='yes'
                className='imglink'
                layout='responsive'
                objectFit='cover'
                src='/cannabis.jpeg'
                height='1080'
                width='1920'
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>
          </a>
        </Link>
        <Link href='/sk-web'>
          <a>
            <div className='wrapper'>
              <p className='project8'>Spread&apos;em Kitchen | Web & social</p>
              <Image
                alt='yes'
                className='imglink'
                layout='responsive'
                objectFit='cover'
                src='/spreademweb.jpeg'
                height='1080'
                width='1920'
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
              />
            </div>
          </a>
        </Link>
      </section>
    </>
  );
}
