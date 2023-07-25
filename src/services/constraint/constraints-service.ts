import {
  nutrientSexConstraints,
  nutrientSexGoalWeightConstraints,
  nutrientUnconditionalConstraints
} from '@/data/nutrient-constraints'
import {
  Constraint,
  SexConstraint,
  SexGoalWeightConstraint
} from '@/entities/constraint/constraint.types'
import { Nutrients } from '@/entities/nutrient/nutrient.types'
import { IUser } from '@/entities/user/user.types'
import CalciumConstraintService from '@/services/constraint/calcium-constraint-service'
import CaloriesConstraintService from '@/services/constraint/calories-constraint-service'
import IronConstraintService from '@/services/constraint/iron-constraint-service'
import MagnesiumConstraintService from '@/services/constraint/magnesium-constraint-service'
import SexConstraintService from '@/services/constraint/sex-constraint-service'
import SexGoalWeightConstraintService from '@/services/constraint/sex-goal-weight-constraint-service'
import UnconditionalConstraintService from '@/services/constraint/unconditional-constraint-service'
import VitaminDConstraintService from '@/services/constraint/vitamin-d-constraint-service'

export default class ConstraintsService {
  private static constraints: {
    [key in Nutrients]?: Required<Constraint>
  } = {}

  public static getConstraints(user: IUser) {
    this.setSpecificConstraints(user)
    this.setSexConstraints(user)
    this.setSexGoalConstraints(user)
    this.setUnconditionalConstraints()

    return this.constraints
  }

  private static setSpecificConstraints(user: IUser) {
    this.constraints[Nutrients.calcium] =
      CalciumConstraintService.getConstraints(user)
    this.constraints[Nutrients.calories] =
      CaloriesConstraintService.getConstraints(user)
    this.constraints[Nutrients.iron] =
      IronConstraintService.getConstraints(user)
    this.constraints[Nutrients.magnesium] =
      MagnesiumConstraintService.getConstraints(user)
    this.constraints[Nutrients.vitaminD] =
      VitaminDConstraintService.getConstraints(user)
  }

  private static setSexConstraints(user: IUser) {
    Object.entries(nutrientSexConstraints).forEach(
      ([key, value]: [unknown, SexConstraint]) => {
        this.constraints[key as Nutrients] =
          SexConstraintService.getConstraints({
            ...value,
            ...user
          })
      }
    )
  }

  private static setSexGoalConstraints(user: IUser) {
    Object.entries(nutrientSexGoalWeightConstraints).forEach(
      ([key, value]: [unknown, SexGoalWeightConstraint]) => {
        this.constraints[key as Nutrients] =
          SexGoalWeightConstraintService.getConstraints({
            ...value,
            ...user
          })
      }
    )
  }

  private static setUnconditionalConstraints() {
    Object.entries(nutrientUnconditionalConstraints).forEach(
      ([key, value]: [unknown, Constraint]) => {
        this.constraints[key as Nutrients] =
          UnconditionalConstraintService.getConstraints(value)
      }
    )
  }
}
