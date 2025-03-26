interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}
type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};
const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Giovanni',
  sobrenome: 'Henrique',
  idade: 22,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 4214,
  sobrenome: 421231,
  idade: 22,
};

const aluno3: PessoaProtocolo2<string, number> = {
  nome: 'Giovanni',
  sobrenome: 'Henrique',
  idade: 22,
};

console.log(aluno1, aluno2, aluno3);
