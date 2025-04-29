import Checkbox from "../components/Checkbox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";
import Announcement from "../components/Announcement";

export const checkboxes = [
  { id: 1, option: "Letters" },
  { id: 2, option: "Numbers" },
  { id: 3, option: "Symbols" },
];

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false);
  const [length, setLength] = useState<number>(0);
  const [characterSets, setCharacterSets] = useState<boolean[]>([]);
  const [generatedPassword, setGeneratedPassword] = useState<string>("");

  const handleLength = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLength(parseInt(e.target.value));
  };

  const handleCharacterSets = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = parseInt(e.target.id.split("-")[1]);
    const newCharacterSets = [...characterSets];
    newCharacterSets[id - 1] = e.target.checked;
    setCharacterSets(newCharacterSets);
  };

  const generatePassword = () => {
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*_+";

    let characterSet = "";
    if (characterSets[0]) {
      characterSet += letters;
    }
    if (characterSets[1]) {
      characterSet += numbers;
    }
    if (characterSets[2]) {
      characterSet += symbols;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += characterSet.charAt(
        Math.floor(Math.random() * characterSet.length)
      );
    }

    setGeneratedPassword(generatedPassword);

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  const handleGenerate = () => {
    if (length === 0) {
      alert("Please select the length of the password");
    } else if (characterSets.length === 0) {
      alert("Please select the character sets for the password");
    } else {
      generatePassword();
    }
  };

  const handleCopy = () => {
    if (generatedPassword === "") {
      alert("Please generate a password first");
    } else {
      copyPassword();
      alert("Password copied to clipboard");
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-gray-50">
      <div>
        <Announcement />
        <Header />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="w-full">
          <h1 className="text-center sm:text-5xl text-4xl max-w-2xl mx-auto font-extrabold text-gray-900 mb-10">
            Generate strong, secure passwords instantly
          </h1>
          <div className="bg-white shadow-xl rounded-xl p-8 max-w-xl mx-auto">
            {generatedPassword && (
              <div className="mb-6 p-4 bg-gray-100 rounded-lg text-center break-all">
                <p className="text-lg font-mono font-medium text-gray-800">{loading ? "Loading..." : generatedPassword}</p>
              </div>
            )}
            <div className="space-y-6">
              <div className="">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="length">Password Length</label>
                <select
                  id="length"
                  onChange={handleLength}
                  className="select select-bordered w-full bg-white"
                >
                  <option value="">Select a length</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                </select>
              </div>
              <div className="">
                <label className="block text-gray-700 font-medium mb-2">Include Characters</label>
                <div className="grid grid-cols-3 gap-4">
                  {checkboxes.map((checkbox) => (
                    <Checkbox
                      handleCharacterSets={handleCharacterSets}
                      key={checkbox.id}
                      id={checkbox.id}
                      option={checkbox.option}
                    />
                  ))}
                </div>
              </div>
              <div className="pt-2 flex gap-4">
                <button onClick={handleGenerate} className="flex-1 btn bg-indigo-600 hover:bg-indigo-700 text-white border-0">
                  Generate Password
                </button>
                <button onClick={handleCopy} className="flex-1 btn bg-gray-600 hover:bg-gray-700 text-white border-0">
                  Copy to Clipboard
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
