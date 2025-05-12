import type { Habit } from "../types";
import HabitItem from "./HabitItem";

interface Props {
  habits: Habit[];
  onToggleDay: (habitId: number, day: number) => void;
}

const HabitList = ({ habits, onToggleDay }: Props) => {
  return (
    <div className="habit-list flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-2">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onToggleDay={onToggleDay} />
      ))}
    </div>
  );
};

export default HabitList;
