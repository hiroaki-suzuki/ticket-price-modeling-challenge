import { Ticket } from "../../../src/domain/ticket/Ticket";
import { TicketTypes } from "../../../src/domain/ticket/TicketType";

test("料金を表示できる", () => {
  const ticket = new Ticket(TicketTypes.CinemaCitizen, 1000);
  expect(ticket.price().amount()).toBe(1000);
});
