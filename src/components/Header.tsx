import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import pic from "../assets/favicon.ico";

export default function Header() {
  return (
    <header className="h-16 flex px-6 items-center justify-between font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md">
      <div className="flex space-x-2 items-center">
        <Image alt="securekey" className="h-8 w-8 bg-white rounded-full p-1" src={pic} />
        <h1 className="text-xl lg:text-3xl md:text-2xl sm:text-xl font-bold">
          SecureKey
        </h1>
      </div>
      <div className="flex">
        <Link
          className="flex space-x-1 items-center hover:opacity-80 transition-opacity"
          href="https://github.com/Brianmulinge/securekey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub className="h-7 w-7" />
          <h1 className="hidden sm:block">GitHub</h1>
        </Link>
      </div>
    </header>
  );
}
