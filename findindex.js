/*
--------------------------------------------------------------------------
📌 MÉTODO: findIndex()
---------------------------------------------------------------------------
Função: Retorna a POSIÇÃO (ÍNDICE 0, 1, 2 ... ) do primeiro item que atende
à condição. Se não encontrar, retorna -1.
---------------------------------------------------------------------------
*/
console.log(" ===EXEMPLOS COM findIndex() === \n");

// Exemplo 1 (Básico): Posição de um valor primitivo

console.log(" --- Exemplo 1: Posição do primeiro maior de idade (Básico) --- ");

const idades = [12, 15, 17, 20, 25];

const indiceMaiorDeIdade = idades.findIndex((idade) => idade>=18);

console.log("Idades:", idades);
console.log(`Primeiro maior de idade está no índice: ${indiceMaiorDeIdade} (Valor: ${idades} indiceMaiorDeIdadconsole.log("\n")`);

// Exemplo 2 (Intermediário): Localizar posição de usuário por ID

console.log(" --- Exemplo 2: Posição de objeto por ID (Intermediário) --- ");

const usuarios = [
{ id: 10, nome: "Carla" },
{ id: 25, nome: "Diego" },
{ id: 32, nome: "Fernanda" }
];

const indiceDiego = usuarios.findIndex((u) => u.id === 25);

console.log("Índice do usuário ID 25:", indiceDiego);
console.log("Elemento encontrado na posição:", usuarios[indiceDiego]);
console.log("\n");

//------------------------------------------------------------------------------
// Exemplo 3 (Back-End Real): Exclusão em rota DELETE /produtos/:id com splice()
//------------------------------------------------------------------------------

console.log(" --- Exemplo 3: Remover item do banco simulado (Back-End Real) --- ");