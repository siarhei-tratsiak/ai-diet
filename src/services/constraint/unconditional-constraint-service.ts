import { constraint } from '@/entities/constraint/constraint.types'
import ConstraintService from '@/services/constraint/constraint-service'

export default class UnconditionalConstraintService extends ConstraintService {
  public static getConstraints(constraint: constraint) {
    const { min } = constraint
    const max = this.countMax(constraint)

    return { min, max }
  }
}
