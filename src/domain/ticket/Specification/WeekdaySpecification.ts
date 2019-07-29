import { OrderCriteria } from "../../order/OrderCriteria";
import { AbstractTicketSpecification } from "./AbstractTicketSpecification";

const weekdays = [1, 2, 3, 4, 5];

export class WeekdaySpecification extends AbstractTicketSpecification {
  public isSatisfiedBy(orderCriteria: OrderCriteria): boolean {
    const screen = orderCriteria.screen;
    return weekdays.indexOf(screen.screenDate().getDay()) > 0;
  }
}
