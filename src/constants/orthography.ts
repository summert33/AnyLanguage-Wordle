import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'aa',
  'b',
  'ch',
  'd',
  'ee',
  'g',
  'h',
  'ʔ',
  'i',
  'ii',
  'j',
  'k',
  'm',
  'n',
  'o',
  'oo',
  'p',
  's',
  'sh',
  't',
  'w',
  'y',
  'z',
  'zh',
  'gw',
  'kw',
  'mb',
  'nd',
  'ng',
  "n'",
  'nj',
  'ny',
  'nz',
  'ns',
  'nzh',
  'shk',
  'shp',
  'sht',
  'sk',
  "'w",
 
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
