"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangulo_1 = require("./triangulo");
function main() {
    const lados = [3, 3, 3];
    const [a, b, c] = lados;
    console.log(`Os lados são: ${a}, ${b}, ${c}`);
    console.log(`Classificação: ${(0, triangulo_1.classificarTriangulo)(a, b, c)}`);
}
main();
