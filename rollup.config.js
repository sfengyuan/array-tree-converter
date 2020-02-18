import { terser } from 'rollup-plugin-terser'
export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/web/index.js',
      format: 'iife',
      name: 'arrayTreeConverter'
    },
    plugins: [
      terser()
    ]
  },
  {
    input: 'src/main.js',
    output: {
      file: 'dist/umd/main.js',
      format: 'umd',
      name: 'arrayTreeConverter'
    },
    plugins: [
      terser()
    ]
  }
]
