module.exports = {
<<<<<<< HEAD
=======
  root: true,
>>>>>>> 8c5eb78 (first commit)
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
<<<<<<< HEAD
    'plugin:react-hooks/recommended'
  ],
=======
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
>>>>>>> 8c5eb78 (first commit)
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
<<<<<<< HEAD
    'react-refresh/only-export-components': 'warn',
    'react/prop-types': 'off'
  }
};
=======
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
>>>>>>> 8c5eb78 (first commit)
