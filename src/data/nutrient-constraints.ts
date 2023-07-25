import {
  Constraint,
  SexConstraint,
  SexGoalWeightConstraint,
  Weights
} from '@/entities/constraint/constraint.types'
import { Nutrients } from '@/entities/nutrient/nutrient.types'
import { Sex, WeightGoal } from '@/entities/user/user.types'

const nutrientSexConstraints: { [key in Nutrients]?: SexConstraint } = {
  [Nutrients.potassium]: { maleMin: 3400, femaleMin: 2600 },
  [Nutrients.zinc]: { maleMin: 9.4, femaleMin: 6.8, max: 40 },
  [Nutrients.copper]: { maleMin: 1.6, femaleMin: 1.3, max: 5 },
  [Nutrients.vitaminA]: { maleMin: 900, femaleMin: 700, max: 3000 },
  [Nutrients.vitaminC]: { maleMin: 110, femaleMin: 95, max: 2000 },
  [Nutrients.thiamin]: { maleMin: 1.2, femaleMin: 1.1 },
  [Nutrients.vitaminB6]: { maleMin: 1.7, femaleMin: 1.6, max: 25 },
  [Nutrients.choline]: { maleMin: 550, femaleMin: 425, max: 3500 },
  [Nutrients.vitaminK]: { maleMin: 120, femaleMin: 90 }
}

const nutrientUnconditionalConstraints: { [key in Nutrients]?: Constraint } = {
  [Nutrients.alcohol]: { min: 0, max: 24 },
  [Nutrients.water]: { min: 1000, max: 7000 },
  [Nutrients.caffeine]: { min: 0, max: 100 },
  [Nutrients.theobromine]: { min: 0, max: 250 },
  [Nutrients.fiber]: { min: 30 },
  [Nutrients.phosphorus]: { min: 580, max: 4000 },
  [Nutrients.sodium]: { min: 500, max: 1500 },
  [Nutrients.selenium]: { min: 70, max: 300 },
  [Nutrients.retinol]: { min: 900, max: 1500 },
  [Nutrients.betaCarotene]: { min: 4800 },
  [Nutrients.vitaminE]: { min: 5, max: 300 },
  [Nutrients.lycopene]: { min: 8000, max: 21000 },
  [Nutrients.luteinZeaxanthin]: { min: 5000, max: 10000 },
  [Nutrients.riboflavin]: { min: 1.6 },
  [Nutrients.folate]: { min: 400, max: 1000 },
  [Nutrients.vitaminB12]: { min: 4 },
  [Nutrients.cholesterol]: { min: 0, max: 3000 }
}

const nutrientSexGoalWeightConstraints: {
  [key in Nutrients]?: SexGoalWeightConstraint
} = {
  [Nutrients.carbohydrate]: {
    [Sex.male]: {
      [WeightGoal.lose]: {
        [Weights.fifty]: 160,
        [Weights.sixty]: 165,
        [Weights.seventy]: 175,
        [Weights.eighty]: 185
      },
      [WeightGoal.keep]: {
        [Weights.fifty]: 215,
        [Weights.sixty]: 230,
        [Weights.seventy]: 250,
        [Weights.eighty]: 260
      },
      [WeightGoal.gain]: {
        [Weights.fifty]: 275,
        [Weights.sixty]: 290,
        [Weights.seventy]: 300,
        [Weights.eighty]: 320
      }
    },
    [Sex.female]: {
      [WeightGoal.lose]: {
        [Weights.fifty]: 120,
        [Weights.sixty]: 150,
        [Weights.seventy]: 170,
        [Weights.eighty]: 150
      },
      [WeightGoal.keep]: {
        [Weights.fifty]: 150,
        [Weights.sixty]: 190,
        [Weights.seventy]: 200,
        [Weights.eighty]: 220
      },
      [WeightGoal.gain]: {
        [Weights.fifty]: 200,
        [Weights.sixty]: 245,
        [Weights.seventy]: 260,
        [Weights.eighty]: 240
      }
    }
  },
  [Nutrients.lipid]: {
    [Sex.male]: {
      [WeightGoal.lose]: {
        [Weights.fifty]: 40,
        [Weights.sixty]: 40,
        [Weights.seventy]: 40,
        [Weights.eighty]: 40
      },
      [WeightGoal.keep]: {
        [Weights.fifty]: 55,
        [Weights.sixty]: 60,
        [Weights.seventy]: 60,
        [Weights.eighty]: 65
      },
      [WeightGoal.gain]: {
        [Weights.fifty]: 70,
        [Weights.sixty]: 70,
        [Weights.seventy]: 75,
        [Weights.eighty]: 80
      }
    },
    [Sex.female]: {
      [WeightGoal.lose]: {
        [Weights.fifty]: 30,
        [Weights.sixty]: 35,
        [Weights.seventy]: 35,
        [Weights.eighty]: 40
      },
      [WeightGoal.keep]: {
        [Weights.fifty]: 45,
        [Weights.sixty]: 50,
        [Weights.seventy]: 50,
        [Weights.eighty]: 55
      },
      [WeightGoal.gain]: {
        [Weights.fifty]: 60,
        [Weights.sixty]: 60,
        [Weights.seventy]: 65,
        [Weights.eighty]: 70
      }
    }
  },
  [Nutrients.protein]: {
    [Sex.male]: {
      [WeightGoal.lose]: {
        [Weights.fifty]: 165,
        [Weights.sixty]: 170,
        [Weights.seventy]: 175,
        [Weights.eighty]: 185
      },
      [WeightGoal.keep]: {
        [Weights.fifty]: 145,
        [Weights.sixty]: 155,
        [Weights.seventy]: 165,
        [Weights.eighty]: 175
      },
      [WeightGoal.gain]: {
        [Weights.fifty]: 180,
        [Weights.sixty]: 190,
        [Weights.seventy]: 200,
        [Weights.eighty]: 210
      }
    },
    [Sex.female]: {
      [WeightGoal.lose]: {
        [Weights.fifty]: 140,
        [Weights.sixty]: 150,
        [Weights.seventy]: 165,
        [Weights.eighty]: 175
      },
      [WeightGoal.keep]: {
        [Weights.fifty]: 115,
        [Weights.sixty]: 125,
        [Weights.seventy]: 135,
        [Weights.eighty]: 145
      },
      [WeightGoal.gain]: {
        [Weights.fifty]: 155,
        [Weights.sixty]: 165,
        [Weights.seventy]: 175,
        [Weights.eighty]: 185
      }
    }
  }
}

export {
  nutrientSexConstraints,
  nutrientSexGoalWeightConstraints,
  nutrientUnconditionalConstraints
}
