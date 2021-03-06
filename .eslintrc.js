module.exports = {
  env: {
    es6: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    es6: true,
    node: true,
  },
  
  extends: ['plugin:prettier/recommended'],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': 'error',

    eqeqeq: ['error', 'always'], // === and !==
    curly: ['error', 'all'], // { } on 1-line statements (if, while, for, etc)
    radix: ['warn', 'always'], // parseInt('123', 10)
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
      },
    ],
    'eol-last': ['warn', 'always'], // \n at last line of file
    indent: 'off', // off -> não força um estilo de identação padrão
    'linebreak-style': ['error', 'unix'], // não aceita \r na quebra de linha
    'array-bracket-spacing': ['always'],
    'no-else-return': 'error', // não aceita else return depois de um if return
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var'],
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'directive',
        next: 'directive',
      },
    ],
    'prefer-const': 'error',
    quotes: ['error', 'single'], 
    semi: ['error', 'always'],
    'block-scoped-var': 2,
    camelcase: 'error',
    'computed-property-spacing': ['error', 'never'],
    'max-depth': ['warn', 4],
    'max-len': ['warn', 120],
    'max-statements': ['warn', 17],
    'no-extend-native': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-use-before-define': ['error', 'nofunc'],
    'object-curly-spacing': ['error', 'always'],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'space-unary-ops': 'error',
  },
};
