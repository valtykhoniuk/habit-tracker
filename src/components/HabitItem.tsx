import type { Habit } from "../types";

interface Props {
  habit: Habit;
  onToggleDay: (habitId: number, day: number) => void;
}

const HabitItem = ({ habit, onToggleDay }: Props) => {
  const days = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <div className="habit-item flex flex-col gap-2 text-center rounded-xl bg-white/15 px-10 py-4">
      <h3 className="text-white text-lg font-semibold">{habit.name}</h3>
      <div className="flex justify-center flex-wrap">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => onToggleDay(habit.id, day)}
            className={`cursor-pointer border-none px-[0.4rem] py-[0.4rem] mx-[0.2rem] rounded-[0.4rem] transition-[background-color,transform] duration-300 ease-in-out ${
              habit.completedDays.includes(day)
                ? "bg-white/40 text-black"
                : "bg-white/15 text-white"
            } hover:bg-white/30`}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HabitItem;
