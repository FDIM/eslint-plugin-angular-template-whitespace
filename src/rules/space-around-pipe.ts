import { ESLintUtils } from '@typescript-eslint/utils';
// import type { TmplAstBoundEvent } from '@angular-eslint/bundled-angular-compiler';
// import { getTemplateParserServices } from '@angular-eslint/utils';

type Options = [];
export type MessageIds  = 'spaceAroundPipe';
export const RULE_NAME = 'space-around-pipe';
// const INVALID_PATTERN = /\[(.*)\]/;

const createRule = ESLintUtils.RuleCreator(
  name => `https://github.com/FDIM/eslint-plugin-angular-whitespace/docs/rule/${ name }`,
);

export default createRule<Options, MessageIds>({
  name: RULE_NAME,
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Ensures that the whitespace around pipe is added',
      recommended: 'error',
    },
    fixable: 'code',
    schema: [],
    messages: {
      spaceAroundPipe: 'Please surround the pipe with space before and after',
    },
  },
  defaultOptions: [],
  create(context) {
    // const parserServices = getTemplateParserServices(context);
    const sourceCode = context.getSourceCode();
    console.info(sourceCode);
    return {

    };
  },
});
