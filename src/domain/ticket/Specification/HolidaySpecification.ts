import { OrderCriteria } from "../../order/OrderCriteria";
import { AbstractTicketSpecification } from "./AbstractTicketSpecification";

export class HolidaySpecification extends AbstractTicketSpecification {
  public isSatisfiedBy(orderCriteria: OrderCriteria): boolean {
    const screen = orderCriteria.screen;
    return [0, 6].indexOf(screen.screenDate().getDay()) > 0;
  }
}
