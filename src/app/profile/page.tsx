'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState('nothing');

  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success('you logged out!');
      router.push('/login');
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me');
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className="container px-10 py-5 text-2xl">
      <h1 className="font-black">Profile</h1>
      <p className="text-orange-400 font-medium">Welcome to your profile</p>
      <hr />

      <p>Profile Page</p>
      <h2>
        {data === 'nothing' ? (
          'Nothing'
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>

      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-3 rounded-sm mt-4 text-[14px]"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="bg-purple-700 ml-2 hover:bg-blue-700  text-white font-bold py-1 px-3 rounded-sm mt-4 text-[14px]"
      >
        GetUser Details
      </button>
    </div>
  );
};

export default ProfilePage;
