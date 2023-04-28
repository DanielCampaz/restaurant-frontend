export interface ISubject<T> {
  state: T
  observers: IObserver[]
  subscribe(o: IObserver): void
  unSubscribe(o: IObserver): void
  setState(sataa: T): void
  notify(): void
}

export interface IObserver {
  subject: ISubject<any> | null 
  compare: number
  notify(): void
}
