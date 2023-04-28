import { ILoggerChild } from "../interfaces/ILoggerChild";
import { EnumColorLogger } from "../types.enum";
import ColorImplementation from "./ColorImplementation";

export class Logger {
  private loggerChild: LoggerChild
  private modelComplete: string
  private colorMessage: string
  private colorErrorMessage: string
  private log = console.log

  constructor(_color: EnumColorLogger, _model: string) {
    this.modelComplete = `[${_model.toUpperCase()}]: `
    this.colorMessage = ColorImplementation.getColor(_color)
    this.colorErrorMessage = ColorImplementation.getError()
    this.loggerChild = new LoggerChild(this.log, this.modelComplete, this.colorMessage, this.colorErrorMessage)
  }

  Log(message: string | number | object | null | undefined | boolean ): void {
    if (Array.isArray(message)) {
      this.log(this.colorMessage, this.modelComplete)
      this.log(message)
    } else if (typeof message === 'object') {
      this.log(this.colorMessage, this.modelComplete)
      this.log(message)
    } else {
      this.log(this.colorMessage, this.modelComplete + message)
    }
  }

  Error(message: string | number | object | null | undefined | boolean ): void {
    if (Array.isArray(message)) {
      this.log(this.colorErrorMessage, this.modelComplete)
      this.log(message)
    } else if (typeof message === 'object') {
      this.log(this.colorErrorMessage, this.modelComplete)
      this.log(message)
    } else {
      this.log(this.colorErrorMessage, this.modelComplete + message)
    }
  }

  getLoggerChild (): ILoggerChild {
    return this.loggerChild
  }
}

export class LoggerChild implements ILoggerChild {

  private log: Function
  private model: string
  private colorM: string
  private colorEM: string

  constructor(_log: Function, _model: string, _colorM: string, _colorEM: string) {
    this.log = _log
    this.model = _model
    this.colorM = _colorM
    this.colorEM = _colorEM
  }

  Log(message: string | number | object | null | undefined | boolean ): void {
    if (Array.isArray(message)) {
      this.log(this.colorM, this.model)
      this.log(message)
    } else if (typeof message === 'object') {
      this.log(this.colorM, this.model)
      this.log(message)
    } else {
      this.log(this.colorM, this.model + message)
    }
  }

  Error(message: string | number | object | null | undefined | boolean ): void {
    if (Array.isArray(message)) {
      this.log(this.colorEM, this.model)
      this.log(message)
    } else if (typeof message === 'object') {
      this.log(this.colorEM, this.model)
      this.log(message)
    } else {
      this.log(this.colorEM, this.model + message)
    }
  }
}