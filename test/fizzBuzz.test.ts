import { fizzBuzz } from "../src/fizzBuzz";

describe("Testes da função fizzBuzz", () => {
    for (let index = 1; index < 30; index++) {
        if (index % 5 === 0 && index % 3 === 0) {
            it(`Deve retornar 'fizzbuzz' para o valor de entrada '${index}'`, () => {
                expect(fizzBuzz(index)).toBe("fizzbuzz");
            });
            return
        }
        if (index % 3 === 0) {
            it(`Deve retornar 'fizz' para o valor de entrada '${index}'`, () => {
                expect(fizzBuzz(index)).toBe("fizz");
            });
            return
        }
        if (index % 5 === 0) {
            it(`Deve retornar 'buzz' para o valor de entrada '${index}'`, () => {
                expect(fizzBuzz(index)).toBe("buzz");
            });
            return
        }
        it(`Deve retornar '${index}' para o valor de entrada '${index}'`, () => {
            expect(fizzBuzz(index)).toBe(`${index}`);
        });
    }

    // it("Deve retornar '1' para o valor de entrada '1'", () => {
    //     expect(fizzBuzz(1)).toBe("1");
    // });

    // it("Deve retornar '2' para o valor de entrada '2'", () => {
    //     expect(fizzBuzz(2)).toBe("2");
    // });

    // it("Deve retornar 'fizz' para o valor de entrada '3'", () => {
    //     expect(fizzBuzz(3)).toBe("fizz");
    // });

    // it("Deve retornar '4' para o valor de entrada '4'", () => {
    //     expect(fizzBuzz(4)).toBe("4");
    // });

    // it("Deve retornar 'buzz' para o valor de entrada '5'", () => {
    //     expect(fizzBuzz(5)).toBe("buzz");
    // });

    // it("Deve retornar 'fizz' para o valor de entrada '6'", () => {
    //     expect(fizzBuzz(6)).toBe("fizz");
    // });

    // it("Deve retornar '7' para o valor de entrada '7'", () => {
    //     expect(fizzBuzz(7)).toBe("7");
    // });

    // it("Deve retornar '8' para o valor de entrada '8'", () => {
    //     expect(fizzBuzz(8)).toBe("8");
    // });

    // it("Deve retornar 'fizz' para o valor de entrada '9'", () => {
    //     expect(fizzBuzz(9)).toBe("fizz");
    // });

    // it("Deve retornar 'buzz' para o valor de entrada '10'", () => {
    //     expect(fizzBuzz(10)).toBe("buzz");
    // });

    // it("Deve retornar '11' para o valor de entrada '11'", () => {
    //     expect(fizzBuzz(11)).toBe("11");
    // });

    // it("Deve retornar 'fizz' para o valor de entrada '12'", () => {
    //     expect(fizzBuzz(12)).toBe("fizz");
    // });

    // it("Deve retornar '13' para o valor de entrada '13'", () => {
    //     expect(fizzBuzz(13)).toBe("13");
    // });

    // it("Deve retornar '14' para o valor de entrada '14'", () => {
    //     expect(fizzBuzz(14)).toBe("14");
    // });

    // it("Deve retornar 'fizzbuzz' para o valor de entrada '15'", () => {
    //     expect(fizzBuzz(15)).toBe("fizzbuzz");
    // });

    // it("Deve retornar '16' para o valor de entrada '16'", () => {
    //     expect(fizzBuzz(16)).toBe("16");
    // });

    // it("Deve retornar '17' para o valor de entrada '17'", () => {
    //     expect(fizzBuzz(17)).toBe("17");
    // });

    // it("Deve retornar 'fizz' para o valor de entrada '18'", () => {
    //     expect(fizzBuzz(18)).toBe("fizz");
    // });

    // it("Deve retornar '19' para o valor de entrada '19'", () => {
    //     expect(fizzBuzz(19)).toBe("19");
    // });

    // it("Deve retornar 'buzz' para o valor de entrada '20'", () => {
    //     expect(fizzBuzz(20)).toBe("buzz");
    // });

    // it("Deve retornar 'fizz' para o valor de entrada '21'", () => {
    //     expect(fizzBuzz(21)).toBe("fizz");
    // });

    // it("Deve retornar '22' para o valor de entrada '22'", () => {
    //     expect(fizzBuzz(22)).toBe("22");
    // });

    // it("Deve retornar '23' para o valor de entrada '23'", () => {
    //     expect(fizzBuzz(23)).toBe("23");
    // });

    // it("Deve retornar 'fizz' para o valor de entrada '24'", () => {
    //     expect(fizzBuzz(24)).toBe("fizz");
    // });

    // it("Deve retornar 'buzz' para o valor de entrada '25'", () => {
    //     expect(fizzBuzz(25)).toBe("buzz");
    // });

    // it("Deve retornar '26' para o valor de entrada '26'", () => {
    //     expect(fizzBuzz(26)).toBe("26");
    // });

    // it("Deve retornar 'fizz' para o valor de entrada '27'", () => {
    //     expect(fizzBuzz(27)).toBe("fizz");
    // });

    // it("Deve retornar '28' para o valor de entrada '28'", () => {
    //     expect(fizzBuzz(28)).toBe("28");
    // });

    // it("Deve retornar '29' para o valor de entrada '29'", () => {
    //     expect(fizzBuzz(29)).toBe("29");
    // });

    // it("Deve retornar 'fizzbuzz' para o valor de entrada '15'", () => {
    //     expect(fizzBuzz(15)).toBe("fizzbuzz");
    // });

    // it("Deve retornar 'fizzbuzz' para o valor de entrada '30'", () => {
    //     expect(fizzBuzz(30)).toBe("fizzbuzz");
    // });
})