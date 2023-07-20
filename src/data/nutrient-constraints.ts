import {
  constraint,
  sexConstraint,
  sexGoalWeightConstraint,
  weights
} from '@/entities/constraint/constraint.types'
import nutrients from '@/entities/nutrient/nutrient.types'
import { sex, weightGoal } from '@/entities/user/user.types'

const nutrientSexConstraints: { [key in nutrients]?: sexConstraint } = {
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

const nutrientUnconditionalConstraints: { [key in nutrients]?: constraint } = {
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

const nutrientSexGoalWeightConstraints: {
  [key in nutrients]?: sexGoalWeightConstraint
} = {
  [nutrients.carbohydrate]: {
    [sex.male]: {
      [weightGoal.lose]: {
        [weights.fifty]: 160,
        [weights.sixty]: 165,
        [weights.seventy]: 175,
        [weights.eighty]: 185
      },
      [weightGoal.keep]: {
        [weights.fifty]: 215,
        [weights.sixty]: 230,
        [weights.seventy]: 250,
        [weights.eighty]: 260
      },
      [weightGoal.gain]: {
        [weights.fifty]: 275,
        [weights.sixty]: 290,
        [weights.seventy]: 300,
        [weights.eighty]: 320
      }
    },
    [sex.female]: {
      [weightGoal.lose]: {
        [weights.fifty]: 120,
        [weights.sixty]: 150,
        [weights.seventy]: 170,
        [weights.eighty]: 150
      },
      [weightGoal.keep]: {
        [weights.fifty]: 150,
        [weights.sixty]: 190,
        [weights.seventy]: 200,
        [weights.eighty]: 220
      },
      [weightGoal.gain]: {
        [weights.fifty]: 200,
        [weights.sixty]: 245,
        [weights.seventy]: 260,
        [weights.eighty]: 240
      }
    }
  },
  [nutrients.lipid]: {
    [sex.male]: {
      [weightGoal.lose]: {
        [weights.fifty]: 40,
        [weights.sixty]: 40,
        [weights.seventy]: 40,
        [weights.eighty]: 40
      },
      [weightGoal.keep]: {
        [weights.fifty]: 55,
        [weights.sixty]: 60,
        [weights.seventy]: 60,
        [weights.eighty]: 65
      },
      [weightGoal.gain]: {
        [weights.fifty]: 70,
        [weights.sixty]: 70,
        [weights.seventy]: 75,
        [weights.eighty]: 80
      }
    },
    [sex.female]: {
      [weightGoal.lose]: {
        [weights.fifty]: 30,
        [weights.sixty]: 35,
        [weights.seventy]: 35,
        [weights.eighty]: 40
      },
      [weightGoal.keep]: {
        [weights.fifty]: 45,
        [weights.sixty]: 50,
        [weights.seventy]: 50,
        [weights.eighty]: 55
      },
      [weightGoal.gain]: {
        [weights.fifty]: 60,
        [weights.sixty]: 60,
        [weights.seventy]: 65,
        [weights.eighty]: 70
      }
    }
  },
  [nutrients.protein]: {
    [sex.male]: {
      [weightGoal.lose]: {
        [weights.fifty]: 165,
        [weights.sixty]: 170,
        [weights.seventy]: 175,
        [weights.eighty]: 185
      },
      [weightGoal.keep]: {
        [weights.fifty]: 145,
        [weights.sixty]: 155,
        [weights.seventy]: 165,
        [weights.eighty]: 175
      },
      [weightGoal.gain]: {
        [weights.fifty]: 180,
        [weights.sixty]: 190,
        [weights.seventy]: 200,
        [weights.eighty]: 210
      }
    },
    [sex.female]: {
      [weightGoal.lose]: {
        [weights.fifty]: 140,
        [weights.sixty]: 150,
        [weights.seventy]: 165,
        [weights.eighty]: 175
      },
      [weightGoal.keep]: {
        [weights.fifty]: 115,
        [weights.sixty]: 125,
        [weights.seventy]: 135,
        [weights.eighty]: 145
      },
      [weightGoal.gain]: {
        [weights.fifty]: 155,
        [weights.sixty]: 165,
        [weights.seventy]: 175,
        [weights.eighty]: 185
      }
    }
  }
}

export {
  nutrientSexConstraints,
  nutrientSexGoalWeightConstraints,
  nutrientUnconditionalConstraints
}
