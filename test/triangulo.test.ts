import { classificarTriangulo } from "../src/triangulo";

describe("Testes da função classificarTriangulo", () => {
  it("Deve retornar 'Equilátero' para lados iguais", () => {
    expect(classificarTriangulo(3, 3, 3)).toBe("Equilátero");
  });

  it("Deve retornar 'Isósceles' para dois lados iguais e um lado diferente", () => {
    expect(classificarTriangulo(3, 3, 4)).toBe("Isósceles");
  });

  it("Deve retornar 'Isósceles' para um lado diferente e dois lados iguais", () => {
    expect(classificarTriangulo(4, 3, 3)).toBe("Isósceles");
  });

  it("Deve retornar 'Isósceles' para um lado diferente, um lado igual e um lado diferente", () => {
    expect(classificarTriangulo(3, 4, 3)).toBe("Isósceles");
  });

  it("Deve retornar 'Escaleno' para lados diferentes", () => {
    expect(classificarTriangulo(3, 4, 5)).toBe("Escaleno");
  });

  it("Deve retornar 'Valores inválidos para um triângulo' para valores menores ou iguais a zero", () => {
    expect(classificarTriangulo(0, 3, 3)).toBe("Valores inválidos para um triângulo");
  });

  it("Deve retornar 'Não é um triângulo' se a soma de dois lados for menor ou igual ao terceiro", () => {
    expect(classificarTriangulo(1, 2, 10)).toBe("Não é um triângulo");
  });
});