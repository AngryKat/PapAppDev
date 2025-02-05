import { IconAdapter } from '../IconAdapter'
import { HappyEmojiSvg } from './HappyEmojiSvg'
import { NeutralEmojiSvg } from './NeutralEmojiSvg'
import { SadEmojiSvg } from './SadEmojiSvg'
import { VeryHappyEmojiSvg } from './VeryHappyEmojiSvg'
import { VerySadEmojiSvg } from './VerySadEmojiSvg'


export default {
  VerySadEmojiIcon: IconAdapter(VerySadEmojiSvg),
  SadEmojiIcon: IconAdapter(SadEmojiSvg),
  NeutralEmojiIcon: IconAdapter(NeutralEmojiSvg),
  HappyEmojiIcon: IconAdapter(HappyEmojiSvg),
  VeryHappyEmojiIcon: IconAdapter(VeryHappyEmojiSvg),
}
