# eslint-plugin-angular-template-whitespace

This is controversial topic, but not everyone is onboard with prettier usage throughout codebase.

My goal is to have small set of rules that enforce whitespace in angular templates, mainly in expressions and conditions.

> This is not ready for use just yet! Just taking initial steps make this possible.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-angular-template-whitespace`:

```
$ npm install eslint-plugin-angular-template-whitespace --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-angular-template-whitespace` globally.

## Usage

Add `angular-template-whitespace` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "extends": ["plugin:angular-template-whitespace/recommended"],
    "plugins": [
        "angular-template-whitespace"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "angular-template-whitespace/space-around-pipe": "error"
    }
}
```

# Contributing

Feel free to open a PR or create an issue :) 
