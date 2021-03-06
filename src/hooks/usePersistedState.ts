import { Dispatch, SetStateAction, useEffect, useState } from 'react';

type IUsePersistedState<T> = [state: T, setState: Dispatch<SetStateAction<T>>];

export default function usePersistedState<T>(
  key: string,
  value: T,
): IUsePersistedState<T> {
  const [state, setState] = useState<T>(() => {
    const storedState = localStorage.getItem(key);

    if (storedState) {
      return JSON.parse(storedState);
    }

    return value;
  });

  useEffect(() => {
    if (state) {
      localStorage.setItem(key, JSON.stringify(state));
    } else {
      localStorage.removeItem(key);
    }
  }, [key, state]);

  return [state, setState];
}
