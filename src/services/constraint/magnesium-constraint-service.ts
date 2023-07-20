import { IUser, Sex } from '@/entities/user/user.types'
import ConstraintService from '@/services/constraint/constraint-service'
import UserService from '@/services/user/user-service'

export default class MagnesiumConstraintService extends ConstraintService {
  public static getConstraints(user: IUser) {
    const userService = new UserService(user)
    const age = userService.getAge()

    const min =
      user.sex === Sex.male ? (age < 31 ? 400 : 420) : age < 31 ? 310 : 320
    const max = this.countMax({ min })

    return { min, max }
  }
}
