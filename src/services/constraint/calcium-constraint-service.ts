import { IUser } from '@/entities/user/user.types'
import ConstraintService from '@/services/constraint/constraint-service'
import UserService from '@/services/user/user-service'

export default class CalciumConstraintService extends ConstraintService {
  public static getConstraints(user: IUser) {
    const userService = new UserService(user)
    const age = userService.getAge()

    const min = age > 25 ? 950 : 1000
    const max = age > 51 ? 2000 : 2500

    return { min, max }
  }
}
