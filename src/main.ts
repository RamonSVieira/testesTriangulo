import { classificarTriangulo } from "./triangulo";

function main() {
  const lados = [3, 3, 3];
  const [a, b, c] = lados;

  console.log(`Os lados são: ${a}, ${b}, ${c}`);
  console.log(`Classificação: ${classificarTriangulo(a, b, c)}`);
}

main();