import React from 'react';

const UserProfile = ({ params }: any) => {
  return (
    <div className="container px-10 py-5 text-2xl flex flex-col gap-5 w-full">
      <h1 className="font-black">Profile</h1>
      <p className="text-orange-400 font-medium mb-3">
        Welcome to your profile
      </p>
      <span className="p-2 rounded bg-yellow-500 text-white w-fit">
        {params.id}
      </span>
    </div>
  );
};

export default UserProfile;
