import { Customer } from "../customer/Customer";
import { Screen } from "../theater/Screen";

export interface OrderCriteria {
  customer: Customer;
  screen: Screen;
}
