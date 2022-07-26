import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Image from 'next/image';
import googleLogo from '../../public/google.png';

export default function Login() {
  const [error, setError] = useState(null);
  const { signUpWithGoogle, currentUser } = useAuth();
  console.log(currentUser);

  async function submitHandler() {
    try {
      await signUpWithGoogle();
    } catch (err) {
      setError(err);
      alert(err);
    }
  }

  return (
    <div className="flex-1 h-[70vh] text-xs sm:text-sm flex flex-col justify-center items-center gap-2 sm:gap-4">
      <h1 className=" text-blue-500 font-extrabold select-none text-2xl sm:text-4xl uppercase">
        Sign in with
      </h1>
      {error && (
        <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">
          {error}
        </div>
      )}
      <button onClick={submitHandler} className="w-[10rem]  ">
        <Image src={googleLogo} alt="Google" />
      </button>
    </div>
  );
}
