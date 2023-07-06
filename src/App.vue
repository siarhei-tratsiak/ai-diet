<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'

// Define the variables and constants
import * as tf from '@tensorflow/tfjs';

// Define the variables and constants
const x = tf.tensor([[1, 2], [1, 2], [1, 2]]);
const y = tf.tensor([3, 5, 0]);

// Define the model
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [2] }));

// Compile the model
model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// Train the model
async function trainModel() {
  for (let i = 0; i < 20; i++) {
    const response = await model.fit(x, y, { epochs: 10 });
    console.log(response.history.loss[0]);
  }
}

// Call the trainModel function
trainModel().then(() => {
  // Use the trained model to make predictions
  const predictions = model.predict(x);
  (predictions as tf.Tensor).print();
});
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
