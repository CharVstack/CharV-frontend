export const calcUnitSize = (byteSize: number, significant = 0): [string, number] => {
  const KiB = 1024;
  const MiB = KiB ** 2;
  const GiB = KiB ** 3;
  const TiB = KiB ** 4;

  if (byteSize >= TiB) {
    const unit = 'TiB';
    const calculatedSize = Math.ceil(byteSize / TiB);

    if (calculatedSize.toString().length >= significant) {
      return [unit, calculatedSize];
    }
  }
  if (byteSize >= GiB) {
    const unit = 'GiB';
    const calculatedSize = Math.ceil(byteSize / GiB);

    if (calculatedSize.toString().length >= significant) {
      return [unit, calculatedSize];
    }
  }
  if (byteSize >= MiB) {
    const unit = 'MiB';
    const calculatedSize = Math.ceil(byteSize / MiB);

    if (calculatedSize.toString().length >= significant) {
      return [unit, calculatedSize];
    }
  }
  if (byteSize >= KiB) {
    const unit = 'KiB';
    const calculatedSize = Math.ceil(byteSize / KiB);

    if (calculatedSize.toString().length >= significant) {
      return [unit, calculatedSize];
    }
  }
  const unit = 'B';
  return [unit, byteSize];
};
