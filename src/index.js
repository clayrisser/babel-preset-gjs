import { declare } from '@babel/helper-plugin-utils';

export default declare((_api, opts) => {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          corejs: 3,
          useBuiltIns: 'usage',
          ...opts,
          targets: {
            node: '4',
            ...opts?.targets
          }
        }
      ]
    ],
    plugins: ['babel-plugin-gjs']
  };
});
