type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };
type Pessoa = TemNome & TemSobrenome & TemIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type intercecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Giovanni',
  sobrenome: 'Fernandes',
  idade: 22,
};
console.log(pessoa);
export { pessoa };
