// import { convertAnnotatedSourceToFailureCase } from '@angular-eslint/utils';
// import type { MessageIds } from '../../../src/rules/space-around-pipe';

// const messageId: MessageIds = 'spaceAroundPipe';

export const valid = [
  `{{ (foo | async) }}`,
  `{{ !(foo | async | somethingElse) }}`,
  `{{ (foo | async) == null }}`,
  `{{ (foo | async) === false }}`,
  `{{ !(foo | notAnAsyncPipe) }}`,
  `<div *ngIf="(foo | async) as value">test</div>`,
];

export const invalid = [
  // convertAnnotatedSourceToFailureCase({
  //   description: 'it should fail if the space is missing before the pipe',
  //   annotatedSource: `
  //       {{ (foo| async) }}
  //              ~
  //     `,
  //   messageId,
  // }),
];
