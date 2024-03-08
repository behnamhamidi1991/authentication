'use client';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Axios } from 'axios';

const SigninPage = () => {
  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    // Code ...
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />

      <input
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
        className="p-2 rounded-sm mt-1"
      />
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
        className="p-2 rounded-sm mt-1"
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
