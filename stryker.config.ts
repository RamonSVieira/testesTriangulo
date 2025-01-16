import defineConfig from "@stryker-mutator/core";

export default new defineConfig({
  mutate: ["src/triangulo.ts"], // Arquivo que será testado
  testRunner: "command",
  commandRunner: {
    command: "npm test", // Comando para executar os testes do Cypress
  },
  checkers: ["typescript"],
  reporters: ["clear-text", "html"], // Relatórios no console e HTML
  coverageAnalysis: "off", // Necessário para o Cypress
  timeoutMS: 60000,
});
