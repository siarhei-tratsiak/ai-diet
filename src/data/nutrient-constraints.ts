import { nutrients } from '@/entities/nutrient/nutrient.types'
import { sex, weightGoal } from '@/entities/user/user.types'

const nutrientSexConstraints = {
  [nutrients.potassium]: { maleMin: 3400, femaleMin: 2600 },
  [nutrients.zinc]: { maleMin: 9.4, femaleMin: 6.8, max: 40 },
  [nutrients.copper]: { maleMin: 1.6, femaleMin: 1.3, max: 5 },
  [nutrients.vitaminA]: { maleMin: 900, femaleMin: 700, max: 3000 },
  [nutrients.vitaminC]: { maleMin: 110, femaleMin: 95, max: 2000 },
  [nutrients.thiamin]: { maleMin: 1.2, femaleMin: 1.1 },
  [nutrients.vitaminB6]: { maleMin: 1.7, femaleMin: 1.6, max: 25 },
  [nutrients.choline]: { maleMin: 550, femaleMin: 425, max: 3500 },
  [nutrients.vitaminK]: { maleMin: 120, femaleMin: 90 }
}

const nutrientUnconditionalConstraints = {
  [nutrients.alcohol]: { min: 0, max: 24 },
  [nutrients.water]: { min: 1000, max: 7000 },
  [nutrients.caffeine]: { min: 0, max: 100 },
  [nutrients.theobromine]: { min: 0, max: 250 },
  [nutrients.fiber]: { min: 30 },
  [nutrients.phosphorus]: { min: 580, max: 4000 },
  [nutrients.sodium]: { min: 500, max: 1500 },
  [nutrients.selenium]: { min: 70, max: 300 },
  [nutrients.retinol]: { min: 900, max: 1500 },
  [nutrients.betaCarotene]: { min: 4800 },
  [nutrients.vitaminE]: { min: 5, max: 300 },
  [nutrients.lycopene]: { min: 8000, max: 21000 },
  [nutrients.luteinZeaxanthin]: { min: 5000, max: 10000 },
  [nutrients.riboflavin]: { min: 1.6 },
  [nutrients.folate]: { min: 400, max: 1000 },
  [nutrients.vitaminB12]: { min: 4 },
  [nutrients.cholesterol]: { min: 0, max: 3000 }
}

const nutrientSexGoalWeightConstraints = {
  [nutrients.carbohydrate]: {
    [sex.male]: {
      [weightGoal.lose]: {
        50: 160,
        60: 165,
        70: 175,
        80: 185
      },
      [weightGoal.keep]: {
        50: 215,
        60: 230,
        70: 250,
        80: 260
      },
      [weightGoal.gain]: {
        50: 275,
        60: 290,
        70: 300,
        80: 320
      }
    },
    [sex.female]: {
      [weightGoal.lose]: {
        50: 120,
        60: 150,
        70: 170,
        80: 150
      },
      [weightGoal.keep]: {
        50: 150,
        60: 190,
        70: 200,
        80: 220
      },
      [weightGoal.gain]: {
        50: 200,
        60: 245,
        70: 260,
        80: 240
      }
    }
  },
  [nutrients.lipid]: {
    [sex.male]: {
      [weightGoal.lose]: {
        50: 40,
        60: 40,
        70: 40,
        80: 40
      },
      [weightGoal.keep]: {
        50: 55,
        60: 60,
        70: 60,
        80: 65
      },
      [weightGoal.gain]: {
        50: 70,
        60: 70,
        70: 75,
        80: 80
      }
    },
    [sex.female]: {
      [weightGoal.lose]: {
        50: 30,
        60: 35,
        70: 35,
        80: 40
      },
      [weightGoal.keep]: {
        50: 45,
        60: 50,
        70: 50,
        80: 55
      },
      [weightGoal.gain]: {
        50: 60,
        60: 60,
        70: 65,
        80: 70
      }
    }
  },
  [nutrients.protein]: {
    [sex.male]: {
      [weightGoal.lose]: {
        50: 165,
        60: 170,
        70: 175,
        80: 185
      },
      [weightGoal.keep]: {
        50: 145,
        60: 155,
        70: 165,
        80: 175
      },
      [weightGoal.gain]: {
        50: 180,
        60: 190,
        70: 200,
        80: 210
      }
    },
    [sex.female]: {
      [weightGoal.lose]: {
        50: 140,
        60: 150,
        70: 165,
        80: 175
      },
      [weightGoal.keep]: {
        50: 115,
        60: 125,
        70: 135,
        80: 145
      },
      [weightGoal.gain]: {
        50: 155,
        60: 165,
        70: 175,
        80: 185
      }
    }
  }
}

export {
  nutrientSexConstraints,
  nutrientSexGoalWeightConstraints,
  nutrientUnconditionalConstraints
}
