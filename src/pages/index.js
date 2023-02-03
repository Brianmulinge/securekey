import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>SecureKey</title>
        <meta name="description" content="Generated your Password of choice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-black">
        <Header />
        <section className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
          <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900">
            Create the password of your choice
          </h1>
          <div className="font-semibold py-4">
            <h1 className="text-left font-medium">
              Enter the length you want your password to be
            </h1>
            <h1 className="text-left font-medium">
              Select the character sets you would like to include in your
              password:
            </h1>
            <h1 className="text-left font-medium">
              Password criteria that you would like to follow
            </h1>
            <button className="bg-black rounded-xl text-white font-medium px-4 py-2.5 sm:mt-10 mt-8 hover:bg-black/80 w-full">
              Generate Password
            </button>
          </div>
          
        </section>
      </main>
    </>
  );
}
