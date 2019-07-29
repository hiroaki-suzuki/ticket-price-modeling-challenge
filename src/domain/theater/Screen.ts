export class Screen {
  private readonly _screenDate: Date;

  constructor(screenDate: Date) {
    this._screenDate = screenDate;
  }

  public screenDate() {
    return this._screenDate;
  }
}
