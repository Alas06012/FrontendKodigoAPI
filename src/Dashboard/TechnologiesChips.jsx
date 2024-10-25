import { useState } from 'react';

export default ({onUpdateChips, initialChips = []}) => {
  const [chips, setChips] = useState(initialChips);  
  const [inputValue, setInputValue] = useState("");  

  const handleAddChip = () => {
    if (inputValue.trim() && !chips.includes(inputValue)) {
        const updatedChips = [...chips, inputValue];
      setChips(updatedChips);  
      setInputValue("");  
      onUpdateChips(updatedChips);
    }
  };

  const handleDeleteChip = (chipToDelete) => {
    const updatedChips = chips.filter((chip) => chip !== chipToDelete)
    setChips(updatedChips);  
    onUpdateChips(updatedChips);
  };

  return (
    <div className="chip-selector">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="New tag"
        />
        <button
          className="btn btn-primary mt-2"
          onClick={handleAddChip}
          disabled={!inputValue.trim()}
        >
          Add Tag
        </button>
      </div>

      <div className="chip-list d-flex flex-wrap">
        {chips.map((chip, index) => (
          <div key={index} className="chip bg-light border rounded-pill d-flex align-items-center p-2 m-1">
            <span className="mr-2">{chip}</span>
            <button type="button"
              className="btn btn-sm btn-danger ml-2"
              onClick={() => handleDeleteChip(chip)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};