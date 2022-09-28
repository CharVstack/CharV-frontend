export const ClacUnitSize = (byteSize: number) => {
  const KiB = 1024;
  const MiB = KiB ** 2;
  const GiB = KiB ** 3;
  const TiB = KiB ** 4;

  if (byteSize >= TiB) {
    const unit = 'TiB';
    const calculatedSize = byteSize / TiB;

    return { unit, calculatedSize };
  }
  if (byteSize >= GiB) {
    const unit = 'GiB';
    const calculatedSize = byteSize / GiB;

    return { unit, calculatedSize };
  }
  if (byteSize >= MiB) {
    const unit = 'MiB';
    const calculatedSize = byteSize / MiB;

    return { unit, calculatedSize };
  }
  if (byteSize >= KiB) {
    const unit = 'KiB';
    const calculatedSize = byteSize / KiB;

    return { unit, calculatedSize };
  }
  const unit = 'B';
  const calculatedSize = byteSize;

  return { unit, calculatedSize };
};
