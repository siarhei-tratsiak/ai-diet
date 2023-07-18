export interface IUser {
  activity: activity
  birthDate: number
  height: number
  sex: sex
  weight: number
  weightGoal: weightGoal
}

enum activity {
  low,
  medium,
  hight
}

enum sex {
  male,
  female
}

enum weightGoal {
  lose,
  keep,
  gain
}
