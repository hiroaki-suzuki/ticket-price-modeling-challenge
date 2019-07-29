import { Price } from "../../../src/domain/ticket/Price";

test("料金を表示できる", () => {
  const price = new Price(1000);
  expect(price.amount()).toBe(1000);
});

test("マイナス値の場合は例外が発生する", () => {
  expect(() => {
    new Price(-1);
  }).toThrow(RangeError);
});

test("どちらの料金が小さいか判定できる", () => {
  const basePrice = new Price(1000);
  const lessPrice = new Price(999);
  const equalPrice = new Price(1000);
  const greaterPrice = new Price(1001);

  expect(basePrice.lowerThan(lessPrice)).toBeFalsy();
  expect(basePrice.lowerThan(equalPrice)).toBeFalsy();
  expect(basePrice.lowerThan(greaterPrice)).toBeTruthy();
});
