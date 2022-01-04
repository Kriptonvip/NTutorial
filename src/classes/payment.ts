import {HasFormatter} from '../interfaces/HasFormatter.js'

export class Payment implements HasFormatter { // говорит о том что класс Invoice содержит в себе метов format() который возвразает строку
  constructor(
    readonly recepient: string,
    private details: string,
    public amount:number
  ){  }

  format() {
    return `${this.recepient} is owed $${this.amount} for ${this.details}`;
  }
}