'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Axios } from 'axios';

const SingupPage = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(true);

  const onSignup = async () => {
    // Code ...
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup</h1>
      <hr />

      <input
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
        className="p-2 rounded-sm mt-1 text-black"
      />
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
        className="p-2 rounded-sm mt-1 text-black"
      />
      <div className="btn-container flex gap-2 ">
        <button
          onClick={onSignup}
          className="bg-blue-600 px-2 py-1 rounded-md mt-2 text-left text-[12px] cursor-pointer"
        >
          {buttonDisabled ? 'No Signup' : 'Signup'}
        </button>
        <Link
          href="/login"
          className="bg-red-500 px-2 py-1 rounded-md mt-2 text-left text-[12px] cursor-pointer"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default SingupPage;
