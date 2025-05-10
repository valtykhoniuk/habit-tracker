import { useState } from "react";
import type { Habit } from "./types";
import AddHabitForm from "./components/AddHabitForm";
import HabitList from "./components/HabitList";

const App = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: Date.now(),
      name,
      completedDays: [],
    };
    setHabits([...habits, newHabit]);
  };

  const toggleDay = (habitId: number, day: number) => {
    setHabits(
      habits.map((habit) => {
        if (habit.id !== habitId) return habit;
        const isCompleted = habit.completedDays.includes(day);
        return {
          ...habit,
          completedDays: isCompleted
            ? habit.completedDays.filter((d) => d !== day)
            : [...habit.completedDays, day],
        };
      })
    );
  };

  return (
    <>
      <h1>Habit tracker</h1>
      <AddHabitForm onAdd={addHabit} />
      <HabitList habits={habits} onToggleDay={toggleDay} />
    </>
  );
};

export default App;
