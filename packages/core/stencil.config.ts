import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target'
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'core',
  outputTargets: [
    react({
      componentCorePackage: '@ds/core',
      proxiesFile: '../react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angularOutputTarget({
      componentCorePackage: '@ds/core',
      directivesProxyFile: '../angular/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular/src/lib/stencil-generated/index.ts',
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
