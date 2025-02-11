import { fizzBuzz } from "../src/fizzBuzz";

describe("Testes da função fizzBuzz", () => {
    it("Deve retornar '1' para o valor de entrada 1", () => {
        expect(fizzBuzz(1)).toBe("1");
    });
})