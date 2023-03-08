import Link from "next/link";

export default function Header() {
  return (
    <section className="h-14 flex px-6 items-center justify-between font-semibold border-b">
      <h1 className="lg:text-3xl md:text-2xl sm:text-xl">SecureKey</h1>
      <div className="flex space-x-4">
        <Link href="https://github.com/Brianmulinge/securekey">
          <h1>Star On Github</h1>
        </Link>
      </div>
    </section>
  );
}
