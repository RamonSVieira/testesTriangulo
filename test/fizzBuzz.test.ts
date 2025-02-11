import { fizzBuzz } from "../src/fizzBuzz";

describe("Testes da função fizzBuzz", () => {
    // for (let index = 1; index < 30; index++) {
    //     if (index % 5 === 0 && index % 3 === 0) {
    //         it(`Deve retornar 'fizzbuzz' para o valor de entrada '${index}'`, () => {
    //             expect(fizzBuzz(index)).toBe("fizzbuzz");
    //         });
    //         return
    //     }
    //     if (index % 3 === 0) {
    //         it(`Deve retornar 'fizz' para o valor de entrada '${index}'`, () => {
    //             expect(fizzBuzz(index)).toBe("fizz");
    //         });
    //         return
    //     }
    //     if (index % 5 === 0) {
    //         it(`Deve retornar 'buzz' para o valor de entrada '${index}'`, () => {
    //             expect(fizzBuzz(index)).toBe("buzz");
    //         });
    //         return
    //     }
    //     it(`Deve retornar '${index}' para o valor de entrada '${index}'`, () => {
    //         expect(fizzBuzz(index)).toBe(`${index}`);
    //     });
    // }

    it("Deve retornar o número recebido", () => {
        expect(fizzBuzz(1)).toBe("1");
    });

    it("Deve retornar 'fizz' para o valor de entrada que seja divisível por '3'", () => {
        expect(fizzBuzz(3)).toBe("fizz");
    });

    it("Deve retornar 'buzz' para o valor de entrada que seja divisível por '5'", () => {
        expect(fizzBuzz(5)).toBe("buzz");
    });
    
    it("Deve retornar 'fizzbuzz' para o valor de entrada divisível por '3' e por '5'", () => {
        expect(fizzBuzz(15)).toBe("fizzbuzz");
    });
})