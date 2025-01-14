"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classificarTriangulo = classificarTriangulo;
function classificarTriangulo(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Valores inválidos para um triângulo";
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Não é um triângulo";
    }
    if (a === b && b === c) {
        return "Equilátero";
    }
    else if (a === b || b === c || a === c) {
        return "Isósceles";
    }
    else {
        return "Escaleno";
    }
}
