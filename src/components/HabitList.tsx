import type { Habit } from "../types";
import HabitItem from "./HabitItem";

interface Props {
  habits: Habit[];
  onToggleDay: (habitId: number, day: number) => void;
}

const HabitList = ({ habits, onToggleDay }: Props) => {
  return (
    <div className="habit-list">
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onToggleDay={onToggleDay} />
      ))}
    </div>
  );
};

export default HabitList;
