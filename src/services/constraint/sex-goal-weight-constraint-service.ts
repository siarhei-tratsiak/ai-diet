import {
  sexGoalWeightConstraint,
  weights
} from '@/entities/constraint/constraint.types'
import { sex, weightGoal } from '@/entities/user/user.types'
import ConstraintService from '@/services/constraint/constraint-service'

export default class SexGoalWeightConstraintService extends ConstraintService {
  static getConstraints(constraint: sexGoalWeightConstraint & conditions) {
    const { sex, weight, weightGoal } = constraint
    const recommended = constraint[sex][weightGoal][weight]
    const min = recommended * 0.9
    const max = recommended * 1.1

    return { min, max }
  }
}

type conditions = {
  sex: sex
  weight: weights
  weightGoal: weightGoal
}
