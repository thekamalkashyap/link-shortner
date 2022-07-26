import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { logout, currentUser } = useAuth();
  return (
    <>
      <div className="sticky top-0 w-full left-0 flex items-center justify-between px-4 py-2 ">
        <h1 className="text-2xl select-none sm:text-4xl">C-Url</h1>
        <button
          className="select-none disabled:opacity-50 disabled:cursor-default duration-300 hover:pl-2 cursor-pointer"
          disabled={!currentUser}
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
}
