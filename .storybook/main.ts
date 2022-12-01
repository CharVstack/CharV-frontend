import tsConfigPaths from 'vite-tsconfig-paths'
import { UserConfig } from 'vitest/config'
import { StorybookConfig, CoreConfig, Options } from '@storybook/core-common'
import { Weaken } from 'utilitypes'

interface CustomizedCoreConfig extends Weaken<CoreConfig, 'builder'> {
  builder: CoreConfig['builder'] | 'storybook-builder-vite'
}
interface CustomizedStorybookConfig extends Weaken<StorybookConfig, 'core'> {
  core: CustomizedCoreConfig
  viteFinal?: (config: UserConfig, options: Options) => UserConfig
}

const config: CustomizedStorybookConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-controls", "@storybook/addon-actions", "@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-docs"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true,
    emotionAlias: false,
    interactionsDebugger: true,
  },
  staticDirs: ['./public'],
  viteFinal: (config) => {
    config.plugins = [
      config.plugins,
      tsConfigPaths()
    ]
    if (process.env.NODE_ENV === 'production') {
      config.build = {
        chunkSizeWarningLimit: 1200,
      }
      config.base = './';
    }
    return config
  }
};

export default config
