<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import nutrientIndices from '@/data/nutrient-indices'
import productNutrientValues from '@/data/product-nutrient-values'
import MlSolver from '@/entities/solver/ml-solver'
import User from '@/entities/user/user'
import ConstraintsService from '@/services/constraint/constraints-service'

const nutrientValues = productNutrientValues.map(nutrient => nutrient[1])
const transposedNutrientValues = nutrientValues[0].map(
  (_: number, colIndex: number) => nutrientValues.map(row => row[colIndex])
)

const x: number[][] = []

const y: number[] = []

const constraints = ConstraintsService.getConstraints(User.getInstance())

Object.entries(constraints).forEach(([key, value]) => {
  const row = nutrientIndices.findIndex(
    nutrientIndex => nutrientIndex === Number(key)
  )

  if (row !== -1) {
    x.push(transposedNutrientValues[row])
    x.push(transposedNutrientValues[row])
    y.push(value.min)
    y.push(value.max)
  }
})

const result = MlSolver.solve(x, y)
  .flat()
  .sort((a, b) => b - a)
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />

  {{ result }}
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
