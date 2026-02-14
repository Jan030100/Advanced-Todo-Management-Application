import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Lazy initialization - this function runs only once when component mounts
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      console.log('Loading from localStorage:', key, item); 
      // Return stored value if exists, otherwise use initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return initialValue; // Fallback to initial value on error
    }
  });

  // Sync to localStorage whenever storedValue changes
  useEffect(() => {
    try {
      console.log('Saving to localStorage:', key, storedValue); 
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error('Error writing to localStorage:', error);
    }
  }, [key, storedValue]); // Re-run when key or storedValue changes

  // Return same interface as useState for easy drop-in replacement
  return [storedValue, setStoredValue];
}

export default useLocalStorage;