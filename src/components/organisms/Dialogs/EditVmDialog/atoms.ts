import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';

const baseAtom = atom(false);

/**
 * @package
 */
export const updateVmDialogAtom = atom<boolean, boolean>(
  (get) => get(baseAtom),
  (_get, set, newValue) => set(baseAtom, newValue)
);

export const useWritableUpdateVmDialog = () => useAtom(updateVmDialogAtom);
export const useReadOnlyUpdateVmDialog = () => useAtomValue(updateVmDialogAtom);
export const useWriteOnlyUpdateVmDialog = () => useSetAtom(updateVmDialogAtom);
