// type TipoPessoa = {
//   nome: string;
//   sobrenome: string;
//   nomeCompleto(): string;
// };
type TipoNome = {
  nome: string;
};
type TipoSobrenome = {
  sobrenome: string;
};
type TipoNomeCompleto = {
  nomeCompleto(): string;
};
export class Pessoa implements TipoNome, TipoSobrenome, TipoNomeCompleto {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}
  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Giovanni', 'Henrique');
console.log(pessoa.nomeCompleto());
