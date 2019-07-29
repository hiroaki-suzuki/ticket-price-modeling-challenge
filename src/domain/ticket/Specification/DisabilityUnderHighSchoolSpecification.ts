import { Age } from "../../customer/Age";
import { OrderCriteria } from "../../order/OrderCriteria";
import { AbstractTicketSpecification } from "./AbstractTicketSpecification";
import { CertificateTypes } from "../../customer/CertificateTypes";

export class DisabilityUnderHighSchoolSpecification extends AbstractTicketSpecification {
  public isSatisfiedBy(orderCriteria: OrderCriteria): boolean {
    const customer = orderCriteria.customer;
    const hasDisabilityHandbook = customer.certificates().has(CertificateTypes.DisabilityHandbook);
    const hasStudentIdentificationCard = customer.certificates().has(CertificateTypes.StudentIdentificationCard);
    const hasStudentHandbook = customer.certificates().has(CertificateTypes.StudentHandbook);
    const isUnder18Age = customer.age().value() <= new Age(18).value(); // いるのか？

    return hasDisabilityHandbook && (hasStudentIdentificationCard || hasStudentHandbook || isUnder18Age);
  }
}
