'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const SigninPage = () => {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);
      console.log('Login success', response.data);
      toast.success('Login Successful!');
      router.push('/profile');
    } catch (error: any) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <ToastContainer />
      <h1>{loading ? 'Loading ...' : 'Login'}</h1>
      <hr />

      <input
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2 rounded-sm mt-1 text-black"
      />
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2 rounded-sm mt-1  text-black"
      />
      <div className="btn-container flex gap-2 ">
        <button
          onClick={onLogin}
          className="bg-blue-600 px-2 py-1 rounded-md mt-2 text-left text-[12px] cursor-pointer"
        >
          Login
        </button>
        <Link
          href="/signup"
          className="bg-red-500 px-2 py-1 rounded-md mt-2 text-left text-[12px] cursor-pointer"
        >
          Signup
        </Link>
      </div>
    </div>
  );
};

export default SigninPage;
