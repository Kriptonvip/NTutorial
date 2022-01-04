import {HasFormatter} from '../interfaces/HasFormatter.js'

export class Invoice implements HasFormatter { // говорит о том что класс Invoice содержит в себе метов format() который возвразает строку
  constructor(
    readonly client: string,
    private details: string,
    public amount:number
  ){  }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }
}