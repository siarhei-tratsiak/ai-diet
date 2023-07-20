import { IUser } from '@/entities/user/user.types'
import DateService from '@/services/date/date-service'

export default class UserService {
  constructor(private user: IUser) {
    /* */
  }

  public getAge() {
    return Math.round(
      //prettier-ignore
      (DateService.getToday() - this.user.birthDate) /
      DateService.millisecondsInYear
    )
  }
}
