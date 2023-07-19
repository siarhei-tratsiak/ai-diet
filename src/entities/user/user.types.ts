export interface IUser {
  activity: activity
  birthDate: number
  height: number
  sex: sex
  weight: number
  weightGoal: weightGoal
}

const enum activity {
  low,
  medium,
  hight
}

const enum sex {
  male,
  female
}

const enum weightGoal {
  lose,
  keep,
  gain
}

export { activity, sex, weightGoal }
