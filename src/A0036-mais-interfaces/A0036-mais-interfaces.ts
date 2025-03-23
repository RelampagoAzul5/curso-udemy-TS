// Declaration Merging
interface Pessoa {
  nome: string;
}
interface Pessoa {
  readonly sobrenome: string;
}
interface Pessoa {
  readonly enderecos: readonly string[];
}
interface Pessoa {
  idade?: number;
}
const pessoa1: Pessoa = {
  nome: 'Giovanni',
  sobrenome: 'Henrique',
  enderecos: ['Algum lugar'],
  idade: 22,
};
pessoa1.idade = 23;
console.log(pessoa1);
