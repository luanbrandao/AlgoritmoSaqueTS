import { ATM } from "./atm";

describe("ATM", () => {
  it("should return correct configurations for a given withdrawal ammount", () => {
    const bills = [100, 50, 20, 10];
    const billAmmounts = [10, 10, 10, 10];
    const initialVariation = new Array(4).fill(0);
    const withdrawAmmount = 300;
    const result = ATM.solution(
      bills,
      billAmmounts,
      initialVariation,
      withdrawAmmount,
      0
    );
    console.log(result);

    // 2 x 50; 2 x 100
    // 1 x 10; 2 x 20; 3 x 50; 1 x2

    expect(
      result.some(function (element) {
        return element === [2, 2, 0, 0];
      })
    );

    expect(
      result.some(function (element) {
        return element === [1, 3, 2, 1];
      })
    );

    // expect(result.([2, 2, 0, 0])).toBeTruthy();
    // expect(result.includes([1, 3, 2, 1])).toBeTruthy();
    // expect(1).toBe(1)
  });

  it("should return two configurations: one with more higher bills, another with more lower bills", () => {
    const bills = [100, 50, 20, 10];
    const billAmmounts = [10, 10, 10, 10];
    const atm = new ATM(bills, billAmmounts);
    const configurations = atm.getConfigurations(300);
    const higherBills = summation(configurations.moreHigherBills);
    const lowerBillss = summation(configurations.moreLowerBills);
    expect(higherBills).toBeLessThan(lowerBillss);
  });

  function summation(array: number[]): number {
    return array.reduce((a: number, b: number) => a + b, 0);
  }
});
