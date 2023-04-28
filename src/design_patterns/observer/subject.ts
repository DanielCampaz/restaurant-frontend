import { IObserver, ISubject } from "./interfaces";

export class Subject<T> implements ISubject<T> {
  state: T;
  observers: IObserver[] = []

  constructor(_state: T) {
    this.state = _state
  }
  
  setState(sataa: T): void {
    this.state = sataa
    console.log('ckjabkjcbsa')
    this.notify()
  }

  subscribe(o: IObserver): void {
    o.subject = this
    this.observers.push(o)
  }
  unSubscribe(o: IObserver): void {
    this.observers = this.observers.filter((e) => e.compare !== o.compare)
    o.subject = null
  }
  public notify(): void {
   if(this.observers.length > 0){
    console.log('kjbkjb')
    this.observers.forEach((e) => {
      e.notify()
    })
   }
  }

}