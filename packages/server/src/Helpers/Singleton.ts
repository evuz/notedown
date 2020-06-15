export type ISingleton<T> = {
  getInstance(): T
}
export function singleton<T>(fn: (...args: any[]) => T): ISingleton<T> {
  let instance: T

  function getInstance() {
    if (!instance) {
      instance = fn()
    }
    return instance
  }

  return {
    getInstance
  }
}
