import { sex, weightGoal } from '@/entities/user/user.types'

const enum weights {
  fifty,
  sixty,
  seventy,
  eighty
}

export type constraint = {
  min: number
  max?: number
}

export type sexConstraint = {
  maleMin: number
  femaleMin: number
  max?: number
}

export type sexGoalWeightConstraint = {
  [key in sex]: {
    [key in weightGoal]: {
      [key in weights]: number
    }
  }
}

export { weights }
