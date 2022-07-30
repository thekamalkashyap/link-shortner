import { useAuth } from '../context/AuthContext';
import Image from 'next/image';
import googleLogo from '../../public/google.png';

export default function Login() {
  const { signUpWithGoogle, error } = useAuth();

  async function submitHandler() {
    await signUpWithGoogle();
  }

  return (
    <div className="flex-1 h-[70vh] text-sm sm:text-md flex flex-col justify-center items-center gap-2 sm:gap-4">
      {error && (
        <div className="w-full max-w-[40ch] border-rose-400 border text-center border-solid text-rose-400 py-2">
          {error.message}
        </div>
      )}
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <h1 className=" text-blue-500 text-xl sm:text-3xl inline sm:mr-5 mb-4">
          Sign in with
        </h1>
        <button onClick={submitHandler} className="w-[10rem] inline  ">
          <Image src={googleLogo} alt="Google" priority />
        </button>
      </div>
    </div>
  );
}
