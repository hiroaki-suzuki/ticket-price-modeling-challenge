import { CertificateTypes } from "../../../src/domain/customer/CertificateTypes";
import { Customer } from "../../../src/domain/customer/Customer";
import { Gender } from "../../../src/domain/customer/Gender";

test("証明書を持っているか判定できる", () => {
  const customer = new Customer(20, Gender.woman, [CertificateTypes.MembersCard]);

  expect(customer.certificates().has(CertificateTypes.MembersCard)).toBeTruthy();
  expect(customer.certificates().has(CertificateTypes.Identification)).toBeFalsy();
});
