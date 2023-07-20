import { constraint } from '@/entities/constraint/constraint.types'

export default interface IConstraintService {
  getConstraints(): Required<constraint>
}
