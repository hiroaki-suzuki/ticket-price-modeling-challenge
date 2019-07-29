import { CertificateTypes } from "./domain/customer/CertificateTypes";
import { Customer } from "./domain/customer/Customer";
import { Gender } from "./domain/customer/Gender";
import { Screen } from "./domain/theater/Screen";
import { TicketPriceTable } from "./domain/ticket/TicketPriceTable";

const customer = new Customer(59, Gender.man, [CertificateTypes.MembersCard]);
const screen = new Screen(new Date("2019/08/02(金) 19:59:59"));
const orderCriteria = { customer, screen };

const ticketPriceTable = new TicketPriceTable();
const ticket = ticketPriceTable.findTicket(orderCriteria);

// tslint:disable-next-line:no-console
console.log(ticket);
