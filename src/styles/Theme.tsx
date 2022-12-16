import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { ReactNode } from 'react';

const baseAtom = atom<'dark' | 'light'>('dark');

const themeAtom = atom((get) => get(baseAtom));
const toggleThemeAtom = atom(null, (get, set) => set(baseAtom, get(baseAtom) === 'dark' ? 'light' : 'dark'));

export const useTheme = () => useAtomValue(themeAtom);
export const useToggleTheme = () => useSetAtom(toggleThemeAtom);

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const Theme = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
