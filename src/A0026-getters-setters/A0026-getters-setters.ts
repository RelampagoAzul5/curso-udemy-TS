export class Pessoa {
  constructor(
    private _nome: string,
    private _sobrenome: string,
    private _idade: number,
    private _cpf: string,
  ) {}
  set cpf(valor: string) {
    this._cpf = valor;
  }
  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Giovanni', 'Henrique', 22, '123.456.789-00');
pessoa.cpf = '123.456.789-99';
console.log(pessoa.cpf);
