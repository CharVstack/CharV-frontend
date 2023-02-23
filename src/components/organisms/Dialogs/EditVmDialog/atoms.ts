import { atom, ExtractAtomArgs, ExtractAtomValue, useAtom, useAtomValue, useSetAtom } from 'jotai';

const baseAtom = atom(false);

/**
 * @package
 */
export const updateVmDialogAtom = atom<ExtractAtomValue<typeof baseAtom>, ExtractAtomArgs<typeof baseAtom>, void>(
  (get) => get(baseAtom),
  (_get, set, newValue) => set(baseAtom, newValue)
);

export const useWritableUpdateVmDialog = () => useAtom(updateVmDialogAtom);
export const useReadOnlyUpdateVmDialog = () => useAtomValue(updateVmDialogAtom);
export const useWriteOnlyUpdateVmDialog = () => useSetAtom(updateVmDialogAtom);
