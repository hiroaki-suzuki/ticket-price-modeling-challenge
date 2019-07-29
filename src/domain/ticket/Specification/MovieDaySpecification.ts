import { OrderCriteria } from "../../order/OrderCriteria";
import { AbstractTicketSpecification } from "./AbstractTicketSpecification";

export class MovieDaySpecification extends AbstractTicketSpecification {
  public isSatisfiedBy(orderCriteria: OrderCriteria): boolean {
    const screen = orderCriteria.screen;
    return screen.screenDate().getDate() === 1;
  }
}
