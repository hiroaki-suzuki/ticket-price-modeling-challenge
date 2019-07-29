import { OrderCriteria } from "../../order/OrderCriteria";
import { AndSpecification } from "./AndSpecification";
import { TicketSpecification } from "./TicketSpecification";

export abstract class AbstractTicketSpecification implements TicketSpecification {
  public abstract isSatisfiedBy(orderCriteria: OrderCriteria): boolean;

  public and(other: TicketSpecification): TicketSpecification {
    return new AndSpecification(this, other);
  }
}
