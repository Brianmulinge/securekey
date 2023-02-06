import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Checkbox, { length, character } from "../components/Checkbox";
import ResizablePanel from "../components/ResizablePanel";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState("Professional");
  const [generatedBios, setGeneratedBios] = useState("");

  const prompt =
    vibe === "Funny"
      ? `Generate 2 funny twitter bios with no hashtags and clearly labeled "1." and "2.". Make sure there is a joke in there and it's a little ridiculous. Make sure each generated bio is at max 20 words and base it on this context: ${bio}${
          bio.slice(-1) === "." ? "" : "."
        }`
      : `Generate 2 ${vibe} twitter bios with no hashtags and clearly labeled "1." and "2.". Make sure each generated bio is at least 14 words and at max 20 words and base them on this context: ${bio}${
          bio.slice(-1) === "." ? "" : "."
        }`;

  const generateBio = async (e) => {
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    console.log("Edge function returned.");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedBios((prev) => prev + chunkValue);
    }

    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>SecureKey</title>
        <meta name="description" content="Generated your Password of choice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-black h-full w-full">
        <Header />
        <section className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
          <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-black">
            Create the password of your choice
          </h1>
          <div className="font-semibold py-4">
            <h1 className="text-left font-medium">
              1.Select the length you want your password to be:
            </h1>
            <Checkbox
              checked="{selected === item}"
              className="space-x-6"
              data={length}
            />
            <h1 className="text-left font-medium">
              2.Select the character sets you would like to include in your
              password:
            </h1>
            <Checkbox checked="{selected.includes(item)}" data={character} />

            <button
              onClick={(e) => generateBio(e)}
              className="bg-black rounded-xl text-white font-medium px-4 py-2.5 sm:mt-10 mt-8 hover:bg-black/80 w-full"
            >
              Generate Password
            </button>
          </div>
          <ResizablePanel>
            <AnimatePresence mode="wait">
              <motion.div className="space-y-10 my-10">
                {generatedBios && (
                  <>
                    <div>
                      <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto">
                        Your generated bios
                      </h2>
                    </div>
                    <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                      {generatedBios
                        .substring(generatedBios.indexOf("1") + 3)
                        .split("2.")
                        .map((generatedBio) => {
                          return (
                            <div
                              className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                              onClick={() => {
                                navigator.clipboard.writeText(generatedBio);
                                toast("Bio copied to clipboard", {
                                  icon: "✂️",
                                });
                              }}
                              key={generatedBio}
                            >
                              <p>{generatedBio}</p>
                            </div>
                          );
                        })}
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </ResizablePanel>
        </section>
      </main>
      <Footer />
    </>
  );
}
