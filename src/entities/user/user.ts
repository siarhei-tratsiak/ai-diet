import defaultUser from '@/data/defaultUser'
import { IUser } from '@/entities/user/user.types'
import Singleton from '@/utils/singleton'

export default class User extends Singleton<User>() implements IUser {
  activity = defaultUser.activity
  birthDate = defaultUser.birthDate
  height = defaultUser.height
  sex = defaultUser.sex
  weight = defaultUser.weight
  weightGoal = defaultUser.weightGoal
}
