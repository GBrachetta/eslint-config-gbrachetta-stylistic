module.exports = {
  env: {
    es6: true,
  },

  extends: [
    "plugin:css-import-order/recommended",
    "plugin:tailwindcss/recommended",
  ],
  overrides: [
    {
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
      ],
      files: ["*.ts", "*.tsx"],
      parser: require.resolve("@typescript-eslint/parser"),
      plugins: ["@typescript-eslint/eslint-plugin"],
      rules: {
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": "warn",
        "@typescript-eslint/consistent-type-assertions": [
          "warn",
          { assertionStyle: "as" },
        ],
        "@typescript-eslint/member-delimiter-style": "warn",
        "@typescript-eslint/no-dynamic-delete": "warn",
        "@typescript-eslint/no-empty-interface": [
          "warn",
          { allowSingleExtends: true },
        ],
        "@typescript-eslint/no-extra-non-null-assertion": "warn",
        "@typescript-eslint/no-extraneous-class": "warn",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-use-before-define": [
          "error",
          {
            classes: false,
            functions: false,
            typedefs: false,
            variables: false,
          },
        ],
        "@typescript-eslint/no-useless-constructor": "warn",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/unified-signatures": "warn",

        "default-case": "off",
        "no-dupe-class-members": "off",
        "no-undef": "off",
        "no-use-before-define": "off",

        "react/prop-types": "off",
      },
    },
    {
      env: {
        node: true,
      },
      files: ["*.config.js", ".*rc.js"],
      rules: {
        "import/no-commonjs": "off",
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
      },
    },
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: [
    "sort-destructure-keys",
    "typescript-sort-keys",
    "sort-keys-fix",
    "@typescript-eslint",
    "sort-exports",
    "eslint-plugin-import",
    "eslint-plugin-react",
    "@stylistic",
  ],

  rules: {
    "@stylistic/array-bracket-newline": [
      1,
      {
        minItems: 5,
        multiline: true,
      },
    ],
    "@stylistic/array-bracket-spacing": [
      2,
      "never",
      {
        arraysInArrays: false,
        objectsInArrays: false,
        singleValue: false,
      },
    ],
    "@stylistic/array-element-newline": [
      0,
      {
        minItems: 5,
        multiline: true,
      },
    ],
    "@stylistic/arrow-parens": [1],
    "@stylistic/arrow-spacing": [
      2,
      {
        after: true,
        before: true,
      },
    ],
    "@stylistic/block-spacing": [2],
    "@stylistic/brace-style": [2],
    "@stylistic/comma-dangle": [2, "always-multiline"],
    "@stylistic/comma-spacing": [
      2,
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/comma-style": [2, "last"],
    "@stylistic/computed-property-spacing": [2, "never"],
    "@stylistic/dot-location": [2, "property"],
    "@stylistic/eol-last": [2, "always"],
    "@stylistic/function-call-argument-newline": [2, "consistent"],
    "@stylistic/function-call-spacing": [2, "never"],
    "@stylistic/function-paren-newline": [2, "multiline-arguments"],
    "@stylistic/generator-star-spacing": [
      2,
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/implicit-arrow-linebreak": [2, "beside"],
    "@stylistic/indent": [2, 2],
    "@stylistic/indent-binary-ops": [2, 2],
    "@stylistic/jsx-child-element-spacing": [2],
    "@stylistic/jsx-closing-bracket-location": [2],
    "@stylistic/jsx-closing-tag-location": [2],
    "@stylistic/jsx-curly-brace-presence": [
      2,
      {
        children: "never",
        propElementValues: "never",
        props: "never",
      },
    ],
    "@stylistic/jsx-curly-newline": [2, "never"],
    "@stylistic/jsx-curly-spacing": [
      2,
      {
        allowMultiline: false,
        when: "never",
      },
    ],
    "@stylistic/jsx-equals-spacing": [2, "never"],
    "@stylistic/jsx-first-prop-new-line": [2, "multiline"],
    "@stylistic/jsx-indent": [2, 2],
    "@stylistic/jsx-indent-props": [
      2,
      {
        ignoreTernaryOperator: true,
        indentMode: 2,
      },
    ],
    "@stylistic/jsx-max-props-per-line": [
      2,
      {
        maximum: {
          multi: 1,
          single: 1,
        },
      },
    ],
    "@stylistic/jsx-newline": [
      2,
      {
        allowMultilines: true,
        prevent: true,
      },
    ],
    "@stylistic/jsx-one-expression-per-line": [
      2,
      {
        allow: "single-child",
      },
    ],
    "@stylistic/jsx-props-no-multi-spaces": [2],
    "@stylistic/jsx-quotes": [2, "prefer-double"],
    "@stylistic/jsx-self-closing-comp": [2],
    "@stylistic/jsx-sort-props": [2],
    "@stylistic/jsx-tag-spacing": [
      2,
      {
        afterOpening: "never",
        beforeClosing: "allow",
        beforeSelfClosing: "always",
        closingSlash: "never",
      },
    ],
    "@stylistic/jsx-wrap-multilines": [
      2,
      {
        return: "parens-new-line",
      },
    ],
    "@stylistic/key-spacing": [
      2,
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    "@stylistic/keyword-spacing": [
      2,
      {
        after: true,
        before: true,
      },
    ],
    "@stylistic/linebreak-style": [2, "unix"],
    "@stylistic/lines-around-comment": [
      1,
      {
        afterBlockComment: false,
        afterHashbangComment: false,
        afterLineComment: false,
        allowArrayEnd: true,
        allowArrayStart: true,
        allowBlockEnd: true,
        allowBlockStart: true,
        allowClassEnd: true,
        allowClassStart: true,
        allowEnumEnd: true,
        allowEnumStart: true,
        allowInterfaceEnd: true,
        allowInterfaceStart: true,
        allowModuleEnd: true,
        allowModuleStart: true,
        allowObjectEnd: true,
        allowObjectStart: true,
        allowTypeEnd: true,
        allowTypeStart: true,
        applyDefaultIgnorePatterns: true,
        beforeBlockComment: true,
        beforeLineComment: true,
      },
    ],
    "@stylistic/lines-between-class-members": [2, "always"],
    "@stylistic/max-len": [
      0,
      {
        code: 120,
        comments: 80,
      },
    ],
    "@stylistic/max-statements-per-line": [
      2,
      {
        max: 2,
      },
    ],
    "@stylistic/member-delimiter-style": [
      2,
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
        multilineDetection: "brackets",
        singleline: {
          delimiter: "semi",
          requireLast: false,
        },
      },
    ],
    "@stylistic/multiline-ternary": ["error", "always-multiline"],
    "@stylistic/new-parens": [2, "never"],
    "@stylistic/newline-per-chained-call": [
      2,
      {
        ignoreChainWithDepth: 2,
      },
    ],
    "@stylistic/no-confusing-arrow": [
      2,
      {
        allowParens: true,
        onlyOneSimpleParam: false,
      },
    ],
    "@stylistic/no-extra-parens": [2],
    "@stylistic/no-extra-semi": [2],
    "@stylistic/no-floating-decimal": [2],
    "@stylistic/no-mixed-operators": [2],
    "@stylistic/no-mixed-spaces-and-tabs": [2],
    "@stylistic/no-multi-spaces": [2],
    "@stylistic/no-multiple-empty-lines": [
      1,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    "@stylistic/no-tabs": [
      2,
      {
        allowIndentationTabs: true,
      },
    ],
    "@stylistic/no-trailing-spaces": [2],
    "@stylistic/no-whitespace-before-property": [2],
    "@stylistic/nonblock-statement-body-position": [2, "beside"],
    "@stylistic/object-curly-newline": [
      2,
      {
        ImportDeclaration: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
      },
    ],
    "@stylistic/object-curly-spacing": [
      2,
      "always",
      {
        objectsInObjects: true,
      },
    ],
    "@stylistic/object-property-newline": [
      2,
      {
        allowAllPropertiesOnSameLine: true,
        allowMultiplePropertiesPerLine: false,
      },
    ],
    "@stylistic/one-var-declaration-per-line": [2, "always"],
    "@stylistic/operator-linebreak": [2, "none"],
    "@stylistic/padded-blocks": [2, "never"],
    "@stylistic/padding-line-between-statements": [
      1,
      {
        blankLine: "always",
        next: ["return", "export", "function", "block-like"],
        prev: "*",
      },
      {
        blankLine: "always",
        next: ["const", "export", "return"],
        prev: "import",
      },
      {
        blankLine: "always",
        next: "*",
        prev: ["default", "directive", "const", "let", "block-like"],
      },
      {
        blankLine: "any",
        next: ["case"],
        prev: ["case"],
      },
      {
        blankLine: "any",
        next: ["let"],
        prev: ["let"],
      },
      {
        blankLine: "any",
        next: ["const"],
        prev: ["const"],
      },
    ],
    "@stylistic/quote-props": [2, "as-needed"],
    "@stylistic/quotes": [2, "double"],
    "@stylistic/rest-spread-spacing": [2, "never"],
    "@stylistic/semi": [2, "always"],
    "@stylistic/semi-spacing": [
      2,
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/semi-style": [2, "last"],
    "@stylistic/space-before-blocks": [2],
    "@stylistic/space-before-function-paren": [2, "never"],
    "@stylistic/space-in-parens": [2, "never"],
    "@stylistic/space-infix-ops": [2],
    "@stylistic/space-unary-ops": [
      2,
      {
        nonwords: false,
        words: true,
      },
    ],
    "@stylistic/spaced-comment": [2, "always"],
    "@stylistic/switch-colon-spacing": [2],
    "@stylistic/template-curly-spacing": [2, "never"],
    "@stylistic/template-tag-spacing": [2, "always"],
    "@stylistic/type-annotation-spacing": [
      2,
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/type-generic-spacing": 2,
    "@stylistic/type-named-tuple-spacing": 2,
    "@stylistic/wrap-iife": [
      2,
      "inside",
      {
        functionPrototypeMethods: true,
      },
    ],
    "@stylistic/wrap-regex": 2,
    "@stylistic/yield-star-spacing": [2, "after"],
    "@typescript-eslint/no-unused-vars": 1,
    "css-import-order/css-import-order": 1,
    "import/order": [
      1,
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc",
        },
        groups: [
          "builtin",
          "external",
          "internal",
          ["sibling", "parent"],
          "index",
          "type",
          "object",
          "unknown",
        ],
        "newlines-between": "always",
      },
    ],
    "prefer-const": 1,
    "react/jsx-no-undef": 0,
    "react/jsx-sort-props": 1,
    "react/no-unknown-property": 0,
    "react/self-closing-comp": 1,
    "sort-destructure-keys/sort-destructure-keys": [
      1,
      {
        caseSensitive: false,
      },
    ],
    "sort-exports/sort-exports": [
      1,
      {
        ignoreCase: true,
        sortDir: "asc",
        sortExportKindFirst: "type",
      },
    ],
    "sort-imports": [
      1,
      {
        allowSeparatedGroups: false,
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
      },
    ],
    "sort-keys-fix/sort-keys-fix": 1,
    "typescript-sort-keys/interface": 1,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
