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
    <div className="flex items-center space-x-2">
      <input
        onChange={handleCharacterSets}
        className="h-4 w-4 rounded-lg"
        type="checkbox"
        id={`checkbox-${id}`}
      />
      <label htmlFor={`checkbox-${id}`}>{option}</label>
    </div>
  );
};

export default Checkbox;
