import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target'

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    react({
      componentCorePackage: '@ds/core',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'dist-hydrate-script',
    },
  ],
};
