import { Sex, WeightGoal } from '@/entities/user/user.types'

export enum Weights {
  fifty,
  sixty,
  seventy,
  eighty
}

export type Constraint = {
  min: number
  max?: number
}

export type SexConstraint = {
  maleMin: number
  femaleMin: number
  max?: number
}

export type SexGoalWeightConstraint = {
  [key in Sex]: {
    [key in WeightGoal]: {
      [key in Weights]: number
    }
  }
}
