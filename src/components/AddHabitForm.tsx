import React from "react";
import { useState } from "react";

interface Props {
  onAdd: (name: string) => void;
}

const AddHabitForm = ({ onAdd }: Props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAdd(name);
      setName("");
    }
  };

  return (
    <form className="form flex flex-row gap-4" onSubmit={handleSubmit}>
      <input
        className="w-full p-3 rounded-md text-base bg-white/15 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
        type="text"
        placeholder="Enter habit name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-white/15 hover:bg-white/30 text-white transition-all duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default AddHabitForm;
