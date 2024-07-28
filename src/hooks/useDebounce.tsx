import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Example usage:
// const [debouncedSearchTerm, searchTerm, setSearchTerm] = useDebounce<string>('', 500);
// Use debouncedSearchTerm in your component

export default useDebounce;
