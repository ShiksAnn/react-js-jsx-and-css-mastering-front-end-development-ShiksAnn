import { useState, useEffect } from "react";

/**
 * useLocalStorage Hook
 * ---------------------
 * A custom React hook that synchronizes a state variable with localStorage.
 *
 * @param {string} key - The localStorage key to store the value under.
 * @param {any} initialValue - The default value if none exists in localStorage.
 * @returns {[any, Function]} - Returns [value, setValue] just like useState().
 *
 * Example usage:
 * const [tasks, setTasks] = useLocalStorage("tasks", []);
 */
export default function useLocalStorage(key, initialValue) {
  // Initialize state from localStorage or fallback to initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return initialValue;
    }
  });

  // Update localStorage whenever storedValue changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error saving to localStorage:", key, error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
