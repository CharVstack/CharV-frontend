import { ImagePool, encoders } from '@squoosh/lib';
import { Plugin } from 'vite';
import { OutputAsset } from 'rollup';
import { cpus } from 'os';

const imagePool = new ImagePool(cpus().length);

export default (): Plugin => {
  return {
    name: 'squoosh',
    generateBundle: async (_options, bundle) => {
      const imageFileList = Object.keys(bundle).filter((key) => {
        const regex = /\.(jpe?g|png)$/i;
        return regex.test(key);
      });
      const imagePoolList = imageFileList
        .map((file) => {
          const bundleFile = bundle[file];
          if (bundleFile.type === 'chunk') {
            return;
          }
          if (!(bundleFile.source instanceof Uint8Array)) {
            return;
          }
          const imageSource = bundleFile.source;
          const image = imagePool.ingestImage(imageSource);
          return { file, image };
        })
        .filter((e): e is NonNullable<typeof e> => e !== undefined);

      await Promise.all(
        imagePoolList.map(async (item) => {
          const { image, file } = item;
          await image.preprocess({ resize: { width: 500 } });
          if (/\.(jpe?g)$/i.test(file)) {
            await image.encode({ mozjpeg: encoders.mozjpeg.defaultEncoderOptions });
          }
          if (/\.(png)$/i.test(file)) {
            await image.encode({ oxipng: encoders.oxipng.defaultEncoderOptions });
          }
        })
      );
      imagePoolList.forEach((item) => {
        const { image, file } = item;
        let data: Awaited<ReturnType<typeof image.encode>>['oxipng'];
        if (/\.(jpe?g)$/i.test(file)) {
          data = image.encodedWith.mozjpeg;
        }
        if (/\.(png)$/i.test(file)) {
          data = image.encodedWith.oxipng;
        }
        if (data === undefined) {
          throw new Error();
        }
        (bundle[file] as OutputAsset).source = data.binary;
      });
      await imagePool.close();
    },
  };
};
