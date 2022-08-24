export const ClacUnitSize = (size: number) => {
  let unit = 'B';
  let calculatedSize = 0;
  const KiB = 1024;
  const MiB = KiB ** 2;
  const GiB = KiB ** 3;
  const TiB = KiB ** 4;

  if (size >= TiB) {
    unit = 'TiB';
    calculatedSize = size / TiB;
  } else if (size >= GiB) {
    unit = 'GiB';
    calculatedSize = size / GiB;
  } else if (size >= MiB) {
    unit = 'MiB';
    calculatedSize = size / MiB;
  } else if (size >= KiB) {
    unit = 'KiB';
    calculatedSize = size / KiB;
  }

  return { unit, calculatedSize };
};
