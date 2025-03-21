export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}
  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, this.idadePadrao, this.cpfPadrao);
  }
}

const pessoa1 = new Pessoa('Giovanni', 'Henrique', 22, '123.456.789-00');
const pessoa2 = Pessoa.criaPessoa('Juliana', 'Amaral');
console.log(pessoa1);
console.log(pessoa2);
