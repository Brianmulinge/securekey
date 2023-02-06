import Link from "next/link";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <section className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div className="">
        <h1 className="font-semibold text-lg md:ml-6">
          Inspired by{" "}
          <Link className="font-bold" href="https://twitter.com/nutlope">
            Hassan El Mghari(@Nutlope)
          </Link>
        </h1>
      </div>
      <div className="flex space-x-6  md:mr-4">
        <Link href="https://github.com/Brianmulinge">
          <AiFillGithub className="h-8 w-8" />
        </Link>
        <Link href="https://twitter.com/brianmulinge_">
          <AiOutlineTwitter className="h-8 w-8" />
        </Link>
      </div>
    </section>
  );
}
