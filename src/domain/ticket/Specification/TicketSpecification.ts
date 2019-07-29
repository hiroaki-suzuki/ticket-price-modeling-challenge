import { OrderCriteria } from "../../order/OrderCriteria";

export interface TicketSpecification {
  isSatisfiedBy(orderCriteria: OrderCriteria): boolean;

  and(other: TicketSpecification): TicketSpecification;
}
