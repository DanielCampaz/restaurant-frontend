export interface ILoggerChild {
  Log (message: string | object | number) : void
  Error(message: string | object | number) : void
}
