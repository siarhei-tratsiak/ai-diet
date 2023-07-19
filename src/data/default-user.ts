import { IUser, activity, sex, weightGoal } from '@/entities/user/user.types'

const defaultUser: IUser = {
  activity: activity.medium,
  birthDate: 631152000000, // 01.01.1990
  height: 169,
  sex: sex.male,
  weight: 62,
  weightGoal: weightGoal.keep
}

export default defaultUser
