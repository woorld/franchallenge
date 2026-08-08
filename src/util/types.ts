export type FranChallengeToken = 'ふ' | 'ら' | 'ん' | 'ちゃ'

export type FranChallengeString = `${FranChallengeToken}${FranChallengeToken}${FranChallengeToken}${FranChallengeToken}${FranChallengeToken}`

export type FranChallengeStringFragment
  = `${FranChallengeToken}${FranChallengeToken}`
  | `${FranChallengeToken}${FranChallengeToken}${FranChallengeToken}`
  | `${FranChallengeToken}${FranChallengeToken}${FranChallengeToken}${FranChallengeToken}`

export type FranChallengeHand = {
  name: string,
  description: string,
  points: number,
  probability?: number,
  canComposite: boolean,
  isPokerHand: boolean,
  judgeFunction: (tokens: FranChallengeToken[]) => boolean,
}

export type PokerHand = 'ONE_PAIR' | 'TWO_PAIR' | 'THREE_OF_A_KIND' | 'FOUR_OF_A_KIND' | 'FULL_HOUSE'
