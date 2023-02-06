import { useState } from "react";

export const length = ["10", "20", "30", "40"];
export const character = ["Uppercase", "Lowercase", "Numbers", "Symbols"];

export default function Checkbox({ data, checked }) {
  const [selected, setSelected] = useState([]);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelected([...selected, e.target.value]);
    } else {
      setSelected(selected.filter((item) => item !== e.target.value));
    }
  };
  return (
    <section className="items-center flex my-4 ">
      {data.map((item) => (
        <div className="flex items-center" key={item}>
          <input
            className="bg-black rounded h-4 w-4"
            value={item}
            type="checkbox"
            checked={{ checked }}
            onChange={handleCheckboxChange}
          />
          <label className="text-base">{item}</label>
        </div>
      ))}
    </section>
  );
}
