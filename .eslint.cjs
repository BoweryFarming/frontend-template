module.exports = {
  env: {
    browser: true,
    jasmine: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsConfigRootDir: __dirname,
    project: path.resolve(__dirname, "tsconfig.json"),
  },
  plugins: [
    "prettier",
    "react",
    "react-hooks",
    "unicorn",
    "import"
    "@typescript-eslint",
    "jsx-a11y",
    "sonarjs",
    "prefer-arrow"
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
  ],
  rules: {
    "one-var": [
      "error",
      {
        let: "never",
        const: "never",
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            importNames: ["default"],
            message: "Import specific named functions, like `import { map } from 'lodash'`",
            name: "lodash",
          },
        ],
      },
    ],
    quotes: ["error", "single", { avoidEscape: true }],
    semi: ["error", "never"],
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "never",
        exports: "never",
        functions: "never",
      },
    ],
    eqeqeq: [
      "error",
      "always",
      {
        null: "always",
      },
    ],
    "no-unreachable-loop": "error",
    "no-unsafe-optional-chaining": "error",
    "require-atomic-updates": "error",
    "array-callback-return": "error",
    "no-caller": "error",
    "no-multi-spaces": "error",
    "no-param-reassign": "error",
    "no-return-await": "error",
    "radix": "error",
    "require-await": "error",
    "strict": "error",
    "yoda": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-template": "error",
    "quote-props": "error",

    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],

    // Prettier
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        jsxSingleQuote: true,
        semi: false,
      },
    ],

    // React
    "react/button-has-type": "error",
    "react/forbid-component-props": "error",
    "react/no-array-index-key": "error",
    "react/no-multi-comp": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],

    "react/display-name": "off",
    "react/prop-types": "off",

    // Unicorn
    "unicorn/no-unsafe-regex": "error",
    "unicorn/no-unused-properties": "error",
    "unicorn/custom-error-definition": "error",
    "unicorn/import-index": "error",
    "unicorn/import-style": "error",
    "unicorn/prefer-at": "error",
    "unicorn/prefer-object-has-own": "error",
    "unicorn/prefer-string-replace-all": "error",
    "unicorn/string-content": "error",

    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-null": "off",
    "unicorn/consistent-destructuring": "off",

    // Typescript
    "@typescript-eslint/ban-ts-comment": "error",
    "@typescript-eslint/no-explicit-any": "error",

    // Import
    "import/no-unresolved": "error",
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-absolute-path": "error",
    "import/no-webpack-loader-syntax": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-useless-path-segments": "error",
    "import/export": "error",
    "import/extensions": ["error", "never"],
    "import/first": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [
          ["$components", path.resolve(__dirname, 'src', 'components')]
        ],
        extensions: [".ts", ".tsx"],
      },
    },
  },
}
