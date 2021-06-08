import React, {
  createContext,
  ReactNode,
  useState,
  useContext,
} from 'react';

import { themes, Theme } from '../utils/Theme';

interface ThemeContextData {
  handleNextTheme: () => void;
  currentTheme: Theme,
}

export const ThemeContext = createContext({} as ThemeContextData);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [theme, setTheme] = useState<Theme>(themes[0]);

  function handleNextTheme() {
    if (currentTheme >= themes.length - 1) {
      setCurrentTheme(0);
      setTheme(themes[0]);
      return;
    }

    setCurrentTheme(currentTheme + 1);
    setTheme(themes[currentTheme + 1]);
  }
  
  return (
    <ThemeContext.Provider value={{
      handleNextTheme,
      currentTheme: theme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const themeContext = useContext(ThemeContext);

  return themeContext;
}
