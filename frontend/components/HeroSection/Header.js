import React from 'react'
import styles from '../../styles/Home.module.css'
function Header() {

  return (
    <div className={styles.header2}>
          <div className={styles.headerContent}>
              <h1 className="text-3xl md:text-4xl font-bold">Get the header you needed for your awesome website.</h1><br/>
              <h3 className="text-2xl md:text-3xl font-medium mb-2">Get the header you needed for your awesome website.</h3>
              <div className="container flex justify-center items-center">
              <div className="relative">
                  <div className="absolute top-4 left-3">
                    <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500">
                    </i>
                  </div>
                   <input type="text" className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search designs..."/>
                  <div className="absolute top-2 right-2"> <button className="h-10 w-20 text-white rounded-lg bg-red-500 hover:bg-red-600">Search</button> </div>
              </div>
              </div>
          </div>
    </div>
  )
}

export default Header