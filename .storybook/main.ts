import tsConfigPaths from 'vite-tsconfig-paths';
import { StorybookViteConfig } from '@storybook/builder-vite';

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
  viteFinal: (config) => {
    config.plugins = [config.plugins, tsConfigPaths()];
    if (process.env.NODE_ENV === 'production') {
      config.build = {
        chunkSizeWarningLimit: 1200,
      };
      config.base = './';
    }
    return config;
  },
};

export default config;
