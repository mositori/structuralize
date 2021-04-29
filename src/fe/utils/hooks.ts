import { useCallback, useState } from 'react';

export function useBooleanState(defaultState: boolean) {
  const [state, setState] = useState(defaultState);

  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);

  return [state, setTrue, setFalse] as const;
}

export function useToggle(defaultState: boolean) {
  const [state, setState] = useState(defaultState);

  const toggle = useCallback(() => setState((p) => !p), []);

  return [state, toggle] as const;
}
