import { Age } from "../../customer/Age";
import { OrderCriteria } from "../../order/OrderCriteria";
import { AbstractTicketSpecification } from "./AbstractTicketSpecification";
import { CertificateTypes } from "../../customer/CertificateTypes";

export class CinemaCitizenSeniorSpecification extends AbstractTicketSpecification {
  public isSatisfiedBy(orderCriteria: OrderCriteria): boolean {
    const customer = orderCriteria.customer;
    const isMember = customer.certificates().has(CertificateTypes.MembersCard);
    const is60OrOverAge = customer.age().value() >= new Age(60).value();

    return isMember && is60OrOverAge;
  }
}
