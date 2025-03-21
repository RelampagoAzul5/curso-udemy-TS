export class Empresa {
  readonly nome: string; // Public não necessário
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }
  mostrarColaboradores() {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}
export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11.111.111/0001-11');
  }

  pop(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}
export class Colaborador {
  constructor(
    public readonly nome: string,
    public sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Giovanni', 'Henrique');
const colaborador2 = new Colaborador('Juliana', 'Amaral');
const colaborador3 = new Colaborador('Bernardo', 'Fernandes');
console.log(empresa1);
console.log(empresa1.nome);
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);

const colaboradorRemovido = empresa1.pop();
console.log(empresa1);
empresa1.mostrarColaboradores();
