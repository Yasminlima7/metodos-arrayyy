const usuarios = [
{ id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
{ id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
{ id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
{ id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" }
];

// 1
const listarUsuarios = () =>
usuarios.map(({ nome, cargo }) => ({ nome, cargo }));

// 2
const buscarUsuarioPorId = id =>
usuarios.find(usuario => usuario.id === id);

// 3
const listarUsuariosAtivos = () =>
usuarios.filter(usuario => usuario.ativo);

// 4
const existeUsuarioInativo = () =>
usuarios.some(usuario => !usuario.ativo);

// 5
const todosUsuariosMaioresDeIdade = () =>
usuarios.every(usuario => usuario.idade >= 18);

// 6
const calcularMediaIdade = () =>
usuarios.reduce((total, usuario) => total + usuario.idade, 0) / usuarios.length;


// TESTES
console.log("Lista resumida:", listarUsuarios());
console.log("Buscar ID 2:", buscarUsuarioPorId(2));
console.log("Ativos:", listarUsuariosAtivos());
console.log("Há inativos?", existeUsuarioInativo());
console.log("Todos maiores de idade?", todosUsuariosMaioresDeIdade());
console.log("Média de idade:", calcularMediaIdade());