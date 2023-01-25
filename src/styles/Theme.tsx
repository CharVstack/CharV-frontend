import { CssBaseline, createTheme, ThemeProvider, Theme as MUITheme } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { ReactNode } from 'react';

const baseAtom = atom<'dark' | 'light'>('dark');

const themeAtom = atom((get) => get(baseAtom));
const toggleThemeAtom = atom(null, (get, set) => set(baseAtom, get(baseAtom) === 'dark' ? 'light' : 'dark'));

export const useTheme = () => useAtomValue(themeAtom);
export const useToggleTheme = () => useSetAtom(toggleThemeAtom);

type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T;

const commonSettings: DeepPartial<MUITheme> = {
  zIndex: {
    drawer: 10,
  },
};

export const lightTheme = createTheme(
  deepmerge(
    {
      palette: {
        mode: 'light',
      },
    },
    commonSettings
  )
);

export const darkTheme = createTheme(
  deepmerge(
    {
      palette: {
        mode: 'dark',
      },
    },
    commonSettings
  )
);

export const Theme = ({ children }: { children: ReactNode }) => {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
