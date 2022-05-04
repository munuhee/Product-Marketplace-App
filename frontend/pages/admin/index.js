import React from 'react'
import Profiles from '../../components/Admin/Profiles'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import LoyaltyRoundedIcon from '@mui/icons-material/LoyaltyRounded';
import ProductionQuantityLimitsRoundedIcon from '@mui/icons-material/ProductionQuantityLimitsRounded';
import { Avatar } from '@mui/material';
import { deepOrange, red, purple, green, pink, grey, lightBlue, deepPurple } from '@mui/material/colors';

function adminDashboard() {
  return (
    <>
    <div className='pt-5 mb-5'>
        <div className='row pt-5'>
            <div className='col-2'>
                <aside id="sidenav-open" class="h-screen">
                <nav class="flex flex-col justify-between h-full p-5 border-r bg-gray-50">
                    <div>
                    <a href="#" class="flex items-center p-3 rounded-xl hover:bg-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 w-7 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        >
                        <path
                            d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z"
                        />
                        </svg>
                        <span class="text-gray-900">Dashboard</span>
                    </a>

                    <a href="#" class="flex items-center p-3 rounded-xl hover:bg-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 w-7 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        >
                        <path
                            d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0V7zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0V9z"
                        />
                        <path
                            d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                        />
                        <path
                            d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                        />
                        </svg>
                        <span class="text-gray-900">Analytics</span>
                    </a>

                    <a href="#" class="flex items-center p-3 rounded-xl hover:bg-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 w-7 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        >
                        <path
                            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
                        />
                        </svg>
                        <span class="text-gray-900">Orders</span>
                    </a>

                    <a href="#" class="flex items-center p-3 rounded-xl hover:bg-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 w-7 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        >
                        <path
                            d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
                        />
                        <path
                            d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"
                        />
                        <path
                            d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"
                        />
                        </svg>
                        <span class="text-gray-900">Events</span>
                    </a>

                    <a href="#" class="flex items-center p-3 rounded-xl hover:bg-gray-200">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 w-7 text-gray-900"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        >
                        <path
                            d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
                        />
                        <path
                            d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
                        />
                        </svg>
                        <span class="text-gray-900">Settings</span>
                    </a>
                    </div>
                </nav>

                <a href="#" id="sidenav-close" title="Close Menu" aria-label="Close Menu"></a>
                </aside>
            </div>
            <div className='col'>
                <main class="overflow-y-scroll h-screen">
                    {/* <!----------------- cryptocurrencies -----------------> */}
                    <section class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                        <div
                        class="flex items-center border border-transparent rounded-3xl p-5 bg-white"
                        >
                        <Avatar sx={{ bgcolor: red[500] }}>
                            <LoyaltyRoundedIcon/>
                        </Avatar>
                        <div>
                            <div class="font-bold">Subscriptions</div>
                            <div class="text-sm text-gray-600">32,221</div>
                        </div>
                        </div>

                        <div
                        class="flex items-center border border-transparent rounded-3xl p-5 bg-white"
                        >
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>
                            <ProductionQuantityLimitsRoundedIcon/>
                        </Avatar>
                        <div>
                            <div class="font-bold">Products</div>
                            <div class="text-sm text-gray-600">1,344.49</div>
                        </div>
                        </div>
                        <div
                        class="flex items-center border border-transparent rounded-3xl p-5 bg-white"
                        >
                        <Avatar sx={{ bgcolor: green[500] }}>
                            <DownloadRoundedIcon/>
                        </Avatar>
                        <div>
                            <div class="font-bold">Downloads</div>
                            <div class="text-sm text-gray-600">134.36</div>
                        </div>
                        </div>
                        <div
                        class="flex items-center border border-transparent rounded-3xl p-5 bg-white"
                        >
                        <Avatar sx={{ bgcolor: pink[500] }}>
                            <AccountCircleRoundedIcon/>
                        </Avatar>
                        <div>
                            <div class="font-bold">Users</div>
                            <div class="text-sm text-gray-600">428.33</div>
                        </div>
                        </div>
                    </section>

                    <section class="flex flex-wrap">
                        <div class="w-full lg:w-1/2">
                        <div class="flex flex-col w-full p-4">
                            <div class="mb-4 text-2xl font-bold text-gray-900">Users</div>
                            <div class="grid grid-cols-auto-1fr-auto grid-rows-5 gap-2 w-full">
                                <Profiles/>
                            </div>
                        </div>
                        </div>

                        <div class="w-full lg:w-1/2">
                        {/*  <!----------------- Profile -----------------> */}
                        <div class="flex flex-col w-full p-4">
                            <h1 class="mb-4 text-2xl font-bold text-gray-900">Profile</h1>
                            <div
                            id="profile-progress"
                            class="w-52 h-52 mb-8 m-auto grid place-items-center text-4xl font-bold"
                            >
                            75%
                            </div>
                            <div class="font-bold text-center text-gray-900">
                            75% of your profile is complete
                            </div>
                        </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </div>
    </>
  )
}

export default adminDashboard