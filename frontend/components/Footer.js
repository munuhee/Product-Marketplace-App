import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <div className="mx-auto container py-16 xl:px-20 lg:px-12 sm:px-6 px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4">
                <div className="flex flex-col flex-shrink-0">
                    <div>
                        <h4>
                            ECORDER
                        </h4>
                    </div>
                    <p className="text-sm leading-none text-gray-800 mt-4">MurstGraphics</p>
                    <p className="text-sm leading-none text-gray-800 mt-4">All rights reserved</p>
                    <div className="flex items-center gap-x-4 mt-12">
                        <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <p>svg</p>
                        </div>
                        <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <p>
                                svg
                            </p>
                        </div>
                        <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                           <p>
                               svg
                           </p>
                        </div>
                        <div className="opacity-50 w-8 h-8 flex-shrink-0 bg-gray-800 cursor-pointer hover:bg-gray-700 rounded-full flex items-center justify-center">
                            <p>
                                svg
                            </p>
                        </div>
                    </div>
                </div>
                <div className="sm:ml-0 ml-8">
                    <h2 className="text-base font-semibold leading-4 text-gray-800">Company</h2>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Blog</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Pricing</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">About Us</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer"><a className="text-base font-semibold leading-4 text-gray-800 hover:text-gray-500 text-base"><Link href={'/Contact'}> Contact us</Link></a></p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer"><a className="text-base font-semibold leading-4 text-gray-800 hover:text-gray-500 text-base"><Link href={'/testimonials'}> Testimonials</Link></a></p>
                </div>
                <div>
                    <h2 className="text-base font-semibold leading-4 text-gray-800">Support</h2>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Legal policy</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Status policy</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer">Privacy policy</p>
                    <p className="hover:text-gray-500 text-base leading-4 mt-6 text-gray-800 cursor-pointer"><a className="text-base font-semibold leading-4 text-gray-800 hover:text-gray-500 text-base"><Link href={'/terms'}>Terms of service</Link></a></p>
                </div>
                <div className="mt-10 lg:block hidden">
                    <label className="text-xl font-medium leading-5 text-gray-800">Get updates</label>
                    <div className="cursor-pointer flex items-center justify-between border border-gray-800 mt-4">
                        <input type="text" className="text-base leading-4 p-4 w-full focus:outline-none text-gray-800 placeholder-gray-800" placeholder="Enter your email" />
                        <p>
                            svg
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-10 lg:hidden">
                <label className="text-xl font-medium leading-5 text-gray-800">Get updates</label>
                <div className="flex items-center justify-between border border-gray-800 mt-4">
                    <input type="text" className="text-base leading-4 p-4 relative z-0 w-full focus:outline-none text-gray-800 placeholder-gray-800" placeholder="Enter your email" />
                    <div className="cursor-pointer mr-4 cursor-pointer relative z-40">
                        <p>
                            svg
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer
