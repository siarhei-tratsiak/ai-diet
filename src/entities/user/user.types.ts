export interface IUser {
  activity: Activity
  birthDate: number
  height: number
  sex: Sex
  weight: number
  weightGoal: WeightGoal
}

export enum Activity {
  low,
  medium,
  hight
}

export enum Sex {
  male,
  female
}

export enum WeightGoal {
  lose,
  keep,
  gain
}
