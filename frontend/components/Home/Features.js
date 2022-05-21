import React from 'react'

function Features() {
  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-indigo-100" id="features">
                <div className="max-w-screen-xl mx-auto">
                <h3 className="leading-none font-black text-3xl">
                    Our Products
                </h3>

                <div className="flex flex-col items-center flex-wrap lg:flex-row lg:items-stretch lg:flex-no-wrap lg:justify-between">
                    <div className="w-full max-w-sm mt-6 lg:mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                    <div className="p-4 inline-block bg-indigo-200 rounded-lg">
                        <img src="https://res.cloudinary.com/murste/image/upload/v1650804120/psd_wnsfzf.png" height="100" width="100"/>
                    </div>
                    <div className="mt-4 font-extrabold text-2xl tracking-wide">
                        Adobe Photoshop Templates
                    </div>
                    <div className="text-sm">
                        Download PSD templates(Bronchures, Flyers, Business Cards, Logos etc) of the best quality to make your projects look professional.
                    </div>
                    </div>

                    <div className="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                    <div className="p-4 inline-block bg-green-200 rounded-lg">
                        <img src="https://res.cloudinary.com/murste/image/upload/v1653131043/Circle-icons-image.svg_bqgiqo.png" width="100" height="100"/>
                    </div>
                    <div className="mt-4 font-extrabold text-2xl tracking-wide">
                        High Quality Icons
                    </div>
                    <div className="text-sm">
                    Our library is updated on a daily basis so you can find the newest and trendiest icons.
                    </div>
                    </div>

                    <div className="w-full max-w-sm mt-8 bg-gray-100 rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                    <div className="p-4 inline-block bg-red-200 rounded-lg">
                        <img src="https://res.cloudinary.com/murste/image/upload/v1653131209/Circle-icons-camera.svg_rnehcg.png" height="100" width="100"/>
                    </div>
                    <div className="mt-4 font-extrabold text-2xl tracking-wide">
                        Hd Images
                    </div>
                    <div className="text-sm">
                    Access thousands of images and designs ready-to-publish and get your project ready double quick.
                    </div>
                    </div>
                </div>
                </div>
            </div>
  )
}

export default Features