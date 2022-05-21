import React from 'react'
import Designers from './Form'
import EPayments from './EPayments'
import Features from './Features'
import PopularDesigners from './PopularDesigners'

function HomeSection() {
  return (
    <>
    <div className="py-2 bg-gray-100 text-gray-900 min-h-screen">
        <main>
            <Designers/>
            <EPayments/>
            <Features/>
            <PopularDesigners/>
            <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-indigo-100" id="blog-posts">
                <div className="max-w-screen-xl mx-auto">
                <div className="xl:flex">
                    <div>
                    <h3 className="leading-none font-black text-3xl">Guide</h3>
                    <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around">
                        <a href="https://owaiskhan.me" className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                        <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                            <div className="w-full h-48 bg-cover rounded-t-lg"></div>
                            <div className="p-6">
                            <div className="text-lg font-bold">Tips for creating an amazing design system</div>
                            <div className="mt-2 text-gray-900 text-sm">
                                Learn how to create a new design system that is beautiful and efficient for creating your UI
                                components.
                            </div>
                            </div>
                        </div>
                        </a>

                        <a href="https://timerse.com" className="flex w-full max-w-sm mt-6 lg:mt-8 xl:mr-8">
                        <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg bg-gray-100 relative">
                            <div className="w-full h-48 bg-cover rounded-t-lg"></div>
                            <div className="p-6">
                            <div className="text-lg font-bold">Using a drawing tablet to create beautiful icons</div>
                            <div className="mt-2 text-gray-900 text-sm">
                                Good Icons are hard to come by. This article guides you on how to create beautiful sketched
                                icons using a drawing pad.
                            </div>
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>

                    <div className="mt-12 xl:mt-0 xl:ml-8">
                    <h3 className="leading-none font-black text-3xl">Graphics Editors Downloads</h3>
                    <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-around xl:flex-col">
                        <a href="https://owaiskhan.me" className="flex w-full max-w-sm mt-6 lg:mt-8">
                        <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                        bg-gray-100 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8">
                            <div className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2"></div>
                            <div className="p-6 xl:p-0">
                            <div className="text-lg font-bold">Adobe Photoshop</div>
                            <div className="mt-2 text-gray-900 text-sm xl:hidden">
                                Hiring a freelancer for your new project can be challenging if you've never done before. Learn
                                some tips that will allow you to have a better experience working with freelancers
                            </div>
                            </div>
                        </div>
                        </a>

                        <a href="https://owaiskhan.me" className="flex w-full max-w-sm mt-6 lg:mt-8">
                        <div className="transition-all duration-300 cursor-pointer w-full shadow-lg hover:shadow-xl rounded-lg
                        bg-gray-100 relative xl:flex xl:flex-row-reverse xl:items-center xl:px-6 xl:py-8">
                            <div className="w-full h-48 bg-cover rounded-t-lg xl:w-32 xl:h-20 xl:rounded-lg xl:ml-2"></div>
                            <div className="p-6 xl:p-0">
                            <div className="text-lg font-bold">Adobe Illustrator</div>
                            <div className="mt-2 text-gray-900 text-sm xl:hidden">
                                Animations play a vital role in user experience. This article describes how you can create
                                butter smooth 60 FPS animations easily.
                            </div>
                            </div>
                        </div>
                        </a>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </main>
    </div>
    </>
  )
}

export default HomeSection