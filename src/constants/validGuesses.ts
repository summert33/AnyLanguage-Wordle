import { CONFIG } from './config'

export const VALIDGUESSES = [
  'abanzh',
  'dabasaa',
  'obwaam',
  'poohay',
  'wadoop',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
