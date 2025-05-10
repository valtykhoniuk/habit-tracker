import React from "react";
import { useState } from "react";
import type { Habit } from "./types";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";

const App = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (name: string) => {
    //todo; function
  };

  const toggleDay = (habitId: number, day: number) => {
    //todo: function
  };

  return (
    <>
      <h1>Habit tracker</h1>
      <AddHabitForm onAdd={addHabit} />
      {/* <HabitList habits={habits} onToggleDay={toggleDay} /> */}
    </>
  );
};

export default App;
