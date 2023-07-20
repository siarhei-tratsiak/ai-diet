import { sexConstraint } from '@/entities/constraint/constraint.types'
import { sex } from '@/entities/user/user.types'
import ConstraintService from '@/services/constraint/constraint-service'

export default class SexConstraintService extends ConstraintService {
  static getConstraints(constraint: sexConstraint & { sex: sex }) {
    const min =
      constraint.sex === sex.male ? constraint.maleMin : constraint.femaleMin

    const max = this.countMax({ min, ...constraint })

    return { min, max }
  }
}
