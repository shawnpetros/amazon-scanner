import { SCANNED } from '../types'

export default function (state = '', action) {
  switch (action.type) {
    case SCANNED:
      return action.code
    default:
      return state
  }
}
