import React from 'react'
import Pricing from '../../components/Plans/Pricing'
import Head from 'next/head'
function pricing() {
  return (
    <>
    <Head>
      <title>
        Ecorder Subscription Plans
      </title>
    </Head>
    <div>
        <Pricing/>
    </div>
    </>
  )
}

export default pricing