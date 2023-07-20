import { IUser, Activity, Sex, WeightGoal } from '@/entities/user/user.types'

const defaultUser: IUser = {
  activity: Activity.medium,
  birthDate: 631152000000, // 01.01.1990
  height: 169,
  sex: Sex.male,
  weight: 62,
  weightGoal: WeightGoal.keep
}

export default defaultUser
