import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import pic from "../assets/favicon.ico";

export default function Header() {
  return (
    <header className="h-14 flex px-4 items-center justify-between font-semibold border-b">
      <div className="flex space-x-1 items-center">
        <Image alt="securekey" className="h-6 w-6" src={pic} />
        <h1 className="text-lg lg:text-3xl md:text-2xl sm:text-xl">
          SecureKey
        </h1>
      </div>
      <div className="flex">
        <Link
          className="flex space-x-1 items-center"
          href="https://github.com/Brianmulinge"
        >
          <AiFillGithub className="h-8 w-8" />
          <h1>Github</h1>
        </Link>
      </div>
    </header>
  );
}
