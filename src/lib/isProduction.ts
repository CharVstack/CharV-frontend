import { atom, useAtomValue } from 'jotai';

const isProductionAtom = atom(import.meta.env.PROD);

export const useIsProduction = () => useAtomValue(isProductionAtom);
