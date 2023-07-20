import { IUser } from '@/entities/user/user.types'
import ConstraintService from '@/services/constraint/constraint-service'
import UserService from '@/services/user/user-service'

export default class VitaminDConstraintService extends ConstraintService {
  public static getConstraints(user: IUser) {
    const userService = new UserService(user)
    const age = userService.getAge()

    const min = age < 71 ? 15 : 20

    return { min, max: 100 }
  }
}
