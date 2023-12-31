import * as tf from '@tensorflow/tfjs'

import Solver from '@/entities/solver/solver'

export default class MlSolver extends Solver {
  public static solve(x: number[][], y: number[]): number[] {
    const tensorX = tf.tensor2d(x)
    const tensorY = tf.tensor1d(y)

    const numCoefficients = tensorX.shape[1]
    const coefficients = tf.variable(tf.randomUniform([numCoefficients, 1]))

    // Define the optimizer and training configuration
    const learningRate = 0.0000000001
    const optimizer = tf.train.sgd(learningRate)
    const numIterations = 1000

    // Train the model
    for (let iter = 0; iter < numIterations; iter++) {
      optimizer.minimize(() =>
        MlSolver.optimizerFunction(tensorX, tensorY, coefficients)
      )
    }

    // Get the values of the coefficients
    const coefficientsValues = coefficients.arraySync()

    return coefficientsValues as number[]
  }

  private static predict(
    tensorX: tf.Tensor2D,
    coefficients: tf.Variable<tf.Rank>
  ) {
    return tf.matMul(tensorX, coefficients)
  }

  private static loss(predictions: tf.Tensor<tf.Rank>, tensorY: tf.Tensor1D) {
    return predictions.sub(tensorY).square().mean().asScalar()
  }

  private static optimizerFunction(
    tensorX: tf.Tensor2D,
    tensorY: tf.Tensor1D,
    coefficients: tf.Variable<tf.Rank>
  ) {
    const predictions = this.predict(tensorX, coefficients)
    const currentLoss = this.loss(predictions, tensorY)

    return currentLoss
  }
}
