import React from 'react'
import Head from 'next/head'
import Header from '../components/HeroSection/Header'
import HomeSection from '../components/Home/HomeSection'
function Home(){
  return (
    <>
      <Head>
        <title>Ecorder | Download Icons, Photos & PSDs</title>
      </Head>
      <Header/>
      <HomeSection/>
    </>
  )
}

export default Home