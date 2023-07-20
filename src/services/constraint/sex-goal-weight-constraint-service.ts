import {
  SexGoalWeightConstraint,
  Weights
} from '@/entities/constraint/constraint.types'
import { Sex, WeightGoal } from '@/entities/user/user.types'
import ConstraintService from '@/services/constraint/constraint-service'

export default class SexGoalWeightConstraintService extends ConstraintService {
  public static getConstraints(
    constraint: SexGoalWeightConstraint & conditions
  ) {
    const { sex, weight, weightGoal } = constraint
    const recommended = constraint[sex][weightGoal][weight]
    const min = recommended * 0.9
    const max = recommended * 1.1

    return { min, max }
  }
}

type conditions = {
  sex: Sex
  weight: Weights
  weightGoal: WeightGoal
}
