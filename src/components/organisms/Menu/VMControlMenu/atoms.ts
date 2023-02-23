import { atom, useSetAtom, useAtomValue, useAtom, ExtractAtomArgs, ExtractAtomValue } from 'jotai';

const baseAtom = atom<string[]>([]);

const selectedVmAtom = atom<ExtractAtomValue<typeof baseAtom>, ExtractAtomArgs<typeof baseAtom>, void>(
  (get) => get(baseAtom),
  (_get, set, newValue) => set(baseAtom, newValue)
);

const resetSelectedVmAtom = atom(null, (_get, set) => set(baseAtom, []));

export const useSelectedVmWritableAtom = () => useAtom(selectedVmAtom);
export const useSelectedVmReadOnlyAtom = () => useAtomValue(selectedVmAtom);
export const useSelectedVmWriteOnlyAtom = () => useSetAtom(selectedVmAtom);
export const useResetSelectedVmAtom = () => useSetAtom(resetSelectedVmAtom);
