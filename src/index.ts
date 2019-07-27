import S from 'string'
import {shout} from './utils'

const text = 'hello world'
export function sayMessage(): string {
  return text
}

export function shoutMessage(): string {
  const t = {a: 1, b: 2}
  const x = {...t}
  return shout({text})
}

export function sayMessageWithUnderScores(): string {
  // eslint-disable-next-line babel/new-cap
  const {s} = S(text).underscore()
  return s
}

export {text}
