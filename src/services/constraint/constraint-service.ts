import { constraint } from '@/entities/constraint/constraint.types'
import IConstraintService from '@/services/constraint/constraint-service.types'
import Singleton from '@/utils/singleton'

// prettier-ignore
export default abstract class ConstraintService
  extends Singleton<ConstraintService>()
  implements IConstraintService {
  public getConstraints(): Required<constraint> {
    throw new Error('not implemented')
  }

  protected static countMax(constraint: constraint) {
    return constraint.max || constraint.min * 3
  }
}
