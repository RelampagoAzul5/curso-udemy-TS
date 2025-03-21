export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}
  getIdade(): number {
    return this.idade;
  }
  getCPF(): string {
    return this.cpf;
  }
  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }
  getNomeCompleto(): string {
    console.log('Fazendo algo antes');
    const result = super.getNomeCompleto();
    return result + ' HEEEEY';
  }
}
export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return 'Isso vem do Cliente ' + this.nome + ' ' + this.sobrenome;
  }
}

const aluno = new Aluno('Giovanni', 'Henrique', 22, '000.000.000-00', '0001');
const cliente = new Cliente('Giovanni', 'Henrique', 22, '000.000.000-00');
const pessoa = new Pessoa('Giovanni', 'Henrique', 22, '000.000.000-00');
console.log(aluno);
console.log(cliente.getNomeCompleto());
console.log(pessoa.getNomeCompleto());
