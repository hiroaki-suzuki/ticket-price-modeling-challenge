export class Price {
  private readonly _amount: number;

  constructor(amount: number) {
    if (amount < 0) { throw new RangeError(); }

    this._amount = amount;
  }

  public amount(): number {
    return this._amount;
  }

  public lowerThan(otherPrice: Price): boolean {
    return this._amount < otherPrice._amount;
  }
}
