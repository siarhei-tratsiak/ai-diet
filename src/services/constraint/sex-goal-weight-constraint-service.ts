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
    const limit = this.getWeightLimit(weight)

    const recommended = constraint[sex][weightGoal][limit]
    const min = recommended * 0.9
    const max = recommended * 1.1

    return { min, max }
  }

  private static getWeightLimit(weight: number) {
    let limit = Weights.fifty

    if (weight > 55 && weight <= 65) {
      limit = Weights.sixty
    } else if (weight > 65 && weight <= 75) {
      limit = Weights.seventy
    } else {
      limit = Weights.eighty
    }

    return limit
  }
}

type conditions = {
  sex: Sex
  weight: Weights
  weightGoal: WeightGoal
}
