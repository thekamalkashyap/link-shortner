import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { database } from '../../firebase';
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import Image from 'next/image';

export default function UserDashboard() {
  const [url, setUrl] = useState('');
  const [param, setParam] = useState(generateRef());
  const [successMsg, setSuccessMsg] = useState(false);
  const { currentUser } = useAuth();

  function generateRef() {
    let result = '';
    let characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    let charactersLength = characters.length;
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const docRef = collection(database, 'url');
  function addData() {
    async function setData() {
      await setDoc(doc(docRef, param), {
        created: Timestamp.now(),
        param: param,
        url: url,
      });
    }

    setData();
    setSuccessMsg(true);
    navigator.clipboard.writeText(`${window.location.host}/${param}`);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 2000);
    setParam(generateRef());
  }

  return (
    <div className="text-lg sm:text-xl h-[70vh] relative justify-center flex flex-col gap-3 sm:gap-5">
      <div className="flex flex-col w-1/2 m-auto">
        <div className="flex items-center mb-7">
          <div className=" h-8 w-8 sm:h-12 sm:w-12 relative mr-2">
            <Image
              src={`${currentUser.photoURL}`}
              alt={`${currentUser.displayName}`}
              layout="fill"
            />
          </div>
          <div>
            <h1>{currentUser.email}</h1>
            <h2 className="opacity-60">{currentUser.displayName}</h2>
          </div>
        </div>
        <label htmlFor="url"></label>
        <input
          type="url"
          name="url"
          value={url}
          id="urlInput"
          placeholder="https://google.com"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          className="bg-transparent border p-3 mb-5 md:mb-9"
        />
        <button
          onClick={addData}
          disabled={!url}
          className="bg-blue-500 disabled:opacity-60 py-1 px-2"
        >
          Shorten
        </button>
        {successMsg && (
          <div
            id="msg"
            className="border-2 border-red-700 text-center text-red-700 w-1/2 m-auto mt-6 p-5 "
          >
            New url copied to clipboard
          </div>
        )}
      </div>
    </div>
  );
}
