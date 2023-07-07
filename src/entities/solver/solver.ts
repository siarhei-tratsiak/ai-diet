import ISolver from "@/entities/solver/solver.types"

export default abstract class Solver implements ISolver {
  public solve(x: number[][], y: number[][]): number[] {
    throw new Error('not implemented')
  }
}