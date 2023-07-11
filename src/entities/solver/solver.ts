import ISolver from '@/entities/solver/solver.types'

export default abstract class Solver implements ISolver {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public solve(x: number[][], y: number[][]): number[] {
    throw new Error('not implemented')
  }
}
