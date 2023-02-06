import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { TbKey } from "react-icons/tb";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2l">
      <h1 className="sm:text-4xl flex items-center text-2xl font-bold ml-2 tracking-tight">
        <TbKey className="font-semibold" /> SecureKey
      </h1>
      <Link href="https://github.com/Brianmulinge/securekey">
        <AiFillGithub className="h-8 w-8 mr-4" />
      </Link>
    </header>
  );
}
