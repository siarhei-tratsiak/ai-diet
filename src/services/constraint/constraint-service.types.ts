import { Constraint } from '@/entities/constraint/constraint.types'

export default interface IConstraintService {
  getConstraints(): Required<Constraint>
}
