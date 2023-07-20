import { Constraint } from '@/entities/constraint/constraint.types'
import IConstraintService from '@/services/constraint/constraint-service.types'
import Singleton from '@/utils/singleton'

// prettier-ignore
export default abstract class ConstraintService
  extends Singleton<ConstraintService>()
  implements IConstraintService {
  public getConstraints(): Required<Constraint> {
    throw new Error('not implemented')
  }

  protected static countMax(constraint: Constraint) {
    return constraint.max || constraint.min * 3
  }
}
