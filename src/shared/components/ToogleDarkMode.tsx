import useDarkMode from "../../hooks/useDarkMode";

export default function ToggleDarkMode() {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <div
      onClick={toggleDarkMode}
      className="relative w-14 h-8 rounded-3xl bg-slate-300 dark:bg-zinc-700 place--center cursor-pointer"
    >
      <div
        className={`absolute top-1 rounded-full w-6 h-6  bg-black dark:bg-white ${isDarkMode ? "left-1" : "right-1"}`}
      />
    </div>
  );
}
