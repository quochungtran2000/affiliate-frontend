import type { NextPage } from "next";
import { useTheme } from "next-themes";

const Home: NextPage = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-sceen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl">Hilu</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toogle to {theme === "light" ? "Dark" : "Light"}
      </button>
    </div>
  );
};

export default Home;
