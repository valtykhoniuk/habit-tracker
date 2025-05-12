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
    <div className="app flex items-center justify-center h-screen">
      <div className="app__card absolute z-20 flex flex-col gap-4 p-20 rounded-2xl bg-white/15 backdrop-blur shadow-md w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-white text-center mb-4">
          Habit Tracker
        </h1>
        <AddHabitForm onAdd={addHabit} />
        <HabitList habits={habits} onToggleDay={toggleDay} />
      </div>
    </div>
  );
};

export default App;
