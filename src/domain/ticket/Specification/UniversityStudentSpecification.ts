import { OrderCriteria } from "../../order/OrderCriteria";
import { AbstractTicketSpecification } from "./AbstractTicketSpecification";
import { CertificateTypes } from "../../customer/CertificateTypes";

export class UniversityStudentSpecification extends AbstractTicketSpecification {
  public isSatisfiedBy(orderCriteria: OrderCriteria): boolean {
    const customer = orderCriteria.customer;
    return customer.certificates().has(CertificateTypes.StudentIdentificationCard);
  }
}
