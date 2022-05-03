import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';
function Login() {
  return (
    <section className="flex flex-col md:flex-row h-screen items-center">

      <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen">
        <img src="https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1441&q=100" alt="" className="w-full h-full object-cover"/>
      </div>

      <div className="p-5 bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/2 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

        <div className="w-full h-100">

          <h1 className="text-xl font-bold">Abstract UI</h1>

          <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-center">Log in to your account</h1>

          <form className="mt-6" action="#" method="POST">
            <div>
              <label className="block text-gray-700">Email Address</label>
              <input type="email" name="" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete />
            </div>

            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input type="password" name="" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required/>
            </div>

            <div className="text-right mt-2">
              <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
            </div>

            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                  px-4 py-3 mt-6">Log In</button>
          </form>

          <hr className="my-6 border-gray-300 w-full"/>

          <button type="button" className="w-full block bg-danger hover:bg-danger-100 focus:bg-danger-100 text-white font-semibold rounded-lg px-4 py-3 border border-gray-300">
                <div className="flex items-center justify-center">
                  <GoogleIcon
                    className="w-6 h-6"
                  />
                <span className="ml-4">
                Log in
                with
                Google</span>
                </div>
          </button>

          <p className="mt-8">Need an account? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
                  account</a></p>
        </div>
      </div>

    </section>
  )
}

export default Login