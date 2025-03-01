import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import chef from './assets/Chef.png';
export default function Signup(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    return  <section className="h-screen flex flex-col md:flex-row justify-center bg-black space-y-10 md:space-y-0 md:space-x-16 items-center mx-7 md:mx-0 md:my-0">
    <div className="md:w-1/3 max-w-sm">
      <img src={chef} alt="Sample image" />
    </div>
    <div className="md:w-1/3 max-w-sm p-10 bg-black-blue rounded-xl text-white">
      <h1 className='text-3xl py-9 md:text-4xl text-center'>
        Welcome To Our Store!
      </h1>
      <form>
        <input
          className="text-sm w-full px-4 py-2 bg-gray-800 text-white rounded border-none"
          type="text"
          placeholder="Email Address"
          value={email}
        />
        <input
          className="text-sm w-full px-4 py-2 bg-gray-800 text-white rounded mt-4 border-none"
          type="password"
          placeholder="Password"
          value={password}
        />
         <input
          className="text-sm w-full px-4 py-2 bg-gray-800 text-white rounded mt-4 border-none"
          type="password"
          placeholder="Confirm Password"
          value={password}
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-white hover:text-gray-400 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a className="text-blue-600 hover:text-blue-400 hover:underline hover:underline-offset-4" href="#">Forgot Password?</a>
        </div>
        <div className="text-center py-2">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-400 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
      <div className="mt-4 font-semibold text-sm pt-2">
        <p className="text-gray-500 text-center">
          Already having an account? <a className="text-red-600 hover:underline hover:underline-offset-4" href="/">SignIn</a>
        </p>
      </div>
    </div>
  </section>
}