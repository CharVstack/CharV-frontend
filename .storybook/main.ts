import tsConfigPaths from 'vite-tsconfig-paths';
import { StorybookViteConfig } from '@storybook/builder-vite';
import { mergeConfig, UserConfig } from 'vite';
import visualizer from 'rollup-plugin-visualizer';

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
    emotionAlias: false,
    interactionsDebugger: true,
  },
  staticDirs: ['./public'],
  viteFinal: (config, { configType }) => {
    const shouldAnlyze = process.env.ANALYZE === 'true';
    const overrideConfig: UserConfig = {
      plugins: [tsConfigPaths()],
    };
    if (configType === 'PRODUCTION') {
      overrideConfig.build = {
        chunkSizeWarningLimit: 1200,
        outDir: 'storybook-static',
        rollupOptions: {
          plugins: [
            shouldAnlyze &&
              visualizer({
                open: true,
                filename: 'storybook-static/stats.html',
                gzipSize: false,
                brotliSize: false,
              }),
          ],
        },
      };
      overrideConfig.base = './';
    }
    return mergeConfig(config, overrideConfig);
  },
};

export default config;
