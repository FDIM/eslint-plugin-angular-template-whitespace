import spaceAroundPipe, {
  RULE_NAME as spaceAroundPipeRuleName,
} from './rules/space-around-pipe';

export default {
  rules: {
    [spaceAroundPipeRuleName]: spaceAroundPipe,
  }
}
