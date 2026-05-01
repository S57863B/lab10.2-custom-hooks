import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set up the timeout to update the debounced value
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function: clears the timeout if value or delay changes
    // This is what prevents the update from happening on every keystroke
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}