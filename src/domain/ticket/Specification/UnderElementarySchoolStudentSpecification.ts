import { Age } from "../../customer/Age";
import { OrderCriteria } from "../../order/OrderCriteria";
import { AbstractTicketSpecification } from "./AbstractTicketSpecification";

export class UnderElementarySchoolStudentSpecification extends AbstractTicketSpecification {
  public isSatisfiedBy(orderCriteria: OrderCriteria): boolean {
    const customer = orderCriteria.customer;
    return customer.age().value() <= new Age(12).value();
  }
}
