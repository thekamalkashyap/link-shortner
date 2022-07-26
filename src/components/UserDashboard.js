import React, { useEffect, useState } from 'react';
import { database } from '../../firebase';
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';

export default function UserDashboard() {
  let [url, setUrl] = useState('');
  let [param, setParam] = useState(generateRef());

  function generateRef() {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
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
    const changeMsg = () => {
      document.getElementById('addDataMsg').innerHTML = 'copied to clipboard';
    };
    const hideMsg = () => {
      document.getElementById('addDataMsg').classList.add('hidden');
    };
    if (!param) {
      try {
        setParam(generateRef());
      } finally {
        setData();
        document.getElementById('addDataMsg').classList.remove('hidden');
        navigator.clipboard.writeText(`${window.location.host}/${param}`);
        setTimeout(changeMsg, 1000);
        setTimeout(hideMsg, 2000);
      }
    } else {
      setData();
      document.getElementById('addDataMsg').classList.remove('hidden');
      navigator.clipboard.writeText(`${window.location.host}/${param}`);
      setTimeout(changeMsg, 1000);
      setTimeout(hideMsg, 2000);
    }
  }

  return (
    <div className="text-lg sm:text-xl h-[70vh] relative justify-center flex flex-col gap-3 sm:gap-5">
      <div className="flex flex-col">
        <label htmlFor="url" className="m-auto w-1/2">
          Url: <span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          name="url"
          value={url}
          id="urlInput"
          placeholder="https://google.com"
          required
          onChange={(e) => {
            setUrl(e.target.value);
          }}
          className="bg-transparent m-auto w-1/2 border  rounded-lg"
        />
        <label htmlFor="param" className="m-auto w-1/2">
          Sufix:
        </label>
        <input
          type="text"
          name="param"
          id="paramInput"
          placeholder="bsjcqx"
          value={param}
          onChange={(e) => {
            setParam(e.target.value);
          }}
          className="bg-transparent m-auto w-1/2 border px-2  rounded-lg"
        />
        <button
          onClick={addData}
          disabled={!url}
          className="bg-blue-500 disabled:opacity-60 py-1 px-2 w-1/2 m-auto rounded-md"
        >
          Add
        </button>
        <div
          id="addDataMsg"
          className="border-2 hidden border-red-700 text-center text-red-700 w-1/2 m-auto mt-6 rounded-lg p-5 transition-all duration-700 "
        >
          {`Url added successfully`}
        </div>
      </div>
    </div>
  );
}
