export interface IUser {
  activity: activity
  birthDate: number
  height: number
  sex: sex
  weight: number
  weightGoal: weightGoal
}

export enum activity {
  low,
  medium,
  hight
}

export enum sex {
  male,
  female
}

export enum weightGoal {
  lose,
  keep,
  gain
}
