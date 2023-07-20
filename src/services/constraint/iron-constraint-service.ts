import { IUser, Sex } from '@/entities/user/user.types'
import ConstraintService from '@/services/constraint/constraint-service'
import UserService from '@/services/user/user-service'

export default class IronConstraintService extends ConstraintService {
  public static getConstraints(user: IUser) {
    const userService = new UserService(user)
    const age = userService.getAge()
    const min = user.sex === Sex.female && age < 51 ? 18 : 8

    return { min, max: 45 }
  }
}
