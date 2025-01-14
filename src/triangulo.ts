export function classificarTriangulo(a: number, b: number, c: number): string {
    if (a <= 0 || b <= 0 || c <= 0) {
      return "Valores inválidos para um triângulo";
    }
  
    if (a + b <= c || a + c <= b || b + c <= a) {
      return "Não é um triângulo";
    }
  
    if (a === b && b === c) {
      return "Equilátero";
    } else if ((a === b && b !== c) || (b === c && c !== a ) || (a === c && c !== b)) {
      return "Isósceles";
    } else {
      return "Escaleno";
    }
  }