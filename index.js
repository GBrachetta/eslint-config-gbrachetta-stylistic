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
    "prettier",
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
      1,
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
    "@stylistic/arrow-parens": [1, "always"],
    "@stylistic/arrow-spacing": [
      1,
      {
        after: true,
        before: true,
      },
    ],
    "@stylistic/block-spacing": [1],
    "@stylistic/brace-style": [1],
    "@stylistic/comma-dangle": 0,
    "@stylistic/comma-spacing": 0,
    "@stylistic/comma-style": [1, "last"],
    "@stylistic/computed-property-spacing": [1, "never"],
    "@stylistic/dot-location": [1, "property"],
    "@stylistic/eol-last": 0,
    "@stylistic/function-call-argument-newline": [1, "consistent"],
    "@stylistic/function-call-spacing": [1, "never"],
    "@stylistic/function-paren-newline": [1, "multiline-arguments"],
    "@stylistic/generator-star-spacing": [
      1,
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/implicit-arrow-linebreak": [1, "beside"],
    "@stylistic/indent": 0,
    "@stylistic/indent-binary-ops": [1, 2],
    "@stylistic/jsx-child-element-spacing": 0,
    "@stylistic/jsx-closing-bracket-location": [1],
    "@stylistic/jsx-closing-tag-location": 1,
    "@stylistic/jsx-curly-brace-presence": [
      1,
      {
        children: "never",
        propElementValues: "never",
        props: "never",
      },
    ],
    "@stylistic/jsx-curly-newline": [1, "never"],
    "@stylistic/jsx-curly-spacing": [
      1,
      {
        allowMultiline: false,
        when: "never",
      },
    ],
    "@stylistic/jsx-equals-spacing": [1, "never"],
    "@stylistic/jsx-first-prop-new-line": [1, "multiline"],
    "@stylistic/jsx-indent": [1, 2],
    "@stylistic/jsx-indent-props": [
      1,
      {
        ignoreTernaryOperator: true,
        indentMode: 2,
      },
    ],
    "@stylistic/jsx-max-props-per-line": 0,
    "@stylistic/jsx-newline": 0,
    "@stylistic/jsx-one-expression-per-line": 0,
    "@stylistic/jsx-props-no-multi-spaces": 1,
    "@stylistic/jsx-quotes": [1, "prefer-double"],
    "@stylistic/jsx-self-closing-comp": [1],
    "@stylistic/jsx-sort-props": [1],
    "@stylistic/jsx-tag-spacing": [
      1,
      {
        afterOpening: "never",
        beforeClosing: "allow",
        beforeSelfClosing: "always",
        closingSlash: "never",
      },
    ],
    "@stylistic/jsx-wrap-multilines": [
      1,
      {
        return: "parens-new-line",
      },
    ],
    "@stylistic/key-spacing": [
      1,
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    "@stylistic/keyword-spacing": [
      1,
      {
        after: true,
        before: true,
      },
    ],
    "@stylistic/linebreak-style": [1, "unix"],
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
    "@stylistic/lines-between-class-members": [1, "always"],
    "@stylistic/max-len": [
      1,
      {
        comments: 80,
      },
    ],
    "@stylistic/max-statements-per-line": [
      1,
      {
        max: 2,
      },
    ],
    "@stylistic/member-delimiter-style": 0,
    "@stylistic/multiline-ternary": [1, "always-multiline"],
    "@stylistic/new-parens": [1, "never"],
    "@stylistic/newline-per-chained-call": [1],
    "@stylistic/no-confusing-arrow": [
      1,
      {
        allowParens: true,
        onlyOneSimpleParam: false,
      },
    ],
    "@stylistic/no-extra-parens": 0,
    "@stylistic/no-extra-semi": 1,
    "@stylistic/no-floating-decimal": 1,
    "@stylistic/no-mixed-operators": [1],
    "@stylistic/no-mixed-spaces-and-tabs": [1],
    "@stylistic/no-multi-spaces": [1],
    "@stylistic/no-multiple-empty-lines": [
      1,
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    "@stylistic/no-tabs": [
      1,
      {
        allowIndentationTabs: true,
      },
    ],
    "@stylistic/no-trailing-spaces": 0,
    "@stylistic/no-whitespace-before-property": 1,
    "@stylistic/nonblock-statement-body-position": [1, "beside"],
    "@stylistic/object-curly-newline": [
      1,
      {
        ImportDeclaration: {
          consistent: true,
          minProperties: 4,
          multiline: true,
        },
      },
    ],
    "@stylistic/object-curly-spacing": [
      1,
      "always",
      {
        objectsInObjects: true,
      },
    ],
    "@stylistic/object-property-newline": [
      1,
      {
        allowAllPropertiesOnSameLine: true,
        allowMultiplePropertiesPerLine: false,
      },
    ],
    "@stylistic/one-var-declaration-per-line": [1, "always"],
    "@stylistic/operator-linebreak": 0,
    "@stylistic/padded-blocks": [1, "never"],
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
    "@stylistic/quote-props": [1, "as-needed"],
    "@stylistic/quotes": 0,
    "@stylistic/rest-spread-spacing": [1, "never"],
    "@stylistic/semi": 0,
    "@stylistic/semi-spacing": [
      1,
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/semi-style": [1, "last"],
    "@stylistic/space-before-blocks": [1],
    "@stylistic/space-before-function-paren": [1, "never"],
    "@stylistic/space-in-parens": [1, "never"],
    "@stylistic/space-infix-ops": [1],
    "@stylistic/space-unary-ops": [
      1,
      {
        nonwords: false,
        words: true,
      },
    ],
    "@stylistic/spaced-comment": [1, "always"],
    "@stylistic/switch-colon-spacing": [1],
    "@stylistic/template-curly-spacing": [1, "never"],
    "@stylistic/template-tag-spacing": [1, "always"],
    "@stylistic/type-annotation-spacing": [
      1,
      {
        after: true,
        before: false,
      },
    ],
    "@stylistic/type-generic-spacing": 1,
    "@stylistic/type-named-tuple-spacing": 1,
    "@stylistic/wrap-iife": [
      1,
      "inside",
      {
        functionPrototypeMethods: true,
      },
    ],
    "@stylistic/wrap-regex": 1,
    "@stylistic/yield-star-spacing": [1, "after"],
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
    'prettier/prettier': [
      1,
      {
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true,
        embeddedLanguageFormatting: 'auto',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxSingleQuote: false,
        printWidth: 120,
        proseWrap: 'preserve',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: true,
        singleAttributePerLine: true,
        singleQuote: false,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
        vueIndentScriptAndStyle: false,
      },
    ],
    "react/jsx-no-undef": 0,
    "react/jsx-sort-props": 0,
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
    "tailwindcss/no-custom-classname": [
      2,
      {
        "whitelist": [
          "bg\\-gradient\\-(conic|radial)"
        ]
      }
    ],
    "typescript-sort-keys/interface": 1,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
