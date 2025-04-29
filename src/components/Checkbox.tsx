interface CheckboxProps {
  id: number;
  option: string;
  handleCharacterSets: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  option,
  handleCharacterSets,
}) => {
  return (
    <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
      <input
        onChange={handleCharacterSets}
        className="h-5 w-5 rounded-md text-indigo-600 focus:ring-indigo-500"
        type="checkbox"
        id={`checkbox-${id}`}
      />
      <label htmlFor={`checkbox-${id}`} className="text-gray-700">{option}</label>
    </div>
  );
};

export default Checkbox;
