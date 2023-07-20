import { SexConstraint } from '@/entities/constraint/constraint.types'
import { Sex } from '@/entities/user/user.types'
import ConstraintService from '@/services/constraint/constraint-service'

export default class SexConstraintService extends ConstraintService {
  public static getConstraints(constraint: SexConstraint & { sex: Sex }) {
    const min =
      constraint.sex === Sex.male ? constraint.maleMin : constraint.femaleMin

    const max = this.countMax({ min, ...constraint })

    return { min, max }
  }
}
