import React from "react";
import Head from "next/head";
import Image from "next/image";
import kristine from "../public/kristine.webp";
import breadlabels from "../public/breadlabels.webp";
import Footer from "../components/Footer";
export default function about() {
  return (
    <>
      <div className='about-container'>
        <Head>
          <title>Kristine Kalva | About</title>
          <meta
            property='og:title'
            content='About Kristine Kalva'
            key='title'
          />
        </Head>
        <div className='leftbox'></div>
        <div className='rightbox'>
          <p className='about-text'>
            I&apos;m a Kelowna based graphic designer. After studying at the
            University of Liepaja and The Polytechnic Institute of Leiria and
            working in a digital marketing agency I started freelancing while
            traveling. My travels led me to Vancouver where I spent four years
            working as an in-house designer at a plant-based cheese company.
          </p>
          <div className='wrapper'>
            <Image
              src={kristine}
              placeholder='blur'
              alt='Kristine'
              width={1000}
              height={639}
            />
          </div>
          <p className='about-text'>
            Graphic design was always an obvious path - it&apos;s a beautiful
            combination of visual arts and problem solving. I&apos;ve always
            appreciated graphic design - when I was ten I had a respectable
            collection of Latvian bread labels.{" "}
          </p>
          <div className='wrapper center'>
            <Image
              className='about-img'
              src={breadlabels}
              placeholder='blur'
              alt='Bread Labels'
              width={458}
              height={458}
              objectFit='contain'
            />
          </div>
          <p className='about-text'>
            When I&apos;m not working you can find me flipping through
            cookbooks, biking and learning pottery.{" "}
          </p>
          <p className='about-text'>
            You can reach me at kristinekalva @ gmail.com
          </p>
        </div>
      </div>
      <Footer mode='whitefooter' />
    </>
  );
}
