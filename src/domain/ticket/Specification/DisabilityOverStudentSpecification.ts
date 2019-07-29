import { Age } from "../../customer/Age";
import { OrderCriteria } from "../../order/OrderCriteria";
import { AbstractTicketSpecification } from "./AbstractTicketSpecification";
import { CertificateTypes } from "../../customer/CertificateTypes";

export class DisabilityOverStudentSpecification extends AbstractTicketSpecification {
  public isSatisfiedBy(orderCriteria: OrderCriteria): boolean {
    const customer = orderCriteria.customer;
    const hasDisabilityHandbook = customer.certificates().has(CertificateTypes.DisabilityHandbook);
    const hasStudentIdentificationCard = customer.certificates().has(CertificateTypes.StudentIdentificationCard);
    const isOver18Age = customer.age().value() >= new Age(18).value();

    // 学生以上の定義が不明
    return hasDisabilityHandbook && (!hasStudentIdentificationCard && isOver18Age);
  }
}
