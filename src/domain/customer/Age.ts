export class Age {
  private readonly _value: number;

  constructor(value: number) {
    if (value < 0) { throw new RangeError(); }

    this._value = value;
  }

  public value(): number {
    return this._value;
  }
}
