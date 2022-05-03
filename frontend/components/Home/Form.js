import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
function Designers() {
  return (
    <>
    <div id="hero" className="pt-5 lg:flex items-center">
                <div className="px-5 sm:px-10 md:px-10 md:flex lg:block lg:w-1/2 lg:max-w-3xl lg:mr-8 lg:px-20">
                <div className="md:w-1/2 md:mr-10 lg:w-full lg:mr-0">
                    <h1 className="text-3xl xl:text-4xl font-black md:leading-none xl:leading-tight">
                    Hire a Designer Near You
                    </h1>
                    <p className="mt-4 xl:mt-2">
                    World className Designers, just for you on contract, full-time or part-time, whatever you need.
                    </p>
                </div>

                <div className="flex-1">
                    <div className="relative mt-4 md:mt-0 lg:mt-4">
                    <TextField
                        className='w-full'
                        id="outlined-uncontrolled"
                        label="Design Sevice"
                        defaultValue="foo"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    </div>
                    <div className="relative mt-4">
                    <TextField
                        className='w-full border bg-gray-100'
                        id="outlined-uncontrolled"
                        label="Location Address"
                        defaultValue="foo"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    </div>
                    <div>
                    <Button variant="contained" className="mt-4 p-3 w-full rounded font-semibold bg-indigo-500 text-gray-100 hover:bg-indigo-600 hover:text-gray-200">Find Designers</Button>
                    </div>
                </div>
                </div>
                <div className="mt-6 w-full flex-1 lg:mt-0">
                <div></div>
                <img className="" src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=85" />
                </div>
            </div>
    </>
  )
}

export default Designers