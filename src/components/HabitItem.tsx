import type { Habit } from "../types";

interface Props {
  habit: Habit;
  onToggleDay: (habitId: number, day: number) => void;
}

const HabitItem = ({ habit, onToggleDay }: Props) => {
  const days = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <div>
      <h3>{habit.name}</h3>
      <div>
        {days.map((day) => (
          <button
            key={day}
            onClick={() => onToggleDay(habit.id, day)}
            style={{
              backgroundColor: habit.completedDays.includes(day)
                ? "green"
                : "lightgray",
            }}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HabitItem;
