export default function Singleton<T>() {
  return class Singleton {
    static instance: T // must be public

    private static args: unknown[]

    protected constructor(...args: unknown[]) {
      Singleton.args = args
    }

    public static getInstance(): T {
      if (!this.instance) this.instance = new this(...Singleton.args) as T

      return this.instance
    }
  }
}
