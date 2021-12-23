import type { InitialOptionsTsJest } from 'ts-jest'
import { defaults as tsjPreset } from 'ts-jest/presets'

const config: InitialOptionsTsJest = {
  globals: {
    'ts-jest': {
      // ts-jest configuration goes here
    },
  },
}

export default config