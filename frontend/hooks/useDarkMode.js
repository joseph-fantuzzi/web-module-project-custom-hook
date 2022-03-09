import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(initialValue) {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", initialValue);

  const darkModeHandler = (value) => {
    setDarkMode(value);
  };

  return [darkMode, darkModeHandler];
}
