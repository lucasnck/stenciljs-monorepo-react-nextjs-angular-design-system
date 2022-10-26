import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';

const packageJson = require("./package.json")

export default {
  input: packageJson.source,
  output: [
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: true
    },
    {
      file: packageJson.main,
      format: 'commonjs',
      preferConst: true,
      sourcemap: true
    }
  ],
  external: id => !/^(\.|\/)/.test(id),
  plugins: [resolve(), sourcemaps()]
};