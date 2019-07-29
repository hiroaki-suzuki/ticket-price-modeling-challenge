import { Price } from "./Price";
import { TicketTypes } from "./TicketType";

export class Ticket {
  private readonly _ticketType: TicketTypes;
  private readonly _price: Price;

  constructor(ticketType: TicketTypes, price: number) {
    this._ticketType = ticketType;
    this._price = new Price(price);
  }

  public ticketType(): TicketTypes {
    return this._ticketType;
  }

  public price(): Price {
    return this._price;
  }
}
