import { useState } from "react";
export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, selected, packed: false, id: Date.now() };
    onAddItems(newItem);
    // console.log(newItem);
    setDescription("");
    setSelected(1);
    // console.log(e);
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select
        value={selected}
        onChange={(e) => setSelected(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
