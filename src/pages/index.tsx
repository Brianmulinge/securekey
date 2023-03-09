import Checkbox from "../components/Checkbox";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

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
    const letters = "abcdefghijklmnopqrstuvwxyz";
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
    <div className="h-screen w-full flex flex-col justify-between">
      <div>
        <Header />
      </div>
      <div className="px-4">
        <div className="flex justify-center">
          <h1 className="text-center sm:text-6xl text-4xl max-w-2xl font-bold text-black">
            Create the password of your choice
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="items-start">
            <div className="flex flex-col items-start py-2">
              <h1 className="py-2">1.Select the length of the Password:</h1>
              <select
                onChange={handleLength}
                className="select select-bordered w-full max-w-xs"
              >
                <option>Select the length</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
              </select>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="py-2">2.The character sets for your password:</h1>
              <div className="flex space-x-2 pb-2">
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
            <div className="pt-4">
              <div className="flex items-start justify-center space-x-2">
                <button onClick={handleGenerate} className="btn btn-primary">
                  Generate
                </button>
                <button onClick={handleCopy} className="btn btn-primary">
                  Copy Password
                </button>
              </div>
              <h1 className="text-center pt-10">
                {loading ? "Loading..." : generatedPassword}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
