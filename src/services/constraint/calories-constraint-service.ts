import { IUser, Activity, Sex, WeightGoal } from '@/entities/user/user.types'
import ConstraintService from '@/services/constraint/constraint-service'
import UserService from '@/services/user/user-service'

export default class CaloriesConstraintService extends ConstraintService {
  public static getConstraints(user: IUser) {
    const basalMetabolicRate = this.getBasalMetabolicRate(user)
    const activityLevel = this.getActivityLevel(user.activity)
    const goalCoefficient = this.getGoalCoefficient(user.weightGoal)

    const recommended = basalMetabolicRate * activityLevel * goalCoefficient

    return { min: recommended * 0.9, max: recommended * 1.1 }
  }

  private static getBasalMetabolicRate(user: IUser) {
    const userService = new UserService(user)
    const age = userService.getAge()
    const coefficient = user.sex === Sex.male ? 5 : -161
    return 10 * user.weight + 6.25 * user.height - 5 * age + coefficient
  }

  private static getGoalCoefficient(weightGoal: WeightGoal) {
    const goalCoefficients = {
      [WeightGoal.lose]: 0.9,
      [WeightGoal.keep]: 1,
      [WeightGoal.gain]: 1.1
    }

    return goalCoefficients[weightGoal]
  }

  private static getActivityLevel(activity: Activity) {
    const activityLevels = {
      [Activity.low]: 1.53,
      [Activity.medium]: 1.76,
      [Activity.hight]: 2.25
    }

    return activityLevels[activity]
  }
}
