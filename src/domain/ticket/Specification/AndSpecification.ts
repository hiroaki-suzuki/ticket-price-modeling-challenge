import { OrderCriteria } from "../../order/OrderCriteria";
import { TicketSpecification } from "./TicketSpecification";

export class AndSpecification implements TicketSpecification {
  private readonly _spec1: TicketSpecification;
  private readonly _spec2: TicketSpecification;

  constructor(spec1: TicketSpecification, spec2: TicketSpecification) {
    this._spec1 = spec1;
    this._spec2 = spec2;
  }

  public isSatisfiedBy(orderCriteria: OrderCriteria): boolean {
    return this._spec1.isSatisfiedBy(orderCriteria)
        && this._spec2.isSatisfiedBy(orderCriteria);
  }

  public and(other: TicketSpecification): TicketSpecification {
    return new AndSpecification(this, other);
  }
}
