'use client';
import React from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const router = useRouter();

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

  return (
    <div className="container px-10 py-5 text-2xl">
      <h1 className="font-black">Profile</h1>
      <p className="text-orange-400 font-medium">Welcome to your profile</p>
      <hr />

      <button
        onClick={logout}
        className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-3 rounded-sm mt-4 text-[14px]"
      >
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;
